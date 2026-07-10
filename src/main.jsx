import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'

AOS.init({
  duration: 800,
  once: true,
  offset: 50,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
