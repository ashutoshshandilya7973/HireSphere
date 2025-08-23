import React from 'react'
import NavBar from '../components/Landing/NavBar'
import Hero from '../components/Landing/Hero'
import FeaturedJob from '../components/Landing/FeaturedJob'

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen bg-linear-to-r from-gray-900 to-black text-white overflow-hidden'>
      <NavBar/>
      <Hero/>
      <FeaturedJob/>
    </div>
  )
}

export default LandingPage
