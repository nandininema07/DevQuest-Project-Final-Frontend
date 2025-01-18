import { React, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../images/profile-removebg-preview 1.png";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function Dashboard() {
  // State to manage modal visibility
  const [modalContent, setModalContent] = useState(null);

  // Function to open the modal with the content
  const openModal = (content) => {
    setModalContent(content);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalContent(null);
  };

  // Bar Chart Data
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Login Frequency",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data (2 factors)
  const pieChartData = {
    labels: ["Nail Analysis", "Facial Analysis"],
    datasets: [
      {
        data: [300, 500], // Updated to 2 values
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  // Line Chart Data
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Login Frequency",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="mt-20">
      <section className="dashboard-container grid grid-cols-12 gap-4 p-5">
        {/* Sidebar Section */}
        <div className="sidebar col-span-3 bg-gray-800 text-white p-5">
          <div className="sidebar-header flex items-center mb-10">
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full w-12 h-12 mr-3"
            />
            <span className="text-xl font-bold">Dashboard</span>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link to="/profile" className="text-white hover:text-gray-400">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-white hover:text-gray-400">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="text-white hover:text-gray-400">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="main-content col-span-9 bg-white p-5 rounded-lg shadow-lg">
          <div className="content-header flex justify-between items-center mb-6">
            <p className="text-3xl font-bold text-center">
              Three Important Body Compositions According to Ayurveda
            </p>
          </div>

          {/* Charts Section */}
          <div className="charts-section grid grid-cols-3 gap-5 mb-10">
            {/* Line Chart Card (spans 2 columns) */}
            <div className="chart-card bg-white rounded-lg shadow-md p-5 col-span-2">
              <p className="text-2xl font-bold text-center">Line Chart</p>
              <Line data={lineChartData} options={{ responsive: true }} />
            </div>

            {/* Pie Chart Card (2 factors only) */}
            <div className="chart-card bg-white rounded-lg shadow-md p-5">
              <p className="text-2xl font-bold text-center">Pie Chart</p>
              <Pie data={pieChartData} options={{ responsive: true }} />
            </div>
          </div>

          {/* Body Compositions Section */}
          <div className="body-compositions grid grid-cols-3 gap-5">
            {/* Vata Section */}
            <div className="body-composition-card bg-white rounded-lg shadow-md p-5">
              <p className="text-2xl font-bold text-center">
                Vata (Air and Ether)
              </p>
              <p className="text-sm text-gray-600 mt-3">
                Vata, made of air and ether, governs movement in the body and
                mind...
              </p>
              <button
                onClick={() =>
                  openModal(
                    "Vata, made of air and ether, governs movement in the body and mind. It controls functions like circulation, respiration, nerve impulses, and digestion. People with a dominant Vata dosha are typically energetic, creative, and quick-thinking, with a slender build and dry skin. When imbalanced, Vata can cause dryness, digestive issues, fatigue, and anxiety. Imbalances are often due to irregular routines or stress. To balance Vata, Ayurveda recommends warm, moist foods, a regular routine, and calming practices like meditation or gentle yoga."
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white px-4 py-2 rounded-md"
              >
                Read More
              </button>
            </div>

            {/* Pitta Section */}
            <div className="body-composition-card bg-white rounded-lg shadow-md p-5">
              <p className="text-2xl font-bold text-center">
                Pitta (Fire and Water)
              </p>
              <p className="text-sm text-gray-600 mt-3">
                Pitta, composed of fire and water, governs digestion,
                metabolism...
              </p>
              <button
                onClick={() =>
                  openModal(
                    "Pitta, composed of fire and water, governs digestion, metabolism, and transformation in the body. It controls body temperature and intellectual functions like focus and clarity. Pitta types have a medium build, strong digestion, and a warm body temperature. They are ambitious and sharp but may become irritable or critical when imbalanced. Imbalances can cause digestive issues, skin problems, and anger. To balance Pitta, Ayurveda suggests cooling foods, stress management, and relaxation practices like spending time in nature."
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white px-4 py-2 rounded-md"
              >
                Read More
              </button>
            </div>

            {/* Kapha Section */}
            <div className="body-composition-card bg-white rounded-lg shadow-md p-5">
              <p className="text-2xl font-bold text-center">
                Kapha (Earth and Water)
              </p>
              <p className="text-sm text-gray-600 mt-3">
                Kapha, made of earth and water, provides structure, stability...
              </p>
              <button
                onClick={() =>
                  openModal(
                    "Kapha, made of earth and water, provides structure, stability, and lubrication to the body. It governs tissue formation, fluid balance, and immunity. Kapha types are calm, patient, and have a sturdy build, but they may become lethargic or gain weight when imbalanced. Imbalances can cause weight gain, congestion, and emotional stagnation. To balance Kapha, Ayurveda recommends light, stimulating foods, regular exercise, and mental stimulation through creative or energizing activities."
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white px-4 py-2 rounded-md"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Modal for full description */}
        {modalContent && (
          <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Full Description</h2>
              <p className="text-sm text-gray-600">{modalContent}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
