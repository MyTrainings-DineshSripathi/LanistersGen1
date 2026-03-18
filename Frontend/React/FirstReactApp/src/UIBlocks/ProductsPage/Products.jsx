import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])

  const FETCH_PRODUCTS = async () => {
    const response  = await axios.get('https://dummyjson.com/products?limit=12')
    console.log(response)
    setProducts(response.data.products)
  }

  // https://dummyjson.com/products?skip=30&limit=12
  const FETCH_REST_OF_PRODUCTS = async () => {
    //complete
  }

  useEffect(() => {
    FETCH_PRODUCTS()
  }, [])
  return (
    <>
        <section className='products-section'>
            <div className="title-container">
                <h2>Products</h2>
                <p>Explore our collection</p>
            </div>
            <div className="products-container">
                {(products.length > 0)? products.map((product) => (
                <div key={product.id} className="container">
                    <div className="image-container">
                    <img src={product.thumbnail} alt={product.title}/>

                    <div className="category">
                        {product.category}
                    </div>
                    </div>
                    <div className="info-container">
                    <h3>{product.title}</h3>
                    <div className="price-container">
                        &#8377; {Math.round(Number(product.price) * 90)} <span className="discount">{product.discountPercentage}% off</span>
                    </div>
                    <div className='cta-container'>
                        <button>Shop now</button>
                    </div>
                    </div>
                </div>
                )) : <p>Loading....</p>}
            </div>
            <button className="load-more">Load more</button>
        </section>
    </>
  )
}

export default Products