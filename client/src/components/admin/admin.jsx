import React from 'react';
import './admin.scss'
//Redux
import {connect} from 'react-redux'
//Selectors
import {createStructuredSelector} from 'reselect'
import {shopDataListSelectorToArrays} from '../../redux/shop-data/shop.data.selector'
import {isFetchingSelector} from '../../redux/shop-data/shop.data.selector'

//Components
import {Spinner} from '../spinner/spinner';
import Button from '../../components/button/button'
import AdminCollection from '../admin-collection/admin-collection';


const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingSelector,
    collections: shopDataListSelectorToArrays
})
const  Admin = ({collections, isLoading}) =>{ 
    return(
        <div className='admin'>
            <div className="div">
                <h1 className="ok">Collections:</h1>
                <Button type='submit' onClick={()=>alert('Lazy to make this feature working :) ')}>Add New Collection</Button>
            </div>
            {
                collections.map(({id, ...otherCollectionProps}) =>(
                    <AdminCollection key={id} id={id} {...otherCollectionProps}/>
                ))
            }
            {isLoading? <Spinner/> :null}
        </div>
    )
}

export default connect(mapStateToProps)(Admin);