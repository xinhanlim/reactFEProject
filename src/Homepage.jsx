import React from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Homepage() {

  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    try {
      const getFeaturedProducts = async () => {
        const response = await axios.get('/featured.json');
        setFeaturedProducts(response.data);
      }
      getFeaturedProducts();

    } catch (e) {
      console.log("error");
    }
  }, [])
return(
<>
  <Header />
  <main className="container my-5">
    <h2 className="text-center mb-4">Featured Products</h2>
    <div className="row"> 
    {
      featuredProducts.map(f => (
        <div key ={f.id} className="col-md-4 mb-4">
        <ProductCard 
        image = {f.image}
        name={f.name}
        price = {f.price}
        />
        </div>
      ))
    }
    </div>
  </main>
</>
)
}
