import React from 'react';
//Router 
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
//Component
import ShopCollection from '../../components/shop-collection/shop-collection';
import ShopCategory from '../../components/shop-category/shop-category'


const  ShopPage = () =>{ 

    return(
        <div className="">
            <Route exact path='/shop' component={ShopCollection}/>
            <Route  path='/shop/:category' component={ShopCategory}/>
        </div>
    )
}

export default withRouter(ShopPage);