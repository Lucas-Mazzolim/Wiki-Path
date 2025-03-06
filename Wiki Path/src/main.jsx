import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
import './Styles/Document.css'
import App from './App.jsx'
import About from './Components/About/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path = '/' element = {<App/>} />
        <Route path = '/About' element = {<About/>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>

)
