import axios from 'axios'
import React, { createContext, useState } from 'react'

// created a context to share the data across the components without prop drilling
export const ContextData = createContext()

function Context({children}) {

    const [products, setProducts] = useState([])

    const FETCH_PRODUCTS = async () => {
        const response  = await axios.get('https://dummyjson.com/products?limit=12')
        console.log(response)
        setProducts(response.data.products)
    }

  return (
    <ContextData.Provider value={{ products, FETCH_PRODUCTS }}>
        {children}
    </ContextData.Provider>
  )
}

export default Context