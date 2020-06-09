import React, { Component } from 'react';
import LoginForm from './LoginForm';

import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <h1>
          Medical Image Analysis
        </h1>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;