import React from 'react';
import CategoryItem from './CategoryItem'
import shortid from 'shortid'

export default function CategoryList ({categories}) {
  const categoryItems = categories.map(cat => {
    return (
      <li key={shortid.generate()}>
        <CategoryItem categoryName={cat.name} />
      </li>
    )
  })

  return (
    <ul className="category-list">
      {categoryItems}
    </ul>
  )
}
