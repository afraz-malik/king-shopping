import React from 'react';
import './checkout-item.scss'
//Redux
import {connect} from 'react-redux'
import {clearItem, decCartItem, additem} from '../../redux/cart/cart.action'

const mapDispatchToProps=(dispatch)=>({
    clearCartItem: (item) => dispatch(clearItem(item)),
    decCartItem: (item) => dispatch(decCartItem(item)),
    incCartItem: (item) => dispatch(additem(item)),
})
const CheckOutItem = ({cartItem, clearCartItem, decCartItem, incCartItem})=>{
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt='ok' src={cartItem.imageUrl}/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity ">
                <div className="arrow" onClick={()=> decCartItem(cartItem)}>&#10094;</div>
                <span className="value">{cartItem.quantity}</span>
                <div className="arrow"  onClick={()=> incCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{cartItem.price}</span>
            <span className="remove-button" onClick={()=>clearCartItem(cartItem)}>&#9747;</span>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(CheckOutItem);