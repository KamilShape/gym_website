import './styles/navbar.css'
import logo from './images/gym_logo.png'
import { useState } from 'react';

function NavBar() {
  const [display, setDisplay] = useState(false)
  function showMenu(){
    setDisplay(prevState => !prevState)
  }
  return (
    <nav className="navbar">
      <img src={logo} className="navbar_logo" />
      <h1 className='navbar_title'>Your best Gym!!!</h1>
      <ul className={display ? "navbar_list displaying" : "navbar_list"}>
        <li className="navbar_list-item">start</li>
        <li className="navbar_list-item">our gym</li>
        <li className="navbar_list-item">training</li>
        <li className="navbar_list-item">calculator</li>
        <li className="navbar_list-item">join us</li>
      </ul>
      <div className="navbar_hamburger" onClick={showMenu}>
        <div className={display ? "navbar_bar navbar_bar-top navbar_bar-top-show": "navbar_bar navbar_bar-top"}></div>
        <div className={display ? "navbar_bar navbar_bar-middle navbar_bar-middle-show": "navbar_bar navbar_bar-middle" }></div>
        <div className={display ? "navbar_bar navbar_bar-bottom navbar_bar-bottom-show": "navbar_bar navbar_bar-bottom"}></div>
      </div>
    </nav>
  );
}

export default  NavBar