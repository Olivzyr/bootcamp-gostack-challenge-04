import React from 'react';
import facebookLogo from '../assets/facebook-logo.svg';

function Header() {
  return (
    <header id="main-header">
      <div class="content">
        <img src={facebookLogo} alt="Logo Facebook"/>
        
        <nav class="side">
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