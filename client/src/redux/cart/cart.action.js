
export const toggleCart = () =>({
    type: 'TOGGLE_CART' 
})
export const additem = (items) => ({
    type: 'ADD_ITEMS_TO_CART',
    payload: items
})
export const clearItem = (items)=>({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: items
})
export const decCartItem = (items)=>({
    type: 'DECERASE_ITEM_FROM_CART',
    payload: items
})
export const clearCart=()=>({
    type: 'CLEAR_CART'
})