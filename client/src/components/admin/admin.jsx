import React, {useState} from 'react';
import './admin.scss'
//Redux
import {connect} from 'react-redux'

//Selectors
import {createStructuredSelector} from 'reselect'
import {shopDataListSelectorToArrays} from '../../redux/shop-data/shop.data.selector'
import {isFetchingSelector} from '../../redux/shop-data/shop.data.selector'

//Components
import Button from '../../components/button/button'
import AdminCollection from '../admin-collection/admin-collection';

import {AddCollection} from '../admin-add-item-box/admin-add-item-box'


const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingSelector,
    collections: shopDataListSelectorToArrays
})
const  Admin = ({collections, isLoading}) =>{ 
    const [itemBox, toggleItemBox] = useState(false);
    const toggleBox=()=>{
        toggleItemBox(!itemBox)
    }
    return(
        <div className='admin'>
            <div className="div">
                <h1 className="ok">Collections:</h1>
                <Button type='submit' onClick={()=>toggleBox()}>Add New Collection</Button>
            </div>
            {
                collections.map(({id, ...otherCollectionProps}) =>(
                    <AdminCollection key={id} id={id} {...otherCollectionProps}/>
                ))
            }
            {
                itemBox? <AddCollection toggle = {toggleBox}  collections={collections}/>: null
            }
        </div>
    )
}

export default connect(mapStateToProps)(Admin);