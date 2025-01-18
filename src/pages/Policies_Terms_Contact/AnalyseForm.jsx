import React, { useState } from 'react';

function AnalyzeForm() {
    const [file, setFile] = useState(null);
    const [recommendations, setRecommendations] = useState(null);
    const [error, setError] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Submit the form
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setError('Please upload an image.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file); // append the file to FormData

        try {
            // Send a POST request to your Flask API
            const response = await fetch('http://localhost:5000/analyze', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            // Check for any errors in the response
            if (data.error) {
                setError(data.error);
            } else {
                setRecommendations(data.recommendations);
                setError(null);
            }
        } catch (err) {
            setError('An error occurred while processing the request.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Analyze</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {recommendations && (
                <div>
                    <h3>Ayurvedic Recommendations:</h3>
                    <ul>
                        {recommendations.map((recommendation, index) => (
                            <li key={index}>{recommendation}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AnalyzeForm;
