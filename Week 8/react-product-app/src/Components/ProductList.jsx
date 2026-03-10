import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'

function ProductList() {
     let [products, setProudct] = useState([])
     let [loading, setLoading] = useState(false)
     let [error, setError] = useState(null)
     const navigate = useNavigate()
     const { state } = useLocation()
     const category = state?.category?.toLowerCase()
     //navigating to product components
     const getProduct = (productObj) => {
          navigate('/product', { state: { product: { productObj } } })
     }

     useEffect(() => {
          setLoading(true)
          async function getProducts() {
               try {
                    let res = await fetch('https://fakestoreapi.com/products')
                    if (res.status === 200) {
                         // Extract Data
                         let products = await res.json()
                         if (category) {
                              products = products.filter(product => product.category.toLowerCase().includes(category))  // useing ===check exact one but includes can match nearing and give products
                         }

                         // Update State
                         setProudct(products)
                    }
                    else {
                         throw new Error("Failed to Fetch")
                    }
               }
               catch (err) {
                    setError(err)
               }
               finally {
                    setLoading(false)
               }
          }
          getProducts()
     }, [category]);

     if (loading === true) {
          return <p>Loading...</p>
     }
     if (error != null) {
          return <p>{error.message}</p>
     }

     return (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
               {products.map(
                    (prodObj) => <div onClick={() => getProduct(prodObj)} key={prodObj.id} className='shadow-md p-10 rounded-2xl'>
                         <img src={prodObj.image} className=" mb-10" alt="" />
                         <p>{prodObj.title}</p>
                    </div>
               )
               }
          </div>
     )
}

export default ProductList
