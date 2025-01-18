import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import toast, { Toaster } from 'react-hot-toast';

// Helper function to fetch token
export const getAuthToken = () => {
  // Check in localStorage first
  const localToken = localStorage.getItem("AnthropometricToken");
  if (localToken) return localToken;

  // Fallback to sessionStorage
  const sessionToken = sessionStorage.getItem("AnthropometricToken");
  if (sessionToken) return sessionToken;

  // No token found
  return null;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Toaster />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
