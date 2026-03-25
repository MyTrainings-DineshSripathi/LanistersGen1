import React from 'react'
import './Login.css'
import { NavLink } from 'react-router'

function Login() {
  return (
    <div className="login-container">
        <form className="login-form">
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
            <p className="signup-link">Don't have an account? <NavLink href="/signup">Sign up</NavLink></p>
        </form>
    </div>
  )
}

export default Login