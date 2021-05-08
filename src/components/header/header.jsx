import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
import {ReactComponent as Logo} from './crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart'
import './header.scss'


const Header = ({currentUser, hidden}) =>{
    return(
        <div className='header'>
            <Link to='/' className='logo'>
                <Logo/>

            </Link>
            <div className='rightnav'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/about' className='option'>CONTACT</Link>
                { 
                    currentUser ?  
                    (
                        <div className="option" onClick={()=> auth.signOut()}>SIGN OUT </div> 
                    )
                    : <Link to='/signIn' className='option'>SIGN IN </Link>
                }
                <CartIcon/>
            </div>  
            { 
            hidden? null: <Cart/>
            }
        </div>
    )
}

export default Header;