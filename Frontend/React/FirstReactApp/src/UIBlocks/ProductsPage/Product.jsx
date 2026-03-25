import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Product() {
    // as useParams is an object I am destructing it to access the id
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    console.log(productId)

    const fetchProductById = async () => {
        const response =  await axios.get(`https://dummyjson.com/products/${productId}`)
        console.log(response)
        setProduct(response.data)
    }
    useEffect(() => {
        fetchProductById()
    }, [])
  return (
    <>
        {(product.title)? <div className="container">
            <div className="sub-container">
                <div className="left-container">
                    <div className="image-container">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="thumbnail-container">
                        {product.images.map((image, index) => <div key={index}>
                            <img src={image} alt="" />
                        </div> )}
                    </div>
                </div>
                <div className="right-container">
                    <div className="title">
                        {product.title}
                    </div>
                    
                </div>
            </div>
        </div> : "loading..."}
    </>
  )
}

export default Product