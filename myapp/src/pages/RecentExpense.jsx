import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
} from 'recharts';
import './RecentExpense.css';

const data = [
  { name: 'Bills', value: 5700, color: '#00CFFF' },
  { name: 'Education', value: 15000, color: '#C21F3C' },
  { name: 'Food', value: 500, color: '#3CB043' },
  { name: 'Gym', value: 300, color: '#D80032' },
  { name: 'Entertainment', value: 200, color: '#20DFDE' },
  { name: 'Transportation', value: 400, color: '#A0522D' },
];

const recentExpenses = [
  { date: '2023-07-14', category: 'Bills', amount: 5000 },
  { date: '2023-07-13', category: 'Bills', amount: 700 },
  { date: '2023-07-13', category: 'Food', amount: 500 },
  { date: '2023-07-13', category: 'Education', amount: 5000 },
  { date: '2023-07-13', category: 'Education', amount: 10000 },
];

const ExpenseDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="chart-section">
        <h3>Expense Breakdown</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <p className="top-expense-date">
          Top Expense Day in the last 7 days: <b>2023-07-13</b>
        </p>
      </div>

      <div className="table-section">
        <h3>Recent Expenses</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentExpenses.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.category}</td>
                <td>£{item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseDashboard;