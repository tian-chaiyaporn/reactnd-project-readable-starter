import React from 'react';
import { Link } from 'react-router-dom'

export default function CategoryItem ({categoryName}) {
  return (
    <div className="category-item">
      <Link to={`/category/${categoryName}`}>
        {categoryName}
      </Link>
    </div>
  )
}
