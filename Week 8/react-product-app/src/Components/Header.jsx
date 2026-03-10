import React from 'react'
import { useState } from 'react'
import { NavLink ,useNavigate} from 'react-router'
import Product from './Product'
function Header() {
     const [category, setCategory] = useState("")
     const navigate = useNavigate()

     const productFilter = () => {
     navigate('/productlist', { state: { category } })
  }
  return (
    <div className='flex justify-between bg-gray-500 pl-5'>
      <img
        width="80px"   
        src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXjKCEQw9pb4LaNJzpBhDZzZi1KI5LIcMGA&s"
        alt="logo"
      ></img>
     <nav className='flex justify-between gap-20'>
          <ul className='flex gap-10 pt-5 pr-10'>
               <li>
                     <input onInput={(e) => setCategory(e.target.value)} onKeyDown={productFilter} type='text' name='category' placeholder='category'className='bg-white pr-50 ' ></input>
               </li>
               <li>
               <NavLink to="/" className={({isActive})=>(isActive?"text-blue-100 bg-blue-500 p-1":"")}>Home</NavLink>
               </li>
               <li>
               <NavLink to="productList" className={({isActive})=>(isActive?"text-blue-100 bg-blue-500 p-1":"")}>ProductList</NavLink>
               </li>
               <li>
               <NavLink to="contact" className={({isActive})=>(isActive?"text-blue-100 bg-blue-500 p-1":"")}>Contact</NavLink>
               </li>
          </ul>
     </nav>
    </div>
  )
}

export default Header