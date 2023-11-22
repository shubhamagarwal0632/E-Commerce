import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const ProductsDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedproduct, setrelatedproduct] = useState([])
    useEffect(() => {
        const filterproduct = items.filter((product) => product.id == id)
        // console.log(filterproduct)
        setProduct(filterproduct[0])
        const relatedproduct = items.filter((kuchbhi) => kuchbhi.category === product.category)
        setrelatedproduct(relatedproduct)
        console.log(relatedproduct)
    }, [id, product.category])

    return (
        <>
            <div className=" container container1">
                <img src={product.imgSrc} alt="" />
                <div className="conta">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <a href="#" className="btn btn-primary">
                        {product.price}{' '}₹
                    </a> <a href="#" className="btn btn-warning">
                        AddToCart
                    </a>
                </div>
            </div>

            <div className="container">
            <h1 className='text-center'>Related Product</h1>    
                {/* <div className="container5">
                    {
                        relatedproduct.map((item) => {
                            return (
                                <>
                                    <div className="card mt-2 text-center" style={{ width: '18rem' }}>
                                        <Link to={`/product/${item.id}`} className="" style={{ 
                                            display: 'flex', alignItems:'center',             justifyContent: 'center' }}>
                                            <img src={item.imgSrc} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">{item.price}</p>
                                            <a href="#" className="btn btn-primary">
                                                {item.price}{' '}₹
                                            </a> <a href="#" className="btn btn-warning">
                                                AddToCart
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div> */}
                {/* isko dusre tarike me bhi kr sakte h product components ko do baar use krke */}

                <Product items={relatedproduct}/>
            </div>
        </>
    )
}

export default ProductsDetails
