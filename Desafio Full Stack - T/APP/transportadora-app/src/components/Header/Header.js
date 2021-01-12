import React from 'react';
import Menu from './Menu/Menu';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
