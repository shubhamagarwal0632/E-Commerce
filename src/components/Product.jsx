import React from 'react'
// import { items } from './Data'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ items, cart, setCart }) {
    const addtocart = (id, description, imgSrc, price, title) => {
        const obj = {
            id, description, imgSrc, price, title
        }
        setCart([...cart, obj]);
        console.log(cart)
        toast.success('🦄 add tocard', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="container">
                <div className="container5">
                    {
                        items.map((item) => {
                            return (
                                <>
                                    <div className="card mt-2 text-center" style={{ width: '18rem' }}>
                                        <Link to={`/product/${item.id}`} className="" style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <img src={item.imgSrc} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">{item.price}</p>
                                            <a href="#" className="btn btn-primary">
                                                {item.price}{' '}₹
                                            </a>
                                            <a href="#" onClick={() => addtocart(item.id, item.description, item.imgSrc, item.price, item.title)} className="btn btn-warning">
                                                AddToCart
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
