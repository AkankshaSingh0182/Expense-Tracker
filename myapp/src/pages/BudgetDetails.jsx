import React from 'react';
import './BudgetDetails.css';
import axios from 'axios';

const BudgetDetails = () => {
  const budget = {
    monthlyIncome: 50000,
    startDate: '06/18/2023',
    endDate: '07/18/2023',
    categories: [
      { category: 'Bills', allocated: 15000, spent: 5700 },
      { category: 'Education', allocated: 20000, spent: 15000 },
      { category: 'Food', allocated: 5000, spent: 1500 },
      { category: 'Gym', allocated: 5000, spent: 700 },
      { category: 'Transportation', allocated: 5000, spent: 1100 }
    ]
  };

  return (
    <div className="budget-details-container">
      <h2>Budget Details</h2>
      <div className="summary">
        <p><strong>Monthly Income:</strong> {budget.monthlyIncome.toFixed(2)}</p>
        <p><strong>Start Date:</strong> {budget.startDate}</p>
        <p><strong>End Date:</strong> {budget.endDate}</p>
      </div>

      <h3>Budget Categories</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Allocated Amount</th>
            <th>Spent Amount</th>
            <th>Remaining Amount</th>
          </tr>
        </thead>
        <tbody>
          {budget.categories.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.allocated.toFixed(4)}</td>
              <td>{item.spent.toFixed(2)}</td>
              <td>{(item.allocated - item.spent).toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetDetails;