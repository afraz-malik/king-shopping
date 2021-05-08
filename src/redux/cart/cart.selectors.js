import {createSelector} from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItem
)
export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItem =>
    cartItem.reduce(
        (acc,cartItem) => acc + cartItem.quantity
         ,0
    )
)
export const cartItemsTotal = createSelector(
    [cartItemsSelector],
    cartItem =>
    cartItem.reduce(
        (acc,cartItem) => acc + cartItem.quantity * cartItem.price
         ,0
    )
)

export const cartHiddenSelector =createSelector(
    [cartSelector],
    cart => cart.hidden
)