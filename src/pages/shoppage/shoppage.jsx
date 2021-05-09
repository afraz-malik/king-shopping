import React from 'react';
//Router 
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
//Component
import ShopCollection from '../../components/shop-collection/shop-collection';
import ShopCategory from '../../components/shop-category/shop-category'


const  ShopPage = ({match}) =>{ 

    return(
        <div className="">
            <Route exact path={`${match.path}`} component={ShopCollection}/>
            <Route  path={`${match.path}/:category`} component={ShopCategory}/>
        </div>
    )
}

export default withRouter(ShopPage);