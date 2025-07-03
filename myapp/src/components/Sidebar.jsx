import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
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

export default Sidebar
