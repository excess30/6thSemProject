import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Footer from '../footer';

import './index.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <div style={{height: "100%"}}>
          <h1>
            Medical Image Analysis
          </h1>
        </div>
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;