import React, { useState, useRef, useEffect, useContext } from 'react';
import cloud from '../../images/Upload to Cloud.png';
import remove from '../../images/Remove.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { backendurl } from '../../urls';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PatientContext from '../../context/PatientContext';
import ImageModal from './ImageModal';
import ModelViewer from './ModalViewer';
import { getAuthToken } from '../..';
import BackButton from '../Backbutton';
function TakeTest() {
  const webcamRef = useRef(null);
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoBlob, setVideoBlob] = useState(null);
  const [stream, setStream] = useState(null)
  const [counter, setCounter] = useState(0)
  const [timerId, setTimerId] = useState(null)

  const [recorder, setRecorder] = useState(null);
  const [recordedVideoURL, setRecordedVideoURL] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [webcamInitialized, setWebcamInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  //to use if responseImageblob state fails
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(true);

  const [shouldInitializeWebcam, setShouldInitializeWebcam] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const responseModalRef = useRef(null);
  const [responseImageBlob, setResponseImageBlob] = useState(null); 
  const [measurements,setMeasurements] = useState({});
  const { id } = useParams();
  // const ffmpeg = createFFmpeg({ log: true });
  const [compressedBlob, setCompressedBlob] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const { patientDetailsList: pdetails } = useContext(PatientContext);

  const singlePatientDetail = pdetails?.filter(data => data.id == id)
  console.log(singlePatientDetail)
  useEffect(() => {
    if (webcamRef.current && !webcamInitialized) {
      webcamRef.current.props.onUserMedia(() => {
        setWebcamInitialized(true);
      });
    }
  }, [webcamRef, webcamInitialized, shouldInitializeWebcam]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setShouldInitializeWebcam(true); 
   
   
    setIsRecorded(false);// Set to true when modal is opened
  };
  const toggleModalResponseModal = () => {
    setResponseImageBlob(null);
  };

  useEffect(() => {
    if (recording) {
        const id = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000);
        setTimerId(id);
    } else {
        clearInterval(timerId);
        // setCounter(0)
    }
    return () => clearInterval(timerId)
  }, [recording])

  const startRecording = async () => {
    setRecording(true);
    setCounter(0)

        try {
            const newStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const recorder = new MediaRecorder(newStream);

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setVideoBlob(event.data);
                    // console.log('Original Video Size:', event.data.size / (1024 * 1024), 'MB');
                    // compressVideo(event.data);

                    const videoUrl = URL.createObjectURL(event.data);
                    // videoRef.current.src = videoUrl;
                }
            };

            recorder.onstop = () => {
                console.log('Recording stopped');
                if (stream) {
                    stopCamera(stream)
                }
            }

            setMediaRecorder(recorder)
            recorder.start();
            setStream(newStream);
        } catch (err) {
            console.error('Error accessing media devices', err);
        }
  };

  const [patientDetails, setPatientDetails] = useState();

  const fetchPatientDetails = async () => {
    try {
      const response = await fetch(`${backendurl}/view_patient/?email=${singlePatientDetail?.[0]?.email}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenJson?.token?.access}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch patient details');
      }
      const data = await response.json();
      setPatientDetails(data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  useEffect(() => {
    fetchPatientDetails();

  }, [id]);

  const stopRecording = async () => {
    if (mediaRecorder && mediaRecorder.state == 'recording') {
        mediaRecorder.stop();
        setRecording(false);
        if (stream) {
            stopCamera(stream)
        }
    }
  };

  const stopCamera = (cameraStream) => {
    const tracks = cameraStream.getTracks();
    tracks.forEach((track) => track.stop());
  }

  // const token = localStorage.getItem('token');
  const token  = getAuthToken();
  const tokenJson = JSON.parse(token);
  const compressVideo = (videoBlob) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(videoBlob);
      video.muted = true;
      
      video.onloadedmetadata = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // You can adjust these ratios for different compression levels
        canvas.width = video.videoWidth * 0.5;  // Reduce width by 50%
        canvas.height = video.videoHeight * 0.5; // Reduce height by 50%
        
        const stream = canvas.captureStream();
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'video/webm',
          videoBitsPerSecond: 1000000 // Adjust this value for different compression levels
        });
        
        const chunks = [];
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        
        mediaRecorder.onstop = () => {
          const compressedBlob = new Blob(chunks, { type: 'video/webm' });
          URL.revokeObjectURL(video.src); // Clean up
          video.remove();
          resolve(compressedBlob);
        };
  
        video.play();
        mediaRecorder.start();
  
        const processFrame = () => {
          if (video.currentTime < video.duration) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(processFrame);
          } else {
            mediaRecorder.stop();
          }
        };
        
        processFrame();
      };
    });
  };
  
  // Usage:
  const handleCompression = async (blob) => {
    try {
      setIsProcessing(true); // If using React state
      if (blob.size > 10 * 1024 * 1024) {
        console.log('Video size exceeds 10MB; compressing...');
        
      } else {
        console.log('Video size is below 10MB; skipping compression...');
        console.log('Original size:', blob.size / (1024 * 1024), 'MB');
        setIsProcessing(false);
        return blob;
      }
      const compressedBlob = await compressVideo(blob);
      console.log('Original size:', blob.size / (1024 * 1024), 'MB');
      console.log('Compressed size:', compressedBlob.size / (1024 * 1024), 'MB');
      
      // Optionally set React state here
      setCompressedBlob(compressedBlob);
      
      return compressedBlob;
    } catch (error) {
      console.error('Compression failed:', error);
      throw error; // Rethrow error if needed
    } finally {
      
      setIsProcessing(false);
    }
  };


  const sendVideoToBackend = async () => {
    if (!videoBlob) {
        console.error('No video to upload');
        toast.error("No video to upload", {
          duration: 3000,
          position: 'top-center',
          iconTheme: {
            primary: 'red',
            secondary: '#fff',
          },
        });
        return
    }
    setIsLoading(true)
    
    let loadingToastId;
    try {
      loadingToastId = toast.loading("Wait while analyzing Video....");
      const compressedBlob = await handleCompression(videoBlob);
      const formData = new FormData();

        //CODE TO DOWNLOAD THE ORIGINAL AND COMPRESSED VIDEO


        // const url = window.URL.createObjectURL(videoBlob);
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'original.webm');
        // document.body.appendChild(link);
        // link.click();
        // link.remove();
        // window.URL.revokeObjectURL(url);

        // const compressedUrl = window.URL.createObjectURL(compressedBlob);
        // const compressedLink = document.createElement('a');
        // compressedLink.href = compressedUrl;
        // compressedLink.setAttribute('download', 'compressed.webm');
        // document.body.appendChild(compressedLink);
        // compressedLink.click();
        // compressedLink.remove();
        // window.URL.revokeObjectURL(compressedUrl);

        //END OF CODE

        formData.append('video', compressedBlob, 'video.webm');
        formData.append('patient_email',singlePatientDetail[0]?.email);
        console.log("Patient details in formData:", singlePatientDetail[0].email);
        console.log("Patient details in formData:", formData.patient_email);
        const response = await axios.post(`${backendurl}/video_process/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${tokenJson?.token?.access}`
            }
        });

        console.log(response);

        console.log("Video uploaded", response.data);
        const Xmeasurements = response.headers.get('X-Measurements');
        console.log('Measurements:', Xmeasurements);
        console.log('res headr : ',response.headers)
        console.log(response.data.landmark_image_base64)
        
        setResponseImageBlob(response.data.landmark_image_base64) 
        console.log(response.headers['x-measurements']);
        const fixedJsonString = response.headers['x-measurements'].replace(/'/g, '"');
        const parsedMeasurements = JSON.parse(fixedJsonString);
        setMeasurements(parsedMeasurements)


      setIsLoading(false)
      toast.dismiss(loadingToastId);
        toast.success("Video Processed Successfully", {
            duration: 3000,
            position: 'top-center',
            iconTheme: {  
              primary: '#008000',
              secondary: '#fff',
            },
          });
    
          // setTimeout(() => { navigate(`/measurements/${singlePatientDetail?.[0]?.id}/`)}, 2000);

    } catch (err) {
        toast.dismiss(loadingToastId);
        console.error('Error uploading video', err)
        toast.error("", {
          duration: 1,
          position: 'top-center',
          iconTheme: {
            primary: '#fff',
            secondary: '#fff',
          },
        });
      }
      finally {
        setIsLoading(false)
      }
    }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
  };
 
  const videoConstraintsDefault = {
    width: 1280,
    height: 500,
    facingMode: "user"
  };
  const videoConstraintsMobile = {
    width: 700,
    height: 900,
    facingMode: "user"
  };

  const [videoConstraints, setVideoConstraints] = useState(
    window.innerWidth < 768 ? videoConstraintsMobile : videoConstraintsDefault
  );

  const handleResize = () => {
    setVideoConstraints(
      window.innerWidth < 768 ? videoConstraintsMobile : videoConstraintsDefault
    );
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { 
    const handleClickOutside = (event) => {
      console.log("Clicked outside");
      if (responseModalRef.current && !responseModalRef.current.contains(event.target)) {
          console.log("Closing modal");
          setIsModalOpen(false);
      }
  };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
 

  const formatMeasurement = (value) => {
    return parseFloat(value).toFixed(2);
  };

  return (
    <>
      {showModal && (
        <ImageModal
          responseImageBlob={responseImageBlob}
          onClose={() => setShowModal(false)}
        />
      )}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          // duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            // duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className='w-full h-90vh flex items-center justify-center relative mt-20'>        
  <div className='absolute top-0 left-0 flex items-center'>
    <BackButton className={'mb-4 ml-2 mt-3'}/>
    <h2 className="text-2xl font-bold ml-4">TAKE TEST</h2>
  </div>
  {isModalOpen && (
    <div className="absolute top-0 bottom-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white w-11/12 sm:w-2/3 max-w-xl h-auto p-6 rounded-lg z-50 overflow-hidden">
        <h2 className="text-3xl sm:text-2xl font-bold py-4">Guidelines</h2>
        <ol className='text-xl sm:text-lg ml-8 mt-4 text-left'>
          <li>1. Please stand straight exactly 7 feet away from the camera.</li>
          <li>2. Ensure that complete body is in the frame.</li>
          <li>3. Press "Start Recording" to record video.</li>
          <li>4. Press "Stop Recording" after recording is done.</li>
          <li>5. Give the system at least 2-3 minutes to process the data.</li>
        </ol>
        <button onClick={toggleModal} className="relative inline-flex mx-auto mt-6 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white hover:bg-blue-700 bg-black rounded-lg">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
          <span className="relative">OK</span>
        </button>
      </div>
    </div>
  )}

  {responseImageBlob && (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(128,128,128,0.5)] flex items-center justify-center z-1">
      <div className="bg-white w-11/12 lg:w-2/3 h-[98vh] flex flex-col rounded-lg z-50 p-4 overflow-hidden -mt-10">
  <h2 className="text-3xl sm:text-2xl font-bold text-center mb-4">Test Results</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto">
    <div className="flex items-center justify-center">
      <img
        src={`data:image/jpeg;base64,${responseImageBlob}`}
        alt="Measurement Results"
        className="max-w-full h-auto border rounded-lg shadow-lg"
      />
    </div>
    <div className="overflow-y-auto pr-2 space-y-3">
      {Object.entries(measurements).map(([key, value]) => (
        <div key={key} className="border-b border-gray-200 pb-3 last:border-b-0">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-medium text-gray-700">{key.replace(/_/g, ' ')}</h3>
            <div>
              <span className="text-md font-semibold text-gray-900">
                {typeof value === 'number' ? value.toFixed(2) : value}
              </span>
              <span className="ml-1 text-gray-600">cm</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="text-center mt-4">
    <button
      onClick={toggleModalResponseModal}
      className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white hover:bg-blue-700 bg-black rounded-lg"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700" />
      <span className="relative">OK</span>
    </button>
  </div>
</div>

    </div>
  )}

  <div className='flex w-11/12 shadow-lg p-4 rounded-xl'>
    <div className='w-3/4 flex-col flex items-center justify-center'>
      {isLoading && (
        <div className='absolute top-15 w-9/12 h-[60vh] flex items-center justify-center'>
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-700" />
        </div>
      )}

      <div className={`w-9/12 h-72 bg-black ${!shouldInitializeWebcam || (isRecorded && isLoading) ? 'block' : 'hidden'}`} />
      
      <div className={`w-full ${shouldInitializeWebcam && !isRecorded ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center justify-center space-y-0">
        <Webcam videoConstraints={videoConstraints} ref={webcamRef} style={{ height: '450px' }} />
        <div>Recording: {formatTime(counter)}</div>
        </div>
      </div>
      
      <video src={recordedVideoURL} className={`w-full bg-black sm:w-11/12 sm:bg-black ${!isRecording && isRecorded && !isLoading ? 'block' : 'hidden'}`} controls style={{ height: '450px' }} />
    </div>

    <div className='w-1/4 flex flex-col items-center justify-center space-y-4'>
      {!recording && !isLoading && (
        <button onClick={startRecording} className="bg-blue-700 text-white px-4 py-2 rounded-lg">Start Recording</button>
      )}
      {recording && (
        <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded-lg">Stop Recording</button>
      )}
      <button onClick={sendVideoToBackend} className="bg-green-500 text-white px-4 py-2 rounded-lg">Upload</button>
    </div>
  </div>
</div>

    </>
  );
}

export default TakeTest;
