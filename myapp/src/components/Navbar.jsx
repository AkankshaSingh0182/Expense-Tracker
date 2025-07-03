import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>Expense Tracker</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;