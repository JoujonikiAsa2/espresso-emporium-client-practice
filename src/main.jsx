import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Layout/Root.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/home.jsx'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import Users from './components/Users/Users.jsx'
import NewUser from './components/NewUser/NewUser.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import AuthProvider from './components/Provider/AuthProvider.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://espresso-emporium-server-practice-ckrso2ovw.vercel.app/coffee"),
      },
      {
        path: '/addCoffee',
        element: <PrivateRoute>
          <AddCoffee></AddCoffee>
        </PrivateRoute>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://espresso-emporium-server-practice-ckrso2ovw.vercel.app/coffee/${params.id}`)
      },
      {
        path: 'readCoffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`https://espresso-emporium-server-practice-ckrso2ovw.vercel.app/coffee/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
