import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* 
  document.getElementById('root') -- we are selecting a element with an id root
  createRoot -- with this function we are declaring that the selected element as the root to render all the content

  UI -- https://themewagon.github.io/cozastore/
  API -- https://dummyjson.com/products
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
