import React, { useState}  from 'react';
import './admin-add-item-box.scss'
//Redux
import {connect } from 'react-redux'
import {addItemInDb} from '../../redux/shop-data/shop.data.actions'


const mapDispatchToProps = (dispatch) =>({
    addItemInDb: (ref, collectionToAdd,  itemToAdd) => dispatch(addItemInDb({ref,collectionToAdd, itemToAdd}))
})


export const InCollection = ({  collections, toggle, addItemInDb}) =>{
    const [productDetails, setProductDetails] = useState({name: '', imageUrl: '', price: ''})
    const [collectionDetails, setcollectionDetails] = useState({collectionName: '', collectionImageUrl: ''})
    
    const handleItemChange = (event) =>{
        setProductDetails({...productDetails, [event.target.name] : event.target.value})
    }
    const handleCollectionChange = (event) =>{
        setcollectionDetails({...collectionDetails, [event.target.name] : event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        addItemInDb(collections.length+1, collectionDetails, productDetails);

        setProductDetails({collectionName: '', collectionImageUrl: '', name: '', imageUrl: '', price: ''})
        toggle();  
    }
    return(
        <div className="form-popup" id="myForm">
            <form  className="form-container" onSubmit={handleSubmit}>
                <h1>Add Collection:</h1>
                <label htmlFor="collection"><b>Collection Name</b></label>
                <input type="text" placeholder="Enter Name Of the Collection" name="collectionName"  required  onChange={handleCollectionChange}/>
                <label htmlFor="psw"><b>Collection Image</b></label>
                <input type="text" placeholder="Enter Image Link" name="collectionImageUrl" required onChange={handleCollectionChange}/>
                <img src={collectionDetails.collectionImageUrl} alt="" className="addImg"/>  <br/>
                <hr/>
                <h1>Add Items in Collection:(Item is required to be added)</h1>
                <label htmlFor="email"><b>Item Name</b></label>
                <input type="text" placeholder="Enter Name Of the Product" name="name" required  onChange={handleItemChange}/>
                <label htmlFor="psw"><b>Item Image URL</b></label>
                <input type="text" placeholder="Enter Image Link" name="imageUrl" required onChange={handleItemChange}/>
                <img src={productDetails.imageUrl} alt="" className="addImg"/>  <br/>
                <label htmlFor="psw"><b>Item Price (USD)</b></label>
                <input type="text" placeholder="Enter Price of Product" name="price" required onChange={handleItemChange}/>
                <button type="submit" className="btn">Submit</button>
                <button type="button" className="btn cancel" onClick={()=>toggle()}>Close</button>
            </form>
        </div>
    )
}
const InItems = ({title, id, items, toggle, addItemInDb}) =>{
    const [productDetails, setProductDetails] = useState({id:items.length+1 ,name: '', imageUrl: '', price: ''})
    const handleChange = (event) =>{
        setProductDetails({...productDetails, [event.target.name] : event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        addItemInDb(id, null,  productDetails);
        setProductDetails({name: '', imageUrl: '', price: ''})
        toggle();  
    }
    return(
        <div className="form-popup" id="myForm">
            <form  className="form-container" onSubmit={handleSubmit}>
                <h1>Add Items in Collection:</h1>
                <label htmlFor="collection"><b>Collection Name</b></label>
                <input type="text" placeholder="Enter Name Of the Collection" name="name" value={title} disabled required  onChange={handleChange}/>
                <label htmlFor="email"><b> ItemName</b></label>
                <input type="text" placeholder="Enter Name Of the Product" name="name" required  onChange={handleChange}/>
                <label htmlFor="psw"><b> Item Image URL</b></label>
                <input type="text" placeholder="Enter Image Link" name="imageUrl" required onChange={handleChange}/>
                <img src={productDetails.imageUrl} alt="" className="addImg"/>  <br/>
                <label htmlFor="psw"><b>Item Price (USD)</b></label>
                <input type="text" placeholder="Enter Price of Product" name="price" required onChange={handleChange}/>
                <button type="submit" className="btn">Submit</button>
                <button type="button" className="btn cancel" onClick={()=>toggle()}>Close</button>
            </form>
        </div>
    )
}

export const AdditemsInCollection = connect(null, mapDispatchToProps)(InItems)
export const AddCollection = connect(null, mapDispatchToProps)(InCollection)

