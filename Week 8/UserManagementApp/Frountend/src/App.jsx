import { useState } from 'react'
import { createBrowserRouter,Navigate,RouterProvider} from 'react-router'
import RootLayout from './Components/RootLayout'
import AddUser from './Components/AddUser'
import Home from './Components/Home'
import UserList from './Components/UserList'
import User from './Components/User'
function App() {
  const routingObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'adduser',
          element:<AddUser/>
        },
        {
          path:"user",
          element:<User/>
        },
        {
          path:"userlist",
          element:<UserList/>
        }
      ]
    }
  ])
  return <RouterProvider router={routingObj}/>
}

export default App
