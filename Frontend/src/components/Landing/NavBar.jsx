// NavBar.tsx
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import ClerkAuth from "./ClerkAuth";
const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => setHamburger((prev) => !prev);
  
  return (
    <nav className="relative max-w-6xl mt-2.5 m-auto flex justify-between items-center text-white md:bg-gray-700 px-6 py-2 rounded-4xl shadow-lg shadow-gray-600/50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer font-roboto font-bold">
        <h2>HireSphere</h2>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 font-garamond text-[20px] cursor-pointer">
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Feature</ul>
        <ul>Resource</ul>
      </div>

      {/* Auth Buttons / User Info */}
      <div className="hidden md:flex gap-2">
        <SignedOut>
          <div className="bg-green-600 rounded-md p-1 px-2 cursor-pointer"><SignInButton />
          </div>
          <div className="bg-green-600 rounded-md p-1 px-2 cursor-pointer"><SignUpButton  forceRedirectUrl="/choose-role"/>
          </div>
        </SignedOut>
        
        <SignedIn>
          <UserButton />
          <ClerkAuth/>
        </SignedIn>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative">
        <button onClick={toggleHamburger}>
          <Menu />
        </button>
        {hamburger && (
          <div className="absolute right-0 top-12 w-56 bg-gray-700 rounded-md shadow-lg animate-slideIn z-50">
            <ul className="flex flex-col p-2 gap-2 text-white font-natasans">
              <li className="border-b border-gray-400 p-2">Home</li>
              <li className="border-b border-gray-400 p-2">About</li>
              <li className="border-b border-gray-400 p-2">Feature</li>
              <li className="border-b border-gray-400 p-2">Resource</li>
              <li className="pt-2 border-t border-gray-400">
                <ClerkAuth />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
