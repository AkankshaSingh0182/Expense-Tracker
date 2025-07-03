import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const NAVBAR_HEIGHT = 60; // Adjust if your navbar is taller

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar - fixed and below navbar */}
      <div
        style={{
          width: "240px",
          position: "fixed",
          top: `${NAVBAR_HEIGHT}px`,
          left: 0,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          zIndex: 1,
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content - margin-left to avoid sidebar, margin-top to avoid navbar */}
      <div
        style={{
          marginLeft: "240px",
          marginTop: `${NAVBAR_HEIGHT}px`,
          padding: "20px",
          flex: 1,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
