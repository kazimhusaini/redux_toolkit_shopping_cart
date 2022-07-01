import React, { useState, useEffect } from 'react'
import '../index.css'
import { useDispatch } from 'react-redux'
import add from '../store/cartSlice'



const Products = () => {
     console.log('add : ',add)
     const dispatch = useDispatch()

    const [products , setProducts] = useState([])

    useEffect(()=>{
    const fetchProducts = async ()=>{
       const res = await fetch('https://fakestoreapi.com/products')
       
       const data = await res.json()
       
       console.log(data)
       setProducts(data)
    }

    fetchProducts()

    },[])

    const handleAdd = (product)=>{
        // Is product ko ham na product store ma add karna ha
        console.log('product',product)
        ;
        console.log('add product :', dispatch)

    }
  return (
    <div className='productsWrapper'>
        {
            products.map(product =>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="button" onClick={()=> dispatch(add(product))}>Add To CART</button>
                    </div>
            ))
        }
    </div>
  )
}

export default Products