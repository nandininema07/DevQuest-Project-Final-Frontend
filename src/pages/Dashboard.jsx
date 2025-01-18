import { React, useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import icon from "../images/profile-removebg-preview 1.png";
import { Link } from "react-router-dom";
import { backendurl } from "../urls";
import toast, { Toaster } from "react-hot-toast";
import avatar from "../images/profile-removebg-preview 1.png";
import PatientContext from "../context/PatientContext";
import Pagination from "../components/Pagination";
//import { getAuthToken } from "..";
import BackButton from "../components/Backbutton";
import axios from "axios";

function Dashboard() {
  return (
    <section>
      <div className="mt-20 flex gap-3 bg-black/40">
      <div className="mx-5 px-10 py-10 ">
        <p className="text-3xl font-bold">Three Important body Compositions according to Ayurveda</p>
        <div className="rounded-xl border">
          <p className="text-3xl font-bold m-5 p-5 text-center">Vaat</p>
          <p className="p-2">Vata is composed of the elements air and ether, and it governs all movement within the body and mind. This dosha is responsible for bodily functions such as circulation, respiration, nerve impulses, muscle movements, and the elimination process. It also controls mental activities like thought, speech, creativity, and communication. People with a dominant Vata dosha tend to have a light, slender build, dry skin, and often feel cool or cold in temperature. They are typically quick in their thoughts and actions, energetic, and creative. However, when Vata becomes imbalanced, it can cause a variety of issues, both physically and mentally. Physical imbalances include dryness in the skin and hair, digestive problems like constipation or bloating, and a tendency to feel fatigued or weak. Mentally, Vata imbalances can manifest as anxiety, restlessness, nervousness, and difficulty concentrating. These imbalances are often caused by irregular routines, excessive stress, or overexertion. To restore balance, Ayurveda recommends nourishing, warm, and moist foods, maintaining a regular daily routine, getting enough rest, and engaging in grounding and calming activities such as meditation or gentle yoga.</p>
        </div>
      </div>
      <div className="mx-5 px-10 py-10">
        <p className="text-3xl font-bold">Three Important body Compositions according to Ayurveda</p>
        <div className="rounded-xl border">
          <p className="text-3xl font-bold m-5 p-5 text-center">Vaat</p>
          <p className="p-2">Vata is composed of the elements air and ether, and it governs all movement within the body and mind. This dosha is responsible for bodily functions such as circulation, respiration, nerve impulses, muscle movements, and the elimination process. It also controls mental activities like thought, speech, creativity, and communication. People with a dominant Vata dosha tend to have a light, slender build, dry skin, and often feel cool or cold in temperature. They are typically quick in their thoughts and actions, energetic, and creative. However, when Vata becomes imbalanced, it can cause a variety of issues, both physically and mentally. Physical imbalances include dryness in the skin and hair, digestive problems like constipation or bloating, and a tendency to feel fatigued or weak. Mentally, Vata imbalances can manifest as anxiety, restlessness, nervousness, and difficulty concentrating. These imbalances are often caused by irregular routines, excessive stress, or overexertion. To restore balance, Ayurveda recommends nourishing, warm, and moist foods, maintaining a regular daily routine, getting enough rest, and engaging in grounding and calming activities such as meditation or gentle yoga.</p>
        </div>
      </div>
      <div className="mx-5 px-10 py-10">
        <p className="text-3xl font-bold">Three Important body Compositions according to Ayurveda</p>
        <div className="rounded-xl border">
          <p className="text-3xl font-bold m-5 p-5 text-center">Vaat</p>
          <p className="p-2">Vata is composed of the elements air and ether, and it governs all movement within the body and mind. This dosha is responsible for bodily functions such as circulation, respiration, nerve impulses, muscle movements, and the elimination process. It also controls mental activities like thought, speech, creativity, and communication. People with a dominant Vata dosha tend to have a light, slender build, dry skin, and often feel cool or cold in temperature. They are typically quick in their thoughts and actions, energetic, and creative. However, when Vata becomes imbalanced, it can cause a variety of issues, both physically and mentally. Physical imbalances include dryness in the skin and hair, digestive problems like constipation or bloating, and a tendency to feel fatigued or weak. Mentally, Vata imbalances can manifest as anxiety, restlessness, nervousness, and difficulty concentrating. These imbalances are often caused by irregular routines, excessive stress, or overexertion. To restore balance, Ayurveda recommends nourishing, warm, and moist foods, maintaining a regular daily routine, getting enough rest, and engaging in grounding and calming activities such as meditation or gentle yoga.</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Dashboard;
