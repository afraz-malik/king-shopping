import React from 'react'
import './checkout.scss'
//Redux
import {connect} from 'react-redux'
//Selector
import {createStructuredSelector} from 'reselect'
import {cartItemsSelector, cartItemsTotal} from '../../redux/cart/cart.selectors'
//Components
import CheckOutItem  from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

const mapStateToProps=(createStructuredSelector)({
    cartItems: cartItemsSelector,
    cartTotal : cartItemsTotal
})
const CheckOut = ({cartItems, cartTotal}) => (
    <div className='checkout'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }        
        <div className="total">TOTAL: ${`${cartTotal}`}</div>
        <StripeCheckoutButton price={cartTotal}/>
        <div className='card'>
            <span className="red">*PLEASE USE THE FOLLOWING CREDIT CARD FOR TEST PAYMENT*</span><br/>   
            <span className="credit-card">Card: 4242 4242 4242 4242 Exp: 12/2021 CVV:021 </span>
        </div>
    </div>
)

export default connect(mapStateToProps, null)(CheckOut);