import './styles/header.css'
import logo from './images/gym_logo.png'
// import { useState } from 'react';

function NavBar() {

  return (
    <header className="header">
      <div className="header_wrapper">
        <img src={logo} className="header_logo" />
      </div>
      <h1 className='header_tittle'>Today is best time for change your physique!</h1>
    </header>
  );
}

export default  NavBar
