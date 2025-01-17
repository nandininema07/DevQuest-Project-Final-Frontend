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
import { getAuthToken } from '../..';

function TakeTest() {
  const webcamRef = useRef(null);
  const [recorder, setRecorder] = useState(null);
  const [recordedVideoURL, setRecordedVideoURL] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [webcamInitialized, setWebcamInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [shouldInitializeWebcam, setShouldInitializeWebcam] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { patientDetailsList: pdetails } = useContext(PatientContext);

  const singlePatientDetail = pdetails?.filter(data => data.id == id);

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
    setIsRecorded(false);
  };

  const startRecording = async () => {
    if (!webcamInitialized) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    setIsRecording(true);
    const stream = webcamRef.current.stream;
    const options = { type: 'video', mimeType: 'video/mp4' };
    const recorder = RecordRTC(stream, options);
    recorder.startRecording();
    setRecorder(recorder);
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
      if (!response.ok) throw new Error('Failed to fetch patient details');
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
    if (recorder) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(true);
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        const url = URL.createObjectURL(blob);
        setRecordedVideoURL(url);
        setIsRecorded(true);
      });
      setIsRecording(false);
      const blob = await fetch(recordedVideoURL).then(res => res.blob());
      const formData = new FormData();
      formData.append('video', blob, `${patientDetails?.fullname}_video.mp4`);
      formData.append('patient_email', patientDetails?.email);

      try {
        const response = await axios.post(`${backendurl}/video_process/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${tokenJson?.token?.access}`
          }
        });
        console.log('Video uploaded successfully:', response.data);
        setIsLoading(false);
        toast.success("Video Processed Successfully", { duration: 3000, position: 'top-center', iconTheme: { primary: '#008000', secondary: '#fff' } });
        setTimeout(() => navigate(`/measurements/${singlePatientDetail?.[0]?.id}/`), 2000);
      } catch (err) {
        console.log('Error uploading video:', err.message);
        setIsLoading(false);
      }
    }
  };

  const token = getAuthToken();
  const tokenJson = JSON.parse(token);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => { };

  const videoConstraintsDefault = { width: 1280, height: 445, facingMode: "user" };
  const videoConstraintsMobile = { width: 700, height: 845, facingMode: "user" };
  const [videoConstraints, setVideoConstraints] = useState(window.innerWidth < 768 ? videoConstraintsMobile : videoConstraintsDefault);

  const handleResize = () => {
    setVideoConstraints(window.innerWidth < 768 ? videoConstraintsMobile : videoConstraintsDefault);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} gutter={8} toastOptions={{ duration: 3000, style: { background: '#363636', color: '#fff' }, success: { duration: 3000, theme: { primary: 'green', secondary: 'black' } } }} />
      <div className="w-full mt-20 h-95vh flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-11/12">
          <button onClick={() => navigate(-1)} className="text-black">Back</button>
          <h2 className="text-2xl font-bold">Take Test</h2>
        </div>
        <div className="flex shadow-xl w-11/12 p-6 rounded-2xl items-center justify-center mt-10">
          <div className="flex-1">
            <Webcam videoConstraints={videoConstraints} ref={webcamRef} className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center gap-4 ml-6">
            {!isRecording && !isRecorded && (
              <button onClick={startRecording} className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white bg-black rounded-lg">Start Recording</button>
            )}
            {isRecording && (
              <button onClick={stopRecording} className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white bg-black rounded-lg">Stop Recording</button>
            )}
            <button onClick={() => console.log("Upload Video")} className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white bg-black rounded-lg">Upload Video</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TakeTest;
