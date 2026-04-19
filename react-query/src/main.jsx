import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const QUERY_ID = {
  superheroes: "super-heroes",
  friends: "friends",
  youtube: "yt",
  channel: "channel",
  colors: "colors",
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default QUERY_ID