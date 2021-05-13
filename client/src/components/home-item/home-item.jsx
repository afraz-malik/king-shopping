import React from 'react';
import './home-item.scss';

//Router
import {withRouter} from 'react-router-dom'

const HomeItem = ({title, imgUrl, size, routeName, history, match}) => {

    return(
        <div className={`${size} menu-item`}  onClick={() => history.push(`${match.path}shop/${routeName}`)}>
            <div className="background-image"  style={{backgroundImage: `url(${imgUrl})`}}>
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(HomeItem);