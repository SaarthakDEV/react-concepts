import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Intersection from './Intersection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intersection />
    {/* <App /> */}
  </StrictMode>,
)
