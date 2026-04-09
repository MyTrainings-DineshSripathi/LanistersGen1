import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// https://www.figma.com/design/3ijRX2uGKOkRrcovqI0xer/Untitled?node-id=0-1&t=azv6ojLTHFy5Y4rv-1
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
