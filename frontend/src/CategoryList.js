import React from 'react';
import CategoryItem from './CategoryItem'
import shortid from 'shortid'

export default function CategoryList ({categories}) {
  const categoryItems = categories.map(cat => {
    return (
      <li key={shortid.generate()} style={{margin: '0', display: 'inline-block'}}>
        <CategoryItem categoryName={cat.name} />
      </li>
    )
  })

  return (
    <ul
      className="category-list"
      style={{
        listStyle: 'none',
        margin: '0',
        paddingTop: '10px',
        textAlign: 'center'
      }}>
      <h2>Categories</h2>
      {categoryItems}
    </ul>
  )
}
