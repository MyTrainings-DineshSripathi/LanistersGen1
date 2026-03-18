import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header>
        <div className='logo'>
          Cozy Store
        </div>
        <nav>
          <NavLink className='nav-link' to="/">Home</NavLink>
          <NavLink className='nav-link' to="/product">Shop</NavLink>
          <NavLink className='nav-link' to="/featured-products">Featured Products</NavLink>
          <NavLink className='nav-link' to="/blog">Blog</NavLink>
          <NavLink className='nav-link' to="/about">About</NavLink>
          <NavLink className='nav-link' to="/contact-us">Contact</NavLink>
        </nav>
        <div className='options'>
          <button className='nav-link'>search</button>
          <button className='nav-link'>cart</button>
          <button className='nav-link'>wishlist</button>
        </div>
    </header>
  )
}

export default Header