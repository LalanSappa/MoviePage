import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom'
import Login from './components/login.jsx'
import SignUp from './components/signUp.jsx'
import Navbar from './navbar.jsx'
import Home from './components/home.jsx'
import MoviePosting from './components/MoviePosting/movieposting.jsx'
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
// Create a wrapper component for components that need router hooks
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/login" replace />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "home",
          element: <Home />
        },
        {

          path: "movieposting",
          element: <MoviePosting />
        }
        
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App