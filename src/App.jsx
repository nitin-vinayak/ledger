import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/Navbar'   

function App() {
  const [count, setCount] = useState(0)
  
  const navbarHome = ['Login', 'About']
  
  return (
    <>
      <Navbar items = {navbarHome} />
    </>
  )
}

export default App
