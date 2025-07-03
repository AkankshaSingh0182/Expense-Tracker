import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import './BudgetSummary.css';

const BudgetSummary = () => {
  const data = [
    { name: "Total Expenses", amount: 27400 },
    { name: "Total Allocated Amount", amount: 50000 },
    { name: "Savings", amount: 22600 },
    { name: "Overspending", amount: -22600 },
  ];

  return (
    <div className="summary-container">
      <h1>Budget Summary</h1>
      <h2>Budget Name: <span className="budget-name">mybudget</span></h2>

      <div className="budget-details">
        <p><strong>Total Expenses:</strong> 27400.00</p>
        <p><strong>Total Allocated Amount:</strong> 50000.0000</p>
        <p><strong>Savings:</strong> 22600.00</p>
        <p><strong>Overspending:</strong> -22600.00</p>
      </div>

      <div className="chart">
        <h3>Expense Breakdown</h3>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default BudgetSummary;