import './App.css'
import RootLayout from './Components/RootLayout'
import Home from './Components/Home'
import ProductList from './Components/ProductList'
import Product from './Components/Product'
import Contact from './Components/Contact'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router'
function App() {
  const routerObj =createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"product",
          element:<Product/>
        },
        {
          path:"productlist",
          element:<ProductList/>
        },
        {
        path:"contact",
        element:<Contact/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App
