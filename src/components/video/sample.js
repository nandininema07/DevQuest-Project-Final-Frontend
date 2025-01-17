import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const VideoCompressor = () => {
  const webcamRef = useRef(null);
  const [videoBlob, setVideoBlob] = useState(null);
  const [compressedBlob, setCompressedBlob] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const ffmpeg = createFFmpeg({ log: true });

  const recordVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setVideoBlob(blob);
        console.log('Original Video Size:', blob.size / (1024 * 1024), 'MB');
        compressVideo(blob);
      };

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      }, 5000); // Record for 5 seconds
    } catch (error) {
      console.error('Error recording video:', error);
    }
  };

  const compressVideo = async (blob) => {
    setIsProcessing(true);

    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    const fileName = 'input.webm';
    const outputFileName = 'output.mp4';

    // Load video file into FFmpeg
    ffmpeg.FS('writeFile', fileName, await fetchFile(blob));

    // Run compression
    await ffmpeg.run(
      '-i',
      fileName,
      '-vcodec',
      'libx264',
      '-crf',
      '28', // Adjust CRF for compression level (lower means better quality)
      outputFileName
    );

    // Retrieve compressed file
    const data = ffmpeg.FS('readFile', outputFileName);
    const compressedBlob = new Blob([data.buffer], { type: 'video/mp4' });
    setCompressedBlob(compressedBlob);

    console.log('Compressed Video Size:', compressedBlob.size / (1024 * 1024), 'MB');
    setIsProcessing(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Webcam ref={webcamRef} />
      <button
        onClick={recordVideo}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Record Video'}
      </button>
      <video
        src={videoBlob && URL.createObjectURL(videoBlob)}
        controls
        className="mt-4"
      />
      <video
        src={compressedBlob && URL.createObjectURL(compressedBlob)}
        controls
        className="mt-4"
      />
    </div>
  );
};

export default VideoCompressor;
