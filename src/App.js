import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Our site is getting a fresh look for 2020! Please reach out to us via <a href="mailto:farmer@hlfarm.com">email</a> or check us out on <a href="https://www.facebook.com/hlfarm/">Facebook</a>. 
        </p>
      </header>
    </div>
  );
}

export default App;
