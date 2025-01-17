import React, { useState } from "react";

const ImageModal = ({ responseImageBlob, onClose }) => {
  const [imageSrc, setImageSrc] = useState(null);

  // Convert Blob to image URL
  React.useEffect(() => {
    if (responseImageBlob) {
      const url = URL.createObjectURL(responseImageBlob);
      setImageSrc(url);

      // Cleanup the URL on unmount
      return () => URL.revokeObjectURL(url);
    }
  }, [responseImageBlob]);

  if (!responseImageBlob) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80 sm:w-96">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Response"
            className="w-full h-auto rounded-md"
          />
        ) : (
          <p className="text-center text-gray-500">Loading image...</p>
        )}
      </div>
    </div>
  );
};


export default ImageModal