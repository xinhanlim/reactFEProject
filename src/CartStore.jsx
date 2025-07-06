import { atom, useAtom } from 'jotai'

const initialCart = [
    {
        "id": 1,
        "product_id": 1,
        "quantity": 10,
        "product_name": "Organic Green Tea",
        "price": 12.99,
        "image_url": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
      }
]

export const cartAtom = atom(initialCart);

export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };
    const addToCart = (product) =>{
        const exisitingCart = cart.find(currentItem => currentItem.id === product.id);

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
        } 
        else {
            modifyQuantity(exisitingCart.product_id, exisitingCart.quantity + 1)
        }


    }

    const modifyQuantity = (product_id, quantity) => {
        if(quantity < 1){
            return;
        }
        const exisitingCartItem = cart.find(currentItem => currentItem.product_id === product_id)
        const clonedCartItem = {...exisitingCartItem, "quantity": quantity};
        const cloned = cart.map(currentCartItem => {
            if(currentCartItem.product_id !== clonedCartItem.product_id){
                return currentCartItem
            } else {
                return clonedCartItem;
            }
        })
        setCart(cloned);

    
    }
    return {
        cart,
        getCartTotal,
        addToCart,
        modifyQuantity
    }
}




