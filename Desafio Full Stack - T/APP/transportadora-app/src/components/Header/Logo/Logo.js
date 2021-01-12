import React from 'react';
import './Logo.css';
import LogoUrl from '../../../assets/images/logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={LogoUrl} />
      </div>
    );
  }
}

export default Logo;
