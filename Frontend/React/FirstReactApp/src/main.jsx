import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes } from 'react-router'
import Products from './UIBlocks/ProductsPage/Products.jsx'
import Header from './UIBlocks/HeaderComponent/Header.jsx'
import NotFoundPage from './UIBlocks/NotFoundComponent/NotFoundPage.jsx'


/* 
  document.getElementById('root') -- we are selecting a element with an id root
  createRoot -- with this function we are declaring that the selected element as the root to render all the content

  UI -- https://themewagon.github.io/cozastore/
  API -- https://dummyjson.com/products
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='' element={<App />}></Route>
        <Route path='/product' element={<Products />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
