import React, { useState } from 'react';
import './Login.css'; // Import external CSS
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('')
  const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Login', {email,password});
      console.log('Response:', response.data);
      if( response.data.success){
        setemail('');
        setPassword('')
        navigate('/dashboard');
        localStorage.setItem('userId', response.data.user._id)
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // alert(`email: ${email}, Password: ${password}`);
    // In real apps, validate credentials here
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setemail(e.target.value)} 
            required 
          />

          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </div>
  );
};

export default Login;