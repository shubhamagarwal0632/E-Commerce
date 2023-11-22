import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';


const Navbar = ({setData, cart}) => {
    const location = useLocation();
    const navigate =  useNavigate();
    const [searchItem, setSearchItem] = useState("")
    const filterbycategory=(category)=>{
        const element = items.filter((product)=>product.category === category)
        // console.log(element)
        setData(element)
    }
    
    const filterbyprice=(price)=>{
        const element = items.filter((product)=>product.price >= price)
        // console.log(element)
        setData(element)
    }

    // forsearch
    const handlesubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchItem}`);
    }
  return (
    <>
    <header className='sticky-top bg-'>
        <div className="nav-bar">
            <Link to={"/"} className="logo">E-Com</Link>
            <form 
            onSubmit={handlesubmit} 
            className="search-bar">
                
             <input
             value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}
            
                type="text" 
                placeholder='Search Products' />
                {/* {console.log(searchItem)} */}
            </form>
            <Link to={'/cart'} className="cart">
            <button type="button" class="btn btn-primary position-relative">
            <FaShoppingCart />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button></Link>
        </div>

        {location.pathname == '/' && (
             <div className="nav-bar-wrapper">
             <div className="item">Filter by {"->"}</div>
             <div
             
             onClick={()=>setData(items)}
             className="item">No Filter</div>
             <div
             
             onClick={()=>filterbycategory('mobiles')}
             className="item">Mobiles</div>
             <div
             
             onClick={()=>filterbycategory('laptops')}
             className="item">Laptops</div>
             <div
             
             onClick={()=>filterbycategory('tablets')}
             className="item">Tablets</div>
             <div
             onClick={()=>filterbyprice('29999')}
             className="item">{">="}29999</div>
             <div
             onClick={()=>filterbyprice('49999')}
             className="item">{">="}49999</div>
             <div
             onClick={()=>filterbyprice('69999')}
             className="item">{">="}69999</div>
             <div
             onClick={()=>filterbyprice('89999')}
             className="item">{">="}89999</div>
         </div>
        )}
    </header>
    </>
    )
}

export default Navbar
