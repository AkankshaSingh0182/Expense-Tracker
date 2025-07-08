import React from "react";
import "./Logout.css"; // Import your CSS

function LogoutModal({ email, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-icon">
          {/* You can replace this with an <img> or SVG */}
          <div className="logo-placeholder"></div>
        </div>
        <h2 className="modal-title">Logout</h2>
        <p className="modal-text">
        
          <br />
          Are you sure you want to log out from My Website?
        </p>
        <div className="modal-buttons">
          <button className="btn btn-secondary" onClick={onCancel}>
            No
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-primary" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;