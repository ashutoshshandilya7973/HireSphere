import React from 'react'
import './App.css'
import NavBar from './components/Landing/NavBar'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from './pages/Hr'
import RoleSelection from './pages/RoleBased';
import CreateJobPost from './pages/Hr/CreateJobPost';
function App() {

  const router = createBrowserRouter([
    {
      element: <LandingPage />,
      path: "/"
    },
    {
      element: <Index />,
      path: "/admin-dashboard",

    }, {
      path: "/admin-dashboard/create-job",  // absolute path, independent page
      element: <CreateJobPost />
    }, {
      element: <RoleSelection />,
      path: '/choose-role'
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
      {/* <Index/> */}
    </>
  )
}

export default App
