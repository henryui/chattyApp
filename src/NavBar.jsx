import React from 'react';
import PropTypes from 'prop-types';

const Navbar = function ({numUser}) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <div>{numUser} users online</div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  numUser: PropTypes.number
}