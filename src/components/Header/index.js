import React from 'react';
import facebookLogo from '../../assets/facebook-logo.svg';

import './styles.css'

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <img src={facebookLogo} alt="Logo Facebook"/>
        
        <nav className="side">
          <ul>
            <li>Meu Profile</li>
            <i className="material-icons">account_circle</i>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;