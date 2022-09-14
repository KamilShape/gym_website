import './styles/header.css'
import logo from './images/gym_logo.png'

function Header() {

  return (
    <header className="header">
      <div className="header_wrapper wrapper posAbs">
        <img src={logo} className="wrapper_image posAbs" />
      </div>
      <h1 className='title header_tittle'>Today is best time for change your physique!</h1>
    </header>
  );
}

export default  Header
