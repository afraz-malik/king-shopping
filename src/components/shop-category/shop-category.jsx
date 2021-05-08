import React from 'react'
import './shop-category.scss'

import {connect} from 'react-redux'
import {getCategorySelector} from '../../redux/shop-data/shop.data.selector'

import CollectionItem from '../../components/collection-item/collection-item'


const mapStateToProps = (state, ownProps) =>({
    categories: getCategorySelector(ownProps.match.params.category)(state)
})

const ShopCategory = ({match, categories}) =>{
    return(
        <div className="ok">
            {
                categories===undefined
                ? 
                <div className="error">No such Page</div>

                :
                <div className="categories">
                    <h2 className='title'>{categories.title}</h2>
                    <div className='items'>
                        {
                            categories.items.map(item => (
                                <CollectionItem key={item.id} item={item}/>
                            ))
                        }
                    </div>

                </div>
            }
        </div>
    )

}
export default connect(mapStateToProps)(ShopCategory);