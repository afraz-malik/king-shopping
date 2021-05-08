import {addToCart, clearFromCart, decFromCart} from './cart.utils'

const InitialState = {
    hidden: true,
    cartItem: []
}
export const cartReducer = (state=InitialState, action) =>{
    switch(action.type){
        case 'TOGGLE_CART':
            return Object.assign({}, state, {hidden: !state.hidden})
        case 'ADD_ITEMS_TO_CART':
            return Object.assign({}, state, {cartItem: addToCart(state.cartItem, action.payload)})
        case 'CLEAR_ITEM_FROM_CART':
            return Object.assign({}, state, {cartItem: clearFromCart(state.cartItem, action.payload)})
        case 'DECERASE_ITEM_FROM_CART':
            return Object.assign({}, state, {cartItem: decFromCart(state.cartItem, action.payload)})
        default:
            return state
    }   
}
