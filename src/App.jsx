import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='f'> <Header/></div>
      <div className='f'> <Navbar/></div>
      <div className='f'> <Section/></div>
    </div>
    
  )
}

export default App
