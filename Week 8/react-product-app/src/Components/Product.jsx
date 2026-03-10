import React from 'react'
import { useLocation } from 'react-router'

function Product() {
     
     const {state}=useLocation()
     //console.log(state?.product)
  return (
    <div className='flex '>
          <div className='w-2/5 mt-15'>
               <img src={state?.product?.productObj?.image} className='w-50'></img>
          </div>
          <div className='p-20 '>
               <p className='text-5xl pb-5'>{state.product.productObj.title}</p>
               <p>{state.product.productObj.description}</p>
               <p>{state.product.productObj.price}</p>
               <p>{state.product.productObj.category}</p>
          </div>
    </div>
  )
}

export default Product