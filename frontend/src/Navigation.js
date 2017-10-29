import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCatgories } from './actions'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Navigation extends Component {
  componentDidMount() {
    this.props.fetchCatgories()
  }

  render() {
    const { categories } = this.props.categoryReducer
    const menuItems = categories.map(c => {
      return (
        <Link to={`/category/${c.name}`} style={{textDecoration: 'none'}}>
          <MenuItem primaryText={c.name.toUpperCase()} />
        </Link>
      )
    })

    return (
      <div>
      <AppBar
        title="Menu"
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          >
            <Link to="/" style={{textDecoration: 'none'}}>
              <MenuItem primaryText="HOME"/>
            </Link>
            {menuItems}
          </IconMenu>
        }
      />
      </div>
    );
  }
}

function mapStateToProps ({ categoryReducer }) {
  return { categoryReducer }
}

export default connect(mapStateToProps, { fetchCatgories })(Navigation);
