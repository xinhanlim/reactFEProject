## Bugs Encountered:
const exisitingCartItem = cart.find(currentItem => currentItem.product_id === product_id)
        const clonedCartItem = {...exisitingCartItem, "quantity": quantity};
        const cloned = cart.map(currentCartItem => {
            if(currentCartItem.product_id !== clonedCartItem.product_id){
                return currentCartItem
            } else {
                return clonedCartItem;
            }

When i use if(currentCartItem.id !== clonedCartitem.id),
if i add new product and say user want to add quantity, the other products will follow the newly added product. that why its best to specically use currentCartItem.product_id to actually draw the item out