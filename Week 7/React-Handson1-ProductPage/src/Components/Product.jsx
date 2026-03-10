import React from 'react'
function Product(props){
     let {productId, name,price,brand,description,image} =props.product
     return (
          <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl flex flex-col">
               <p>{name}</p>
               <p>{price}</p>
               <p>{brand}</p>
               <p>{description}</p>
               <img src={image}></img>
          </div>
     )
}

export default Product