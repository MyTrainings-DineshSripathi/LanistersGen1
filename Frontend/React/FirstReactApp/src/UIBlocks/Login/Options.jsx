import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; // Note: usually react-router-dom
import './Options.css';

function Options() {
  return (
    <main className="auth-wrapper">
        <div className="options-container">
            <div className="options-tabs">
                <NavLink 
                    to="login" 
                    className={({ isActive }) => (isActive ? 'tab-item active' : 'tab-item')}
                >
                    Login
                </NavLink>
                <span className="divider">|</span>
                <NavLink 
                    to="register" 
                    className={({ isActive }) => (isActive ? 'tab-item active' : 'tab-item')}
                >
                    Register
                </NavLink>
            </div>
            
            <div className="auth-content">
                <Outlet />
            </div>
        </div>
    </main>
  );
}

export default Options;