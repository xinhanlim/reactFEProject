import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'


export default function ProductPage() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
      try {
        const fetchProducts = async () => {
        const response = await axios.get('/products.json');
        setProducts(response.data);
        } 
        fetchProducts();
       } catch (e) {
      console.log("error",e);
      }
      },[]);

  return (
    <>
      <div className="container mt-5">
        <h1>Our Products</h1>
      </div>
      <div className="row">
      {
          products.map(p => (
            <div key={p.id} className="col-md-4 mb-4">
              <ProductCard
                image={p.image}
                name={p.name}
                price={p.price.toFixed(2)}
              />
            </div>
          )
          )
        }
      </div>
    </>
  )
}