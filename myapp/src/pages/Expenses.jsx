import React, { useState } from "react";
import "./Expenses.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { date: "18/06/2023", category: "Transportation", amount: "£100.00", description: "Taxi" },
    { date: "20/05/2023", category: "Bills", amount: "£700.00", description: "Electricity" },
    { date: "15/05/2023", category: "Entertainment", amount: "£700.00", description: "Movie Ticket" },
    { date: "10/03/2023", category: "Education", amount: "£500.00", description: "Fees" },
    { date: "12/04/2023", category: "Bills", amount: "£500.00", description: "Fees" },
    { date: "16/03/2023", category: "Food", amount: "£500.00", description: "Pizza" },
    { date: "07/03/2023", category: "Food", amount: "£500.00", description: "Pizza" },
    { date: "19/06/2023", category: "Shopping", amount: "£500.00", description: "Outfitters" },
  ]);

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div className="container">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>
                <button className="delete" onClick={() => deleteExpense(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn">Add New Expense</button>
    </div>
  );
};

export default ExpenseTracker;