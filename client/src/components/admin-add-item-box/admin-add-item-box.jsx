import React, { useState}  from 'react';
import './admin-add-item-box.scss'

const ItemBoxPopup = ({title, id, items, toggle, addItemInDb}) =>{
    const [productDetails, setProductDetails] = useState({id:items.length+1 ,name: '', imageUrl: '', price: ''})
    const handleChange = (event) =>{
        setProductDetails({...productDetails, [event.target.name] : event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        addItemInDb(id, productDetails);
        setProductDetails({name: '', imageUrl: '', price: ''})
        toggle();  
    }
    return(
        <div className="form-popup" id="myForm">
            <form  className="form-container" onSubmit={handleSubmit}>
                <h1>{`Add Items in Collection: ${title}`}</h1>
                <label htmlFor="email"><b>Name</b></label>
                <input type="text" placeholder="Enter Name Of the Product" name="name" required  onChange={handleChange}/>
                <label htmlFor="psw"><b>Image URL</b></label>
                <input type="text" placeholder="Enter Image Link" name="imageUrl" required onChange={handleChange}/>
                <img src={productDetails.imageUrl} alt="" className="addImg"/>  <br/>
                <label htmlFor="psw"><b>Price (USD)</b></label>
                <input type="text" placeholder="Enter Price of Product" name="price" required onChange={handleChange}/>
                <button type="submit" className="btn">Submit</button>
                <button type="button" className="btn cancel" onClick={()=>toggle()}>Close</button>
            </form>
        </div>
    )
}
export default ItemBoxPopup;