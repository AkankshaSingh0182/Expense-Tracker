import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './BudgetAllocation.css';

const BudgetChart = () => {
  const data = [
    { category: 'Bills', allocation: 15000, spending: 7000 },
    { category: 'Education', allocation: 20000, spending: 19000 },
    { category: 'Food', allocation: 5000, spending: 1500 },
    { category: 'Gym', allocation: 5000, spending: 700 },
    { category: 'Transportation', allocation: 5000, spending: 1100 }
  ];

  return (
    <div className="chart-container">
      <h2>Budget Allocation vs Spending</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="category" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" hide />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="allocation" fill="#76d7ea" name="Allocation" />
          <Bar yAxisId="left" dataKey="spending" fill="#f7a5b8" name="Spending" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetChart;