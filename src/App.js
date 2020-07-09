import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import NavBar from './components/nav-bar/index.js';

const title = "Navigation Bar";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo"/>
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <NavBar/>
      </div>
    );
  }
}

export default App;
