import { useEffect, useState } from 'react'
import './App.css'

import Slide1 from './assets/slide-01.jpg'
import CategoryViewer from './UIBlocks/CategoryViewer/CategoryViewer'
import DummyComponent from './UIBlocks/DummyComponent/DummyComponent'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])

  const FETCH_PRODUCTS = async () => {
    const response  = await axios.get('https://dummyjson.com/products?limit=12')
    console.log(response)
    setProducts(response.data.products)
  }

  // https://dummyjson.com/products?skip=30&limit=12
  const FETCH_REST_OF_PRODUCTS = async () => {
    //complete
  }

  useEffect(() => {
    FETCH_PRODUCTS()
  }, [])

  // useEffect(() => {
  //   console.log(`products : ${products}`)
  // }, [products])
  
  return (
    <>
      {/* <DummyComponent></DummyComponent> */}
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
        <section className='products-section'>
          <div className="title-container">
            <h2>Products</h2>
            <p>Explore our collection</p>
          </div>
          <div className="products-container">
            {(products.length > 0)? products.map((product) => (
              <div key={product.id} className="container">
                <div className="image-container">
                  <img src={product.thumbnail} alt={product.title}/>

                  <div className="category">
                    {product.category}
                  </div>
                </div>
                <div className="info-container">
                  <h3>{product.title}</h3>
                  <div className="price-container">
                    &#8377; {Math.round(Number(product.price) * 90)} <span className="discount">{product.discountPercentage}% off</span>
                  </div>
                  <div className='cta-container'>
                    <button>Shop now</button>
                  </div>
                </div>
              </div>
            )) : <p>Loading....</p>}
          </div>
          <button className="load-more">Load more</button>
        </section>
      </main>
      <footer>
        <div className="menu-container">
          <div className="title">Categories</div>
          <div className="options">
            <a href="">Women</a>
            <a href="">Men</a>
            <a href="">Beauty</a>
            <a href="">Furniture</a>
            <a href="">Groceries</a>
          </div>
        </div>
        <div className="menu-container">
          <div className="title">Help</div>
          <div className="options">
            <a href="">Track Order</a>
            <a href="">Returns</a>
            <a href="">Shipping</a>
            <a href="">FAQs</a>
          </div>
        </div>
        <div className="menu-container">
          <div className="title">Get in touch</div>
          <div className="options">
            <div className="address">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </div>
            <div className="social-media">
              <a href="">facebook</a>
              <a href="">instagram</a>
              <a href="">twitter</a>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <div className="title">NEWSLETTER</div>
          <form className="option">
            <input type="email" name="email" id="email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="copy-right">
          Copyright ©2026 All rights reserved 
        </div>
      </footer>
    </>
  )
}

export default App
