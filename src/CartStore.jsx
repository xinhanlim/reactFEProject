import axios from 'axios';
import { atom, useAtom } from 'jotai'
import { useJwt } from './UserStore'
import { useFlashMessage } from './FlashMessageStore';
import { useLocation } from 'wouter'

const initialCart = [
    // {
    //     "id": 1,
    //     "product_id": 1,
    //     "quantity": 10,
    //     "product_name": "Organic Green Tea",
    //     "price": 12.99,
    //     "image_url": "https://picsum.photos/id/225/300/200",
    //     "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    //   }
]

export const cartAtom = atom(initialCart);

export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);
    const {getJwt} = useJwt();
    const {showFlashMessage} = useFlashMessage();
    const [_, setLocation] = useLocation();

    const fetchRemoteCart= async () =>{
        const jwt = getJwt();
        const response = await axios.get(import.meta.env.VITE_API_URL+ "/api/cart",{
            headers: {
                Authorization: "Bearer " + jwt
            }
        })
        .catch((e)=>{
            console.error(e)
        })
        setCart(response.data);
    }

    const updateRemoteCart = async (modifyQuantity) => {
        const jwt = getJwt();
        const cartData = modifyQuantity.map(cartItem => ({
            product_id:cartItem.product_id,
            quantity:cartItem.quantity 
    }));
    await axios.put(import.meta.env.VITE_API_URL + "/api/cart", {cartItems: cartData},{
        headers:{
            Authorization: "Bearer " + jwt
        }
    })
        .catch(e => {
            console.error(e);
        })
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };
    const addToCart = (product) =>{
        const exisitingCart = cart.find(currentItem => currentItem.product_id === product.id);

        if(!exisitingCart){
            const newCartItem = {
                id: Math.floor(Math.random() * 1000 + 1),
                product_id: product.id,
                product_name: product.name,
                image_url: product.image,
                description: product.description,
                quantity: 1,
                price: product.price
            }

            const cloned = [...cart, newCartItem]
            setCart(cloned)
            updateRemoteCart(cloned)
        } 
        else {
            modifyQuantity(exisitingCart.product_id, exisitingCart.quantity + 1)
        }
    }

    const modifyQuantity = async (product_id, quantity) => {
        if(quantity < 1){
            return;
        }
        const exisitingCartItem = cart.find(currentItem => currentItem.product_id === product_id)
        const clonedCartItem = {...exisitingCartItem, "quantity": quantity};
        const cloned = cart.map(currentCartItem => {
            if(currentCartItem.id !== clonedCartItem.id){
                return currentCartItem
            } else {
                return clonedCartItem;
            }
        })
        setCart(cloned);
        updateRemoteCart(cloned)

    
    }

    const removeCart = ( product_id ) =>{
        const exisitingCart = cart.find(ec => ec.product_id === product_id);
        const cloned = cart.filter(cci => cci.product_id !== exisitingCart.product_id)
        setCart(cloned);
        updateRemoteCart(cloned)
    }
    return {
        cart,
        getCartTotal,
        addToCart,
        modifyQuantity,
        removeCart,
        fetchRemoteCart
    }
}




