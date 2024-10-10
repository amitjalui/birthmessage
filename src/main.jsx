import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BirthdayMessage from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BirthdayMessage />
  </StrictMode>,
)
