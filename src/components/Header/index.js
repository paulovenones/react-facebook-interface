import React, {Component} from 'react';

import facebookIcon from '../../assets/facebook.svg';
import profileIcon from '../../assets/profile-icon.svg';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <header id="page-header">
        <img src={facebookIcon} alt="Facebook"/>
        <a href="#">
          Meu perfil
          <img src={profileIcon} alt="Perfil"/>
        </a>
      </header>
    )
  }
}

export default Header;
