import React from 'react';
//Redux
import {connect} from 'react-redux'
//Selectors
import {createStructuredSelector} from 'reselect'
import {shopDataListSelectorToArrays} from '../../redux/shop-data/shop.data.selector'
//Components
import Collection from '../collection/collection';


const mapStateToProps = createStructuredSelector({
    collections: shopDataListSelectorToArrays
})
const  Shop = ({collections}) =>{ 
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

export default connect(mapStateToProps)(Shop);