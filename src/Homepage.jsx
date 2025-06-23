import React from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Homepage(){

  const { featuredProducts, setFeaturedProducts } = useState([]);

  useEffect(()=> {
    try{
      const getFeaturedProducts = async () => {
      const response = await axios.get('./featured.json');
      setFeaturedProducts(response.data);
      }

      getFeaturedProducts();

    }catch(e){
      console.log("error");
    }
  }, [])

    const renderFeaturedProduct = () => {
      const featuredProduct = [];
      for (product of featuredProduct) {
        featuredProduct.push()
      }
    }

    return (
    <>
    <Header/>
    <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <ProductCard
          imageUrl = "https://picsum.photos/id/20/300/200"
          productName = "Product 1"
          price = {19.99}
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
          imageUrl = "https://picsum.photos/id/1/300/200"
          productName = "Product 2"
          price = {29.99}
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
          imageUrl = "https://picsum.photos/id/26/300/200"
          productName = "Product 3"
          price = {39.99}
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
          imageUrl = "https://picsum.photos/id/33/300/200"
          productName = "Product 1"
          price = {49.99}
          />
        </div>
      </div>
    </main>
    </>
    )
}