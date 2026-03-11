import './App.css'

import Slide1 from './assets/slide-01.jpg'

function App() {
  return (
    <>
      <header>
        <div className='logo'>
          Cozy Store
        </div>
        <nav>
          <a className='nav-link' href="">Home</a>
          <a className='nav-link' href="">Shop</a>
          <a className='nav-link' href="">Featured Products</a>
          <a className='nav-link' href="">Blog</a>
          <a className='nav-link' href="">About</a>
          <a className='nav-link' href="">Contact</a>
        </nav>
        <div className='options'>
          <button className='nav-link'>search</button>
          <button className='nav-link'>cart</button>
          <button className='nav-link'>wishlist</button>
        </div>
      </header>
      <main>
        <section className="hero-sliding-section">
          <div className='info-container'>
            <div className="intro-title">
              Womens Collection 2026
            </div>
            <div className="title">
              NEW COLLECTION
            </div>
            <div className="cta">
              <a href="">Shop Now</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
