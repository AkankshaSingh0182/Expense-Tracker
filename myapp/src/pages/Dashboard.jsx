import React from 'react'
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
  
    <div className="dashboard">
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/budgetdetails">Budget details</Link></li>
          <li><Link to="/budget-allocation">Budget Allocation</Link></li>
          <li><Link to="/delete-expenses">Delete Expenses</Link></li>
          <li><Link to="/newexpense">Add New Expense</Link></li>
          <li><Link to="/category">category</Link></li>
          <li><Link to="/budget-summary">Budget Summary</Link></li>
          <li><Link to="/CustomBudget">Create Custom Budget</Link></li>
          <li><Link to="/recent-expense">Recent Expense</Link></li>
          
    </div>
  )
}

export default Dashboard
