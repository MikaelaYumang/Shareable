// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Homescreen from './Screens/Homescreen'


import './style.css'




function App() {
  return (
    <div>
      <Header />
      <Homescreen />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
