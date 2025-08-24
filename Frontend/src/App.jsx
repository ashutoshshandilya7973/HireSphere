import React from 'react'
import './App.css'
import NavBar from './components/Landing/NavBar'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from './pages/Hr'
import RoleSelection from './pages/RoleBased';
function App() {

  // const router=createBrowserRouter([
  //   {
  //     element:<LandingPage/>,
  //     path:"/"
  //   },
  //   {
  //    element:<Index/>,
  //    path:"/admin-dashboard"
  //   },{
  //     element:<RoleSelection/>,
  //     path:'/choose-role'
  //   }
   
  // ])

  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Index/>
    </>
  )
}

export default App
