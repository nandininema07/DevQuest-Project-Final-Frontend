import React, { useState } from "react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        💬
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/17/09/20250117094440-CTVLPEEC.json"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "400px",
            height: "500px",
            border: "none",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
          title="Botpress Webchat"
        />
      )}
    </div>
  );
};

export default FloatingChat;

