import React , {useState}from 'react'
import './admin-collection.scss'
//Router
import {withRouter} from 'react-router-dom'
//Redux
import {connect } from 'react-redux'
import {addItemInDb} from '../../redux/shop-data/shop.data.actions'
//Components
import AdmincollecionItem from '../admin-collection-item/admin-collection-item';
import ItemBoxPopup from '../admin-add-item-box/admin-add-item-box'

const mapDispatchToProps = (dispatch) =>({
    addItemInDb: (ref, objToAdd) => dispatch(addItemInDb({ref, objToAdd}))
})
const AdminCollection = ({id, title, items, addItemInDb}) =>{
    const [itemBox, toggleItemBox] = useState(false);
    const [tempTitle, setTempTitle] = useState(null);
    const [tempId, setTempId] = useState(null);
    const [tempItems, setTempItems] = useState(null);

    const [showItems, toggleItems] = useState(false);

    const toggleCollection = () =>{
        toggleItems(!showItems)
    }
    const toggleBox = (title, id, items) =>{
        toggleItemBox(!itemBox)
        setTempTitle(title)
        setTempId(id)
        setTempItems(items)
    }
    console.log(showItems)
    return(
        <div className='admin-collection'>
            <div className="upper-bar"  onClick={()=>toggleCollection()}>
                <h1 className="collection-title">{id}.     {title.toUpperCase()}</h1>
                {showItems? <div className="add-more" onClick={()=>toggleBox(title, id, items)}>Add more</div>: null}
            </div>
            {
                showItems? 
                <div className="new-item">
                    {items
                        .map((item) => (
                            <AdmincollecionItem  key={item.id} item={item} />
                        ))
                    }
                </div>
                :null
            }
            {itemBox? <ItemBoxPopup toggle = {toggleBox} id= {tempId} title = {tempTitle} addItemInDb = {addItemInDb} items={tempItems}/>: null}
        </div>
    )
}
export default withRouter(connect(null,mapDispatchToProps)(AdminCollection));