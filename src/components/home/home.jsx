import React from 'react';
import './home.scss';

//Redux
import {connect} from 'react-redux'
//Selector
import {createStructuredSelector} from 'reselect'
import {shopDataListSelectorToArrays} from '../../redux/shop-data/shop.data.selector'

//Components
import HomeItem from '../home-item/home-item'


const mapStateToProps = createStructuredSelector({
    shopData: shopDataListSelectorToArrays
})

const Home =({shopData}) =>{
    console.log(shopData)
    return(
        <div className='directory-menu'>
            {
                shopData.map(({id, ...otherShopData}) =>{
                    return <HomeItem  key={id} {...otherShopData}/>
                })
            }
        </div>
    )
}
export default connect(mapStateToProps)(Home);