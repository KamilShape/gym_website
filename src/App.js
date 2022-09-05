import NavBar from './components/NavBar'
import Header from './components/Header';
import OurGym from './components/OurGym';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <OurGym/>
      <Training/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
