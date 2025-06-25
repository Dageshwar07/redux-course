import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App2,App1} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1 />
    <App2 />
  </StrictMode>,
)
