import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//nhớ import App vào 
import App from './App.jsx'

import Bai2 from './Bai2_JSX.jsx'
import Bai3 from './Bai3.jsx'
import Bai4 from './Bai4_JSX.jsx'
import Bai5 from './Bai5_JSX.jsx'
import Bai1 from './Bai1_JSX.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Bai1/> */}
    {/* <Bai2/> */}
    {/* <Bai3/> */}
    {/* <Bai4/> */}
    <Bai5/>
  
  </StrictMode>,
)
