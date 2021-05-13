import React from 'react';
import './cart-item.scss'

const Cartitems = ({item}) => (
    <div className='cart-item'>
        <img alt='itemImg' src={item.imageUrl} />
        <div className='details'>
            <span className="name">{item.name}</span>
            <span className="price">{item.quantity} x ${item.price}</span>
        </div>
    </div>
)   

export default Cartitems;