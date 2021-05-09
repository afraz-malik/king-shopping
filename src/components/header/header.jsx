import React from 'react';
//Router
import {Link, withRouter} from 'react-router-dom';
//Firebase
import { auth } from '../../firebase/firebase-utils';
//Components
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart'
//Styles
import './header.scss';
import {ReactComponent as Logo} from './crown.svg';


const Header = (props) =>{
    const {currentUser, hidden, match} = props
    return(
        <div className='header'>
            <Link to={`${match.path}`} className='logo'>
                <Logo/>

            </Link>
            <div className='rightnav'>
                <Link to={`${match.path}shop`} className='option'>SHOP</Link>
                <Link to={`${match.path}about`} className='option'>CONTACT</Link>
                { 
                    currentUser 
                    ?<div className="option" onClick={()=> auth.signOut()}>SIGN OUT </div> 
                    :<Link to={`${match.path}signin`} className='option'>SIGN IN </Link>
                }
                <CartIcon/>
            </div>  
            { 
            hidden? null: <Cart/>
            }
        </div>
    )
}

export default withRouter(Header);