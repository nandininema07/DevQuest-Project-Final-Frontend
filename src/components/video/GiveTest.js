import React, { useState, useRef, useEffect, useContext } from 'react';
import cloud from '../../images/Upload to Cloud.png';
import remove from '../../images/Remove.png';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { backendurl } from '../../urls';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';
import toast, { Toaster } from 'react-hot-toast';
import PatientContext from '../../context/PatientContext';
import ImageModal from './ImageModal';
import ModelViewer from './ModalViewer';
import { getAuthToken } from '../..';
import BackButton from '../Backbutton';

function TakeTest() {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { patientDetailsList: pdetails } = useContext(PatientContext);
  const singlePatientDetail = pdetails?.find(data => data.id === id);
  const token = getAuthToken();
  const tokenJson = JSON.parse(token);

  const startRecording = async () => {
    setRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setVideoBlob(event.data);
        }
      };
      recorder.start();
      recorder.onstop = () => setRecording(false);
    } catch (err) {
      console.error('Error accessing media devices', err);
      toast.error("Error accessing media devices");
    }
  };

  const stopRecording = () => {
    if (recording) {
      setRecording(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'video/mp4') {
      setUploadedFile(file);
      toast.success("MP4 file selected");
    } else {
      toast.error("Please upload a valid .mp4 file");
    }
  };

  const sendVideoToBackend = async () => {
    const videoToUpload = uploadedFile || videoBlob;
    if (!videoToUpload) {
      toast.error("No video to upload");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('video', videoToUpload, 'video.mp4');
      formData.append('patient_email', singlePatientDetail?.email);

      await axios.post(`${backendurl}/video_process/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': Bearer ${tokenJson?.token?.access}
        }
      });

      toast.success("Video uploaded successfully");
    } catch (err) {
      toast.error("Error uploading video");
      console.error('Error uploading video:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full h-90vh flex items-center justify-center relative mt-20'>
      <Toaster position="top-center" />
      <div className='absolute top-0 left-0 flex items-center'>
        <BackButton className={'mb-4 ml-2 mt-3'} />
        <h2 className="text-2xl font-bold ml-4">TAKE TEST</h2>
      </div>

      <div className='flex w-11/12 shadow-lg p-4 rounded-xl'>
        <div className='w-3/4 flex-col flex items-center justify-center'>
          <Webcam ref={webcamRef} className="w-9/12 h-max bg-black" />
        </div>

        <div className='w-1/4 flex flex-col items-center justify-center space-y-4'>
          {!recording && !isLoading && (
            <button onClick={startRecording} className="bg-blue-700 text-white px-4 py-2 rounded-lg">Start Recording</button>
          )}
          {recording && (
            <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded-lg">Stop Recording</button>
          )}
          <button onClick={sendVideoToBackend} className="bg-green-500 text-white px-4 py-2 rounded-lg">Upload</button>
          <button onClick={() => document.getElementById('fileUpload').click()} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Upload File (.mp4)</button>
          <input id="fileUpload" type="file" accept=".mp4" onChange={handleFileUpload} style={{ display: 'none' }} />
        </div>
      </div>
    </div>
  );
}

export default TakeTest;