import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <header>
        <Link to="/">
					<h1>
						przedszkole niepubliczne nr 2 w zgorzelcu
					</h1>
        </Link>
      </header>
    )
  }
}

export default Header;
