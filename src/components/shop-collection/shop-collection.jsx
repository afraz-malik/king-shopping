import React from 'react';
//Redux
import {connect} from 'react-redux'
//Selectors
import {createStructuredSelector} from 'reselect'
import {shopDataListSelectorToArrays} from '../../redux/shop-data/shop.data.selector'
//Components
import Collection from '../../components/collection/collection';


const mapStateToProps = createStructuredSelector({
    collections: shopDataListSelectorToArrays
})
const  ShopCollection = ({collections}) =>{ 
    return(
        <div className='shoppage'>
            {
                collections.map(({id, ...otherCollectionProps}) =>(
                    <Collection key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps)(ShopCollection);