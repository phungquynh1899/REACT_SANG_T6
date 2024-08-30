import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//nhớ import App vào 
import Bai3 from './Bai3'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bai3></Bai3>
  </StrictMode>,
)
