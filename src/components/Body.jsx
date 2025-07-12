import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
const Body = () => {
    const approuter= createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ])
  return (
    <RouterProvider router={approuter}>
        <div>Body</div>
    </RouterProvider>
  )
}

export default Body