import React, { useEffect } from 'react'
import { useCart } from './CartStore'
import axios from 'axios'
import { useJwt } from './UserStore' 

const ShoppingCart = () => {

    const { cart, getCartTotal, modifyQuantity, removeCart, fetchRemoteCart } = useCart();
    const { getJwt } = useJwt();

    useEffect(()=>{
        fetchRemoteCart();
    },[])

    const handleCheckout = async () =>{
        const jwt = getJwt();
        try{
            const response = await axios.post(
                import.meta.env.VITE_API_URL + '/api/checkout',
                {},
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    }
                }
            );
            window.location = response.data.url;
        }catch(e){
            console.log(e);
            alert('Checkout Failed. Please Try Again Later')
        }

    }

    return <div className="container mt-4" >
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
            <p> Your Cart Is Empty</p>
        ) : (
            <>
                <ul className="list-group">
                    {cart.map((item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <img src={item.image_url} />
                                <h5>{item.product_name}</h5>

                                <div className="d-flex align-items-center">
                                    <button className="btn btn-sm btn-secondary me-2"
                                        onClick={() => {
                                            modifyQuantity(item.product_id, item.quantity - 1)
                                        }}>-</button>
                                    <p className="m-3">Quantity: {item.quantity}</p>
                                    <button className="btn btn-sm btn-secondary me-2"
                                        onClick={() => {
                                            modifyQuantity(item.product_id, item.quantity + 1)
                                        }}>+</button>
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-danger m-2"
                                    onClick={() => { 
                                        removeCart(item.product_id)
                                    }}>
                                        Remove
                                    </button>

                                </div>


                            </div>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    )))}
                </ul>
                <div className="mt-3 mb-3 text-end">
                    <h4>Total: ${getCartTotal()}</h4>
                    <button className = "btn btn-primary mt-2"
                    onClick = {handleCheckout}>
                        Checkout
                    </button>
                </div>
            </>
        )
        }
    </div>
}

export default ShoppingCart;
