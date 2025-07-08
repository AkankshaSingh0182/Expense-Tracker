import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src="https://png.pngtree.com/png-vector/20220712/ourmid/pngtree-mobile-expense-management-abstract-concept-vector-illustration-png-image_5912719.png" height="40px" width="40px" alt="" />
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to='/logout'>Log out</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;