import React from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './DeleteExpenses.css';

const ExpenseAnalytics = () => {
  const categoryData = [
    { category: 'Bills', total: 7000 },
    { category: 'Education', total: 15500 },
    { category: 'Entertainment', total: 1000 },
    { category: 'Food', total: 2500 },
    { category: 'Gym', total: 700 },
    { category: 'Transportation', total: 1100 }
  ];

  const timeData = [
    { month: 'Mar 2023', total: 3000 },
    { month: 'Apr 2023', total: 1500 },
    { month: 'May 2023', total: 2500 },
    { month: 'Jun 2023', total: 0 },
    { month: 'Jul 2023', total: 24000 }
  ];

  return (
    <div className="analytics-container">
      <h2>Expense by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={categoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#ba55d3" name="Total Amount" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Expense Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={timeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#00bcd4" name="Total Amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseAnalytics;