import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import Slider from './Slider';
// import Products from './Products'
// import Services from './Services';

// import Footer from './Footer';
// import Filter from './Filter';
import NavBar from './Navbat/NavBar';
import Routing from './Routing/Routing';
import Footer from './Components/Footer';
import Advantages from './Components/Advantages';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header />
      <Slider />
      <Products />
      <Services />
      <Footer /> */}
      {/* <Filter /> */}
      <NavBar />
      <Routing />
      <Advantages />
      <Footer />
    </div>
   
  );
}

export default App;
