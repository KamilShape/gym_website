import './styles/navbar.css'
import { Link } from "react-scroll"
import logo from './images/gym_logo.png'
import { useState } from 'react';

function Header() {
  const [display, setDisplay] = useState(false)
  function showMenu(){
    setDisplay(prevState => !prevState)
  }
  return (
    <nav className="navbar">
      <img src={logo} className="navbar_logo" />
      <h1 className='title navbar_title'>Your best Gym!!!</h1>
      <ul className={display ? "navbar_list displaying" : "navbar_list"}>
        <li className="navbar_list-item"><Link to='header' spy={true} smooth={true}>start</Link></li>
        <li className="navbar_list-item"><Link to='ourgym' spy={true} smooth={true}>our gym</Link></li>
        <li className="navbar_list-item"><Link to='training' spy={true} smooth={true}>training</Link></li>
        <li className="navbar_list-item"><Link to='contact' spy={true} smooth={true}>join us</Link></li>
      </ul>
      <div className="navbar_hamburger" onClick={showMenu}>
        <div className={display ? "navbar_bar navbar_bar-top navbar_bar-top-show" : "navbar_bar navbar_bar-top"}></div>
        <div className={display ? "navbar_bar navbar_bar-middle navbar_bar-middle-show" : "navbar_bar navbar_bar-middle" }></div>
        <div className={display ? "navbar_bar navbar_bar-bottom navbar_bar-bottom-show" : "navbar_bar navbar_bar-bottom"}></div>
      </div>
    </nav>
  );
}

export default  Header
