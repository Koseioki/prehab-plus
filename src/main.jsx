import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Skema from './Skema.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
            <BrowserRouter basename={import.meta.env.DEV ? "/" : "/prehab-plus/"}>

    <App />
    </BrowserRouter>

  </StrictMode>,
)
