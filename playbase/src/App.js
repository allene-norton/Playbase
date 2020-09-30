import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './Containers/Home'

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <div className="home-container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
