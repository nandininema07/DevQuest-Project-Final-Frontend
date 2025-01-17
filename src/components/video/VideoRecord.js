import React, { useState, useRef } from 'react'
import Webcam from 'react-webcam';
import axios from 'axios';
import { backendurl } from '../../urls';

const VideoRecord = () => {
    const webcamRef = useRef(null);
    const videoRef = useRef(null);
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [videoBlob, setVideoBlob] = useState(null);

    const startRecording = async () => {
        setRecording(true);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const recorder = new MediaRecorder(stream);

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setVideoBlob(event.data);
                    const videoUrl = URL.createObjectURL(event.data);
                    videoRef.current.src = videoUrl;
                }
            };

            recorder.onstop = () => {
                console.log('Recording stopped');
            }

            setMediaRecorder(recorder)
            recorder.start();
        } catch (err) {
            console.error('Error accessing media devices', err);
        }
    }

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state == 'recording') {
            mediaRecorder.stop();
            setRecording(false);
        }
    }

    const sendVideoToBackend = async () => {
        if (!videoBlob) {
            console.error('No video to upload');
            return
        }
        try {
            const formData = new FormData();
            formData.append('video', videoBlob, 'video.webm');
            formData.append('patient_email', 'p8@moyo.com' );

            const response = await axios.post(`${backendurl}/video_process/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzODU2MTc1LCJpYXQiOjE3MTM3Njk3NzUsImp0aSI6Ijc5ZTg1MTNmMjYzMTQzZTdhYjQ5MGIxY2RjZjk4OGRjIiwidXNlcl9pZCI6MTd9.fLiplxgNvziDvSkDwDfcZDr74AuOahuKuQMJnbR-c7k`
                }
            });

            console.log(response);

            console.log("Video uploaded", response.data);

        } catch (err) {
            console.error('Error uploading video', err)
        }
    }
  return (
    <div>
        <Webcam ref={webcamRef} />
        <video ref={videoRef} controls  />
        {recording ? (
            <button onClick={stopRecording}>Stop Recording</button>
        ) : (
            <button onClick={startRecording}> Start Recording</button>
        )}
        <button onClick={sendVideoToBackend} disabled={!videoBlob}>Upload</button>
    </div>
  )
}

export default VideoRecord