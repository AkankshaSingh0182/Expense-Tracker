import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";

// Import all pages
import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";
import BudgetDetails from "./pages/BudgetDetails";
import BudgetAllocation from "./pages/BudgetAllocation";
import NewExpense from "./pages/NewExpense";
import Category from "./components/Category";
import CustomBudget from "./pages/CustomBudget";
import RecentExpense from "./pages/RecentExpense";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} /> {/* ✅ This is rendered at /dashboard */}
          <Route path="expenses" element={<Expenses />} />
          <Route path="budget" element={<Budget />} />
          <Route path="budgetdetails" element={<BudgetDetails />} />
          <Route path="budgetallocation" element={<BudgetAllocation />} />
          <Route path="newexpense" element={<NewExpense />} />
          <Route path="category" element={<Category />} />
          {/* <Route path="budget-summary" element={<BudgetSummary />} /> */}
          <Route path="CustomBudget" element={<CustomBudget />} />
          <Route path="recent-expense" element={<RecentExpense />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// import './App.css'
// import Home from './pages/home'
// import Footer from './components/footer'
// import Navbar from './components/Navbar'
// import Register from './pages/Ragister'
// import Login from './pages/Login'
// import Expenses from './pages/Expenses'
// import Budget from './pages/Budget'
// import BudgetDetails from './pages/BudgetDetails'
// import BudgetAllocation from './pages/BudgetAllocation'
// import DeleteExpenses from './pages/DeleteExpenses'
// import Catagory from './components/Catagory'
// import NewExpense from './pages/NewExpense'
// import BudgetSummary from './pages/BudgetSummary'
// import CustomBudget from './pages/CustomBudget'
// import RecentExpense from './pages/RecentExpense'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//      <Navbar/>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register/>} />
//           <Route path="/Login" element={<Login/>} />
//           <Route path="/Expenses" element={<Expenses/>} />
//           <Route path="/Budget" element={<Budget/>} />
//           <Route path="/BudgetDetails" element={<BudgetDetails/>} />
//           <Route path="/BudgetAllocation" element={<BudgetAllocation/>} />
//           <Route path="/DeleteExpenses" element={<DeleteExpenses/>} />
//           <Route path="/Catagory" element={<Catagory/>} />
//           <Route path="/NewExspense" element={<NewExpense/>} />
//           <Route path="/BudgetSummary" element={<BudgetSummary/>} />
//           <Route path="/CustomBudget" element={<CustomBudget/>} />
//           <Route path="/RecentExpense" element={<RecentExpense/>} />
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//     {/*

//       {/* Hero Section */}
//       {/* <section className="hero">
//         <h2>Track Your Expenses Like Never Before</h2>
//         <p>Take control of your finances with our powerful Expense Tracker application.</p>
//         <button className="cta-button">Sign Up Now</button>
//       </section> */}

//       {/* Features Section */}
//       {/* <section className="features">
//         <div className="feature">
//           <span className="icon">👛</span>
//           <h3>Manage Your Budget</h3>
//           <p>Easily create and customize budgets to stay on top of your spending.</p>
//         </div>
//         <div className="feature">
//           <span className="icon">📊</span>
//           <h3>Analyze Your Expenses</h3>
//           <p>Visualize your expenses with interactive charts and insightful reports.</p>
//         </div>
//         <div className="feature">
//           <span className="icon">📱</span>
//           <h3>Access Anywhere</h3>
//           <p>Track your expenses on the go with our mobile-friendly app.</p>
//         </div>
//       </section> */}

//     {/* </div> } */}

//     </>
//   )
// }

// export default App
