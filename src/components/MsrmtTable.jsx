import React, { useState } from 'react';

function MsrmtTable() {
    const [measurementHistoryData, setMeasurementHistoryData] = useState([
        { id: 1, date: '2025-01-01', details: 'You have Pitta imbalance, which can lead to redness, inflammation, and pigmentation issues, can be managed by using cooling, soothing herbs like aloe vera and sandalwood, reducing spicy and oily foods, minimizing excess heat, and adopting a cooling lifestyle and practices.', landmark_image_base64: null },
        { id: 2, date: '2025-01-02', details: 'You have Vata imbalance, which often leads to dry, flaky, or rough skin, can be addressed by applying warm oil massages, preferably with sesame or coconut oil, drinking warm herbal teas, and consuming moist, grounding foods like soups and stews to restore moisture and warmth.', landmark_image_base64: null },
        { id: 3, date: '2025-01-03', details: 'You have Kapha imbalance, which may cause sluggish circulation and fluid retention, leading to puffiness and dark circles, can be managed by increasing movement and physical activity, reducing dairy and salty foods, and trying herbal remedies such as Triphala to promote circulation.', landmark_image_base64: null },
        // Add more sample data here...
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [measurementDetails, setMeasurementDetails] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const toggleModal = (details) => {
        setMeasurementDetails(details);
        setIsModalOpen(true);
    };

    const removeUnderscores = (inputString) => inputString.replace(/_/g, ' ');

    return (
        <div className='w-full relative h-full mb-10 flex flex-col font-montserrat items-center justify-center mt-20'>
            <div className='w-full flex items-center'>
                <button className='p-5 absolute top-5 left-5' onClick={() => console.log("Go back")}>Back</button>
                <h1 className="text-2xl font-bold ml-4">Measurements Table</h1>
            </div>

            {/* Modal for showing details */}
            {isModalOpen && measurementDetails && (
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50 bg-[rgba(129,129,129,0.5)]">
                    <div className="relative bg-white w-3/5 h-[90vh] overflow-y-auto rounded-lg z-50 p-5">
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
                            {Object.entries(measurementDetails).map(([key, value], index) => (
                                key !== 'landmark_image_base64' && (
                                    <div key={index} className='flex w-full py-4 px-6 items-center justify-between bg-fieldbg border-fieldborder border-2 rounded-md'>
                                        <div className='w-3/4 flex capitalize'>{removeUnderscores(key)}</div>
                                        <div className='flex justify-end'>
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
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="relative mx-20 inline-flex mt-6 items-center justify-center px-10 py-2 font-medium tracking-tighter text-white hover:bg-blue-700 bg-black rounded-lg mb-4"
                        >
                            <span className="relative">Close</span>
                        </button>
                    </div>
                    <button
                        onClick={() => window.location.href = '/another-page'} // Navigate to another page
                        className="absolute bottom-10 right-10 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 10l7-7 7 7-1.414 1.414L13 5.828V16h-2V5.828L6.414 11.414 5 10z" />
                        </svg>
                    </button>
                </div>
            )}

            <div className='flex w-11/12 p-4 rounded-2xl items-start justify-start' style={{ height: '100vh', overflowY: 'auto' }}>
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
                        {measurementHistoryData.length > 0 ? (
                            measurementHistoryData.map((data, index) => (
                                <tr key={data.id} className='bg-white border-b border-gray-200'>
                                    <td className='py-4 px-6'>{index + 1}</td>
                                    <td className='py-4 px-6'>{data?.date || "No Date"}</td>
                                    <td className='py-4 px-6 hover:underline cursor-pointer' onClick={() => toggleModal(data)}>
                                        View Details
                                    </td>
                                    <td>
                                        <button
                                            className="relative w-12 h-12 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            onClick={() => console.log("Image Modal")}
                                        >
                                            <img
                                                src={data?.landmark_image_base64 || "https://via.placeholder.com/150"}
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

export default MsrmtTable;
