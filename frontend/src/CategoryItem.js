import React from 'react';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

export default function CategoryItem ({categoryName}) {
  return (
    <div className="category-item">
      <Link to={`/category/${categoryName}`}>
        <FlatButton label={categoryName} style={{textAlign: 'left'}}/>
      </Link>
    </div>
  )
}
