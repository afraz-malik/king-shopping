import React from 'react';
import './cart.scss'
import Button from '../button/button';
import CartItems from '../cart-items/cart-item'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toggleCart} from '../../redux/cart/cart.action'
const mapStateToProps = (state) =>{
    return({
        cartItems: state.cart.cartItem
    })
}

const Cart = ({cartItems, history, dispatch, match}) => (
    <div className="cart"> 
    {
      
        <div className="cart-items">
            
            {   
                cartItems.length
                ?(
                    cartItems.map( item => 
                        <CartItems key={item.id} item={item}/>
                    )
                )
                : <span className="empty-message">Your Cart is Empty</span>
            }
        </div>
        
    }
        {
            cartItems.length
            ?<Button 
                inverted='true' 
                onClick={() => {
                    history.push(`${match.path}checkout`);
                    dispatch(toggleCart())
                    }
                }
            >GO TO CHECKOUT</Button> 

            : null
        }
        
    </div>
)
export default withRouter(connect(mapStateToProps)(Cart));