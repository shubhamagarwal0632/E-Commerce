import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import ProductsDetails from './components/ProductsDetails'
import Product from './components/Product'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([]);

  return (
    <>
    <Router>
    <Navbar cart={cart} setData = {setData} />
      <Routes>
        <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}/>
        <Route path='/product/:id' element={<ProductsDetails/>}/>
        <Route path='/search/:term' element={<SearchItem/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
