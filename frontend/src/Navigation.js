import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCatgories } from './actions'
import shortid from 'shortid'

class Navigation extends Component {
  componentDidMount() {
    this.props.fetchCatgories()
  }

  render() {
    const { categories } = this.props.categoryReducer
    const menuItems = categories.map(c => {
      return (
        <li key={shortid.generate()}>
          <Link to={`/category/${c.name}`}>{c.name.toUpperCase()}</Link>
        </li>
      )
    })
    return (
      <div>
        <ul className="route-container">
          <li key={shortid.generate()}>
            <Link to="/">HOME</Link>
          </li>
          {menuItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ categoryReducer }) {
  return { categoryReducer }
}

export default connect(mapStateToProps, { fetchCatgories })(Navigation);
