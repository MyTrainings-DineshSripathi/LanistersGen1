import { useEffect, useState } from 'react'
import './App.css'

import Slide1 from './assets/slide-01.jpg'
import CategoryViewer from './UIBlocks/CategoryViewer/CategoryViewer'
import DummyComponent from './UIBlocks/DummyComponent/DummyComponent'
import axios from 'axios'
import Header from './UIBlocks/HeaderComponent/Header'
import Products from './UIBlocks/ProductsPage/Products'

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
        <Products></Products>
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
