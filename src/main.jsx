import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Layout/Root.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/home.jsx'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import Users from './components/Users/Users.jsx'
import NewUser from './components/NewUser/NewUser.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<Root></Root>,
  children:[
    {
      path: '/',
      element: <Home></Home>,
      loader: ()=>fetch("/favorite.json"),
    },
    {
      path: '/addCoffee',
      element: <AddCoffee></AddCoffee>
    },
    {
      path: '/users',
      element: <Users></Users>
    },
    {
      path: '/addUser',
      element: <NewUser></NewUser>
    },

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)