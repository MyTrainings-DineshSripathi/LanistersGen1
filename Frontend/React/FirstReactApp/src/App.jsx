import { useEffect, useState } from 'react'
import './App.css'

import Slide1 from './assets/slide-01.jpg'
import CategoryViewer from './UIBlocks/CategoryViewer/CategoryViewer'
import DummyComponent from './UIBlocks/DummyComponent/DummyComponent'
import axios from 'axios'
import Header from './UIBlocks/HeaderComponent/Header'
import Products from './UIBlocks/ProductsPage/Products'

function App() {

  // const [products, setProducts] = useState([])

  // const FETCH_PRODUCTS = async () => {
  //   const response  = await axios.get('https://dummyjson.com/products?limit=194')
  //   console.log(response)
  //   setProducts(response.data.products)
  // }

  // https://dummyjson.com/products?skip=30&limit=12
  const FETCH_REST_OF_PRODUCTS = async () => {
    //complete
  }

  useEffect(() => {
    // FETCH_PRODUCTS()
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
    </>
  )
}

export default App
