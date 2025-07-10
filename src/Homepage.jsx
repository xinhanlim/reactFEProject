import React from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from './CartStore';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

export default function Homepage() {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const {addToCart} = useCart();
  const [_,setLocation] = useLocation();
  const { showFlashMessage} = useFlashMessage();
  

  const handleAddToCart = (featuredProduct) => {
    addToCart(featuredProduct);
    showFlashMessage("Product added to cart", "success");
    setLocation("/ShoppingCart");
  }

  useEffect(() => {
    try {
      const getFeaturedProducts = async () => {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/api/products");
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
        onAddToCart={()=>{
          handleAddToCart(f)}
        }/>
        </div>
      ))
    }
    </div>
  </main>
</>
)
}
