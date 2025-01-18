import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { backendurl } from '../../urls';
import { useParams } from 'react-router-dom';
import profileImage from '../../images/profile-removebg-preview 1.png';
import toast, { Toaster } from 'react-hot-toast';
import { getAuthToken } from '../..';
import BackButton from '../../components/Backbutton';
import FloatingChat from '../../components/FloatingChat';

function Measurements() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false); // New state for image modal
    const [expanded, setExpanded] = useState(false); // To control "See More" toggle
    const modalRef = useRef(null);
    //const token = getAuthToken();
    // const tokenJson = JSON.parse(token);

    const [measurementHistoryData, setMeasurementHistoryData] = useState([]);
    const [measurementDetails, setMeasurementDetails] = useState(null); // To store the selected entry
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image

    const toggleModal = (details) => {
        setMeasurementDetails(details); // Store the selected data
        setIsModalOpen(true); // Open the modal
    };

    const toggleImageModal = (imageData) => {
        setSelectedImage(imageData); // Set the selected image
        setIsImageModalOpen(true); // Open the image modal
    };

    useEffect(() => {
        const fetchMeasurementHistory = async () => {
            try {
                // if (!tokenJson?.token?.access) {
                //     navigate("/login");
                //     return;
                // }

                const response = await fetch(`${backendurl}/measurement_history/?patient_id=${id}`, {
                    method: "GET",
                    headers: {
                       // Authorization: `Bearer ${tokenJson?.token?.access}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    console.error("Error fetching data:", response.statusText);
                    toast.error("Error fetching measurement history.");
                    return;
                }

                const responseData = await response.json();
                console.log("Fetched Measurement History:", responseData);

                if (responseData?.all_data?.length > 0) {
                    setMeasurementHistoryData(responseData.all_data);
                } else {
                    console.error("No measurement history data found.");
                    toast.error("No measurement history data found.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Error fetching measurement history.");
            } finally {
                setLoading(false);
            }
        };

        fetchMeasurementHistory();
    }, [id]);
    // }, [id, tokenJson?.token?.access]);

    const removeUnderscores = (inputString) => inputString.replace(/_/g, ' ');

    if (loading) {
        return (
            <div className='w-full h-[80vh] flex items-center justify-center'>
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-700" />
            </div>
        );
    }

    return (
        <div className='w-full relative h-fit mb-10 flex flex-col font-montserrat items-center justify-center mt-20'>
            <button className='p-5 absolute bottom-5 left-5' onClick= {() => FloatingChat()}>Chat bot</button>
            <div className='w-full flex items-center'>
                <BackButton className={"mb-4 mt-2 ml-2 top-0 left-0"} />
                <h1 className="text-2xl font-bold ml-4">Measurements Table</h1>
            </div>

            {/* Modal for showing details */}
            {isModalOpen && measurementDetails && (
                <div className="absolute overflow-y-auto top-0 bottom-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[rgba(129,129,129,0.5)]">
                    <div className="relative bg-white w-3/5 h-[90vh] overflow-x-auto rounded-lg z-50" ref={modalRef}>
                        {/* Close Button positioned inside the modal, top-right */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-800/70 focus:outline-none z-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <h2 className="text-3xl font-bold py-4 sticky top-0 bg-white">Measurement Details</h2>
                        <div className="flex flex-col items-center justify-center gap-3 overflow-y-auto mx-4">
                            {/* Mapping and measurement details */}
                            {Object.entries(measurementDetails).map(([key, value], index) => (
                                key !== 'landmark_image_base64' && (
                                <div key={index} className='flex w-full py-4 px-6 items-center justify-between bg-fieldbg border-fieldborder border-2 rounded-md'>
                                    <div className='w-3/4 flex capitalize'>{removeUnderscores(key)}</div>
                                    <div className='flex justify-end'>
                                        {/* Content wrapping and truncating */}
                                        <div className="measurement-content w-full max-w-[300px]">
                                            <div className={`truncate-content ${expanded ? "max-h-full" : "max-h-24"} overflow-hidden break-words`}>
                                                {value}
                                            </div>
                                            {value.length > 100 && (
                                                <button
                                                    className="text-blue-500 mt-2"
                                                    onClick={() => setExpanded(!expanded)}
                                                >
                                                    {expanded ? 'See Less' : 'See More'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                )
                            ))}
                        </div>
                        {/* Close button below the details */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="relative mx-20 inline-flex mt-6 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white hover:bg-blue-700 bg-black rounded-lg mb-4"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                            <span className="relative">Close</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Image Modal for enlarged photo */}
            {isImageModalOpen && selectedImage && (
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.7)] z-50">
                    <div className="relative bg-white w-[80vw] h-[80vh]">
                        <button
                            onClick={() => setIsImageModalOpen(false)}
                            className="absolute top-2 right-2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-800/70 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage ? `data:image/jpeg;base64,${selectedImage}` : profileImage}
                            alt="Enlarged"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Main Table */}
            <div className='flex w-11/12 p-4 rounded-2xl items-start justify-start'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-white text-black rounded overflow-hidden border-b shadow-xl'>
                            <th className='py-4 px-6 rounded-tl-lg rounded-bl-lg'>Sr no.</th>
                            <th className='py-4 px-6'>Date</th>
                            <th className='py-4 px-6'>Details</th>
                            <th className='py-4 px-6 rounded-tr-lg rounded-br-lg'>Mapping</th>
                        </tr>
                    </thead>
                    <tbody>
                        {measurementHistoryData?.length > 0 ? (
                            measurementHistoryData.map((data, index) => (
                                <tr key={data.id} className='bg-white border-b border-gray-200 pt-20'>
                                    <td className='py-4 px-6'>{index + 1}</td>
                                    <td className='py-4 px-6'>{data?.date || "No Date"}</td>
                                    <td className='py-4 px-6 hover:underline cursor-pointer' onClick={() => toggleModal(data)}>
                                        View Details
                                    </td>
                                    <td>
                                        <button
                                            className="relative w-12 h-12 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            onClick={() => toggleImageModal(data?.landmark_image_base64)} // Open image modal
                                        >
                                            <img
                                                src={data?.landmark_image_base64 ? `data:image/jpeg;base64,${data.landmark_image_base64}` : profileImage}
                                                alt="Mapping"
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No measurements available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Measurements;
