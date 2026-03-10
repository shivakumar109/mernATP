import './App.css';
import Products from './Components/Products.jsx';
import Product from './Components/Product.jsx';
function App(){

  return(
    <div className='text-center border-2 p-5 bg-gray-300'>
      <h1 className='text-5xl text-blue-500 text-center p-5 font-bold'>Products</h1>
      <Products/>
    </div>
  )
}

export default App