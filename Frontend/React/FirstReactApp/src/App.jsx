import './App.css'

import Slide1 from './assets/slide-01.jpg'
import CategoryViewer from './UIBlocks/CategoryViewer/CategoryViewer'
import DummyComponent from './UIBlocks/DummyComponent/DummyComponent'

function App() {
  
  return (
    <>
      <DummyComponent></DummyComponent>
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
        <section className="categories-container">
          <CategoryViewer 
            title = "Women"
            subTitle = "Spring 2026"
            image = "https://themewagon.github.io/cozastore/images/banner-01.jpg"
          />
          <CategoryViewer 
            title = "Men"
            subTitle = "Spring 2026"
            image = "https://themewagon.github.io/cozastore/images/banner-02.jpg"
          />
          <CategoryViewer 
            title = "Accessories"
            subTitle = "New Trend"
            image = "https://themewagon.github.io/cozastore/images/banner-03.jpg"
          />
        </section>
      </main>
    </>
  )
}

export default App
