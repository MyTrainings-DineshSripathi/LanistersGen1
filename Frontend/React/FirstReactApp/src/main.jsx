import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes } from 'react-router'
import Products from './UIBlocks/ProductsPage/Products.jsx'
import Header from './UIBlocks/HeaderComponent/Header.jsx'
import NotFoundPage from './UIBlocks/NotFoundComponent/NotFoundPage.jsx'
import Options from './UIBlocks/Login/Options.jsx'
import Login from './UIBlocks/Login/Login.jsx'
import Register from './UIBlocks/Login/Register.jsx'
import Product from './UIBlocks/ProductsPage/Product.jsx'
import Context from './UIBlocks/ContextAPI/Context.jsx'
import { Provider } from 'react-redux'
import dataStore from './UIBlocks/ReduxToolKIt/Store.jsx'


/* 
  document.getElementById('root') -- we are selecting a element with an id root
  createRoot -- with this function we are declaring that the selected element as the root to render all the content

  UI -- https://themewagon.github.io/cozastore/
  API -- https://dummyjson.com/products
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={dataStore}>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path='' element={<App />}></Route>
            <Route path='/product' element={<Products />}></Route>
            <Route path='/user' element={<Options />}>
              <Route path='login' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
            </Route>
            <Route path='/product/:productId' element={<Product/>}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
          </Routes>
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
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
