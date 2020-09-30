import React, { Component } from 'react';
import './App.scss';

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
