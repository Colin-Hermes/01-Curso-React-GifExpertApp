import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import GifExpertApp from './components/GifExpertApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp/>
  </StrictMode>,
)
