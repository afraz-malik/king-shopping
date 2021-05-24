import React from 'react'
import './admin-collection-item.scss'

const AdmincollecionItem = ({item}) =>{

    const {name, price, imageUrl} = item;
    return(
        <div className="admin-collection-item">
            <img alt='ok' src={imageUrl}/>
            <span className="new">{name}</span>
            <span className="new">{price}</span>
            <span className="new cross" onClick={()=>alert('Cannot Remove item in Test Mode')}>x</span>
        </div>

    )
}
export default AdmincollecionItem;