import React, { Component } from 'react';

import Routes from './components/routes';
import './App.css';
import userContext from './models/user';

class App extends Component {
  render() {
    return (
      <userContext.Provider value={{ user: {token: "!23"} }}>
        <Routes />
      </userContext.Provider>
    );
  }
}

export default App;