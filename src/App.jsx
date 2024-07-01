import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/Navbar/Navbar'   

function App() {
  const [count, setCount] = useState(0)

  const navbarHome = ['Login', 'About']
  
  return (
    <>
      <Navbar items = {navbarHome} />
      <div className="heroDiv">
        <h3>LEDGER</h3> 
        <p>BY STELLAR</p>
      </div>
    </>
  )
}

export default App
