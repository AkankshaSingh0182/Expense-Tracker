import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
        <nav>
          {/* <Link to="/">Home</Link> */}
          <Link to="/register">Ragister</Link>
          <Link to="/login">Login</Link>
          <Link to="/Expense">Expense</Link>
          <Link to="/Budget">Budget</Link>
          <Link to="/BudgetDetails">BudgetDetails</Link>
          <Link to="/BudgetAllocation">BudgetAllocation</Link>
          <Link to="/DeleteExpenses">DeleteExpenses</Link>
          <Link to="/Category">Category</Link>
          <Link to="/NewExpense">NewExpense</Link>
          <Link to="/BudgetSummary">BudgetSummary</Link>
           <Link to="/CustomBudget">CustomBudget</Link>
            <Link to="/RecentExpense">RecentExpense</Link>
          
        </nav>
      </header>
    </div>
  )
}

export default Header