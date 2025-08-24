import { useUser } from '@clerk/clerk-react'
import React from 'react'
import NavBar from '../../components/Landing/NavBar'
import Hero from '../../components/Hr/Hero'

const Index = () => {
    const {user}=useUser()
    
  return (
    <div className='w-full min-h-screen bg-linear-to-r from-gray-900 to-black text-white overflow-hidden'>
          <NavBar/>
          <Hero/>
    </div>
  )
}

export default Index
