export const addToCart = (cartItem, NewItem) =>{
    const existItem = cartItem.find(
        item =>  item.id === NewItem.id && item.name === NewItem.name
        
    );

    if (existItem){
        return cartItem.map(item =>
            item.id === NewItem.id  && item.name === NewItem.name
            ? ({...item, quantity: item.quantity+1})    
            : item
        )
    }
    return [...cartItem, {...NewItem, quantity:1}]
}
export const clearFromCart = (cartItem, itemToRemove) =>{
    return cartItem.filter(
        cartItem => cartItem.name !== itemToRemove.name
    )
}
export const decFromCart = (cartItem, NewItem)=>{
    const existItem = cartItem.find(
        item => item.name === NewItem.name
    );
    if(NewItem.quantity === 1)
        return clearFromCart(cartItem, NewItem)
    
    if (existItem){
        return cartItem.map(item =>
            item.id === NewItem.id  && item.name === NewItem.name
            ? ({...item, quantity: item.quantity-1})    
            : item
        )
    }
    return cartItem
}