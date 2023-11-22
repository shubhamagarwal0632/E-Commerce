import React from 'react'
import { Link } from 'react-router-dom'

function Cart({ cart, setCart }) {
  return (
    <div className='container my-5 w-75'>
      {
        cart.length == 0 ? (
          <>
            <div className="text-center ">
              <h1>Cart Empty</h1>
              <Link className='btn btn-warning' to={'/'}>Continue Shopping.........</Link>
            </div>
          </>
        ) :
          cart.map((product) => (
            <>
              <div className="card mb-3" style={{ width: '9 00px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">{product.price}</p>
                      <Link to={'/'} className="btn btn-primary">
                        {product.price}{' '}₹
                      </Link>
                      <Link to={'/'} className="btn btn-warning">
                        BuyNow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
      
            </>
          ))
      }
      {
        cart.length !=0 &&(

          <div className="container text-center my-5">
          <button className='btn btn-warning'>Check Out</button>
          <button onClick={()=>setCart('')} className='btn btn-warning'>Clear All Added Item</button>
        </div>
        )
      }
    </div>
  )
}

export default Cart
