import React from 'react'
import './collection-item.scss'
//Redux
import {connect} from 'react-redux'
import {additem} from '../../redux/cart/cart.action'
//Component
import Button from '../button/button'

const mapDispatchToProps = (dispatch) =>({
    addItem : (item) => dispatch(additem(item))
})

const collecionItem = ({item, addItem}) =>{

    const {name, price, imageUrl} = item;
    return(
        <div className="collection-item">
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        <Button inverted='true' onClick ={()=>addItem(item)}>ADD TO CART</Button>
        </div>
    )
}
export default connect(null, mapDispatchToProps)(collecionItem);