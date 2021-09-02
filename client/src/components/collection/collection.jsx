import React from 'react'
import './collection.scss'
//Router
import { withRouter } from 'react-router-dom'
//Components
import CollectionItem from '../collection-item/collection-item'

const Collection = ({ title, items, history, match }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default withRouter(Collection)
