import React from 'react'
import './collections.scss'

import {connect} from 'react-redux'
import {shopDataListSelectorByParam} from '../../redux/shop-data/shop.data.selector'

import CollectionItem from '../collection-item/collection-item'


const mapStateToProps = (state, ownProps) =>({
    collections: shopDataListSelectorByParam(ownProps.match.params.category)(state)
})

const Collections = ({collections}) =>{
    return(
        <div className="ok">
            {
                collections===undefined
                ? 
                    null
                :
                <div className="categories">
                    <h2 className='title'>{collections.title}</h2>
                    <div className='items'>
                        {
                            collections.items.map(item => (
                                <CollectionItem key={item.id} item={item}/>
                            ))
                        }
                    </div>

                </div>
            }
        </div>
    )

}
export default connect(mapStateToProps)(Collections);