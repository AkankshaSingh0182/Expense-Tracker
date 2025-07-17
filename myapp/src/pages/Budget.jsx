import React, { useState } from 'react';
import './Budget.css';

const BudgetTable = () => {
  const [budgets, setBudgets] = useState([
    {
      name: 'mybudget',
      income: 50000,
      startDate: '06/18/2023',
      endDate: '07/18/2023'
    },
    {
      name: 'secondbudget',
      income: 60000,
      startDate: '06/18/2023',
      endDate: '07/18/2023'
    },
    {
      name: 'thirdbudget',
      income: 70000,
      startDate: '06/20/2023',
      endDate: '07/20/2023'
    }
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleDelete = (index) => {
    const updatedBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(updatedBudgets);
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="budget-container">
      <h2>Your Budgets</h2>
      <table>
        <thead>
          <tr>
            <th>Budget Name</th>
            <th>Monthly Income</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Select</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget, index) => (
            <tr key={index}>
              <td>{budget.name}</td>
              <td>{budget.income.toFixed(2)}</td>
              <td>{budget.startDate}</td>
              <td>{budget.endDate}</td>
              <td>
                <input
                  type="radio"
                  name="selectedBudget"
                  checked={selectedIndex === index}
                  onChange={() => handleSelect(index)}
                />
              </td>
              <td><button className="details-btn">Details</button></td>
              <td><button className="edit-btn">Edit</button></td>
              <td><button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button className="select-btn">Select Budget</button>
      </div>
    </div>
  );
};

export default BudgetTable;