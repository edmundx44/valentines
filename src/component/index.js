import React, { Component } from 'react';

//import external file
import './layout/css/index.css';
import Home from './routes/home';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
      <Home />
    );
  }
}

export default App;
