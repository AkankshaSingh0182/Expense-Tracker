import React, { useState } from "react";
import "./Expenses.css";
import { useEffect } from "react";
import axios from "axios";

const ExpenseTracker = () => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '')
  const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    const getExpense=async()=>{
      const res = await axios.get(`http://localhost:3000/getExpenses/${userId}`)
      console.log(res.data);
      setExpenses(res.data.expenses);
    }
    getExpense()
  },[])
  const deleteExpense = (userId, index) => {
    axios.delete(`http://localhost:3000/deleteExpense/${userId}`)
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
          {expenses?.map((item, index) => (
            <tr key={index}>
              <td>{item?.date}</td>
              <td>{item?.category}</td>
              <td>{item?.amount}</td>
              <td>{item?.description}</td>
              <td>
                <button className="delete" onClick={() => deleteExpense(item._id, index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
};

export default ExpenseTracker;