import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Our site is getting a fresh look for our 2020 season! <br/> Please reach out to us via email or check us out on Facebook. 
        </p>
        <div className="App-icons">
          <a href="https://www.facebook.com/hlfarm/">
            <i href="" className="fab fa-facebook"></i>
          </a>
          <a href="mailto:farmer@hlfarm.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
