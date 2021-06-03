import React, {lazy} from 'react';
//Router 
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
//Component
import Shop  from '../../components/shop/shop';
// import Collections from '../../components/collections/collections'
const Collections = lazy(()=> import('../../components/collections/collections'))

const  ShopPage = ({match}) =>{ 
    return(
        <div className="">
            <Route exact path={`${match.path}`} component={Shop}/>
            <Route  path={`${match.path}/:category`} component={Collections}/>
        </div>
    )
}

export default withRouter(ShopPage);