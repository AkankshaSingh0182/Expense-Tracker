import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/dashboard/expenses", label: "🔷 Expenses" },
    { to: "/dashboard/budget", label: "🔶 Budget" },
    { to: "/dashboard/budgetdetails", label: "🔷 Budget Details" },
    { to: "/dashboard/budgetallocation", label: "🔶 Budget Allocation" },
    { to: "/dashboard/newexpense", label: "🔶 Add New Expense" },
    { to: "/dashboard/category", label: "🔷 Category" },
    { to: "/dashboard/budget-summary", label: "🔶 Budget Summary" },
    { to: "/dashboard/CustomBudget", label: " 🔷 Custom Budget" },
    { to: "/dashboard/recent-expense", label: "🔶 Recent Expense" },
  ];

  return (
    <div style={{
      width: "240px",
      height: "100vh",
      backgroundColor: "purple",
      color: "#ffffff",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <h2 style={{ fontSize: "20px", marginBottom: "30px" }}>📊 Dashboard</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {links.map(({ to, label }) => (
            <li key={to} style={{ marginBottom: "12px" }}>
              <NavLink
                to={to}
                style={({ isActive }) => ({
                  display: "block",
                  padding: "5px 15px",
                  borderRadius: "8px",
                  backgroundColor: isActive ? "#374151" : "transparent",
                  color: isActive ? "#ffffff" : "#d1d5db",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "0.2s ease-in-out"
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
