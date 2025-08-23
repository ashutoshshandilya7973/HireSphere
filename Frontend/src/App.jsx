import React from 'react'
import './App.css'
import SignupPages from './pages/SignupPages'
import NavBar from './components/Landing/NavBar'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
    <div className='text-2xl '>
      
      {/* <LandingPage/> */}
      <SignupPages/>
    </div>
    </>
  )
}

export default App
