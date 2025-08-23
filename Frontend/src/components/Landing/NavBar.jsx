import React, { useState } from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Menu } from 'lucide-react'
const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const hamburgerHandler = () => {
    setHamburger((prev) => !prev)
  }
  return (
    <nav className='relative max-w-6xl mt-2.5 m-auto flex justify-between items-center  text-white md:bg-gray-700 px-6 py-2 rounded-4xl shadow-lg shadow-gray-600/50 '>
      <div className="flex items-center cursor-pointer font-roboto font-bold from-neutral-500">
        <h2>HireSphere</h2>
      </div>
      <div className="hidden  md:flex gap-4 font-garamond text-[20px] cursor-pointer">
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Feature</ul>
        <ul>Resource</ul>
      </div>
      <div className="hidden md:flex gap-2 ">
        <Button className="bg-gray-600 font-medium text-[16px] cursor-pointer ">SignIn</Button>
        <Button className="bg-green-400 cursor-pointer hover:bg-green-200 ">Sign Up</Button>
      </div>
      {/* hamburger */}
      <div className="md:hidden" onClick={hamburgerHandler}>
        <Menu />
        {
          hamburger && (
            <div className="absolute right-2 top-14 w-60 transition-all duration-500 ease-in-out animate-slideIn">
              <div className="bg-slate-500/70 rounded-sm ">
                <ul className="font-natasans cursor-pointer text-shadow">
                  <li className="border-b-[0.1px] border-gray-300 shadow-md rounded p-2 ">Home</li>
                  <li className="border-b-[0.1px] border-gray-300 shadow-md rounded p-2">About</li>
                  <li className="border-b-[0.1px] border-gray-300 shadow-md rounded p-2">Feature</li>
                  <li className="border-b-[0.1px] border-gray-300 shadow-md rounded p-2">Resource</li>
                  <li className="border-b-[0.1px] border-gray-300 shadow-md rounded p-2">Sign In</li>
                </ul>
              </div>
            </div>
          )
        }
      </div>

    </nav>
  )
}

export default NavBar
