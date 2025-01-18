import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]); 
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file); // "file" should match backend field name

        try {
            const response = await axios.post("http://localhost:3001/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage("File uploaded"); // Display backend response
        } catch (error) {
            console.error("Upload error:", error);
            setMessage(response.data.pythonOutput);
        }
    };

    return (
        <div>
            <h2>Upload a File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;
