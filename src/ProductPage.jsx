import React, { useEffect } from 'react'
import {useState, useeffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'


export default function ProductPage() {

    const {products, setProducts} = useState([]);

    useEffect(()=> {
      const fetchProducts = async ()=> {
        try {
          const response = await axios.get('./products.json');
          setProducts(response.data);
        } catch (e){
          console.log("Error")
        }
      }
      fetchProducts();
    }, [])
      console.log(setProducts);
    return (
    <>
    <div className="container mt-5">
      <h1>Our Products</h1>
      <p>This is where we'll display our product catalog.</p>

    {/* {
      products.map(p => (
       <ProductCard 
        image = {p.image}
        name = {p.name}
        price = {p.price.toFixed(2)}
       />
      )
    )
    } */}

    </div>

    </>
    )
}