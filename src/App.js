import NavBar from './components/NavBar'
import Header from './components/Header';
import OurGym from './components/OurGym';
import Training from './components/Training';
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <OurGym/>
      <Training/>
    </div>
  );
}

export default App;
