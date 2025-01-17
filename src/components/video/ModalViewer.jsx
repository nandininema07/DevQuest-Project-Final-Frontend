import React from 'react';

const ModelViewer = () => {
  const measurements = {
    eye_distance_cm: 17.86796760346516,
    shoulder_width_cm: 72.81498751367832,
    leg_span_cm: 36.3358739016754,
    body_height_cm: 173.74431910903454
  };

  const formatMeasurement = (value) => {
    return parseFloat(value).toFixed(2);
  };

  const measurementLabels = {
    eye_distance_cm: "Eye Distance",
    shoulder_width_cm: "Shoulder Width",
    leg_span_cm: "Leg Span",
    body_height_cm: "Body Height"
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Model Image */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <div className="relative w-full h-[500px]">
              <img
                src="/api/placeholder/400/500"
                alt="Body Model"
                className="w-full h-full object-contain"
              />
              
              {/* Measurement Indicators */}
              <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-yellow-500 rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Right Section - Measurements */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Body Measurements</h2>
            <div className="space-y-6">
              {Object.entries(measurements).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">
                        {measurementLabels[key]}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Reference measurement
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-semibold text-gray-900">
                        {formatMeasurement(value)}
                      </span>
                      <span className="ml-1 text-gray-600">cm</span>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{
                        width: `${(value / 200) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;