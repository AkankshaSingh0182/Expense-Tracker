import React, { useState } from 'react';
import './NewExpense.css';
import axios from 'axios';

function AddExpenseForm() {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [expense, setExpense] = useState({
    date: '',
    category: '',
    amount: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
      const response = await axios.post(`http://localhost:3000/NewExpense/${userId}`, {expense});
      console.log('Response:', response.data);
      if( response.data.success){
       setExpense('')
       
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };
  return (
    <div className="form-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input type="date" name="date" value={expense.date} onChange={handleChange} />

        <label>Category</label>
        <input type="text" name="category" value={expense.category} onChange={handleChange} />

        <label>Amount</label>
        <input type="number" name="amount" value={expense.amount} onChange={handleChange} />

        <label>Description</label>
        <input type="text" name="description" value={expense.description} onChange={handleChange} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddExpenseForm;