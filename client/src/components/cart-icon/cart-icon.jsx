import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.scss';
import {ReactComponent as ShoppingBag} from './cart-icon.svg';
import {toggleCart} from '../../redux/cart/cart.action';
import {cartItemsCountSelector} from '../../redux/cart/cart.selectors'

const mapStateToProps = (state) =>{
    return({
    cartItemCount: cartItemsCountSelector(state)
})
}

const mapDispatchToProps=(dipatch)=>({
    toggleCart: () => dipatch(toggleCart())
})

const CartIcon = ({toggleCart, cartItemCount}) => (
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingBag className='shopping-icon'/>
        <span className="item-count">{cartItemCount}</span>
    </div>
)
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
