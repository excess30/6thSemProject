import React, { Component } from 'react';
import userContext from '../../models/user';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <userContext.Consumer>
        { 
          (value) => {
            if (value.user.token !== undefined)
              return <HomePageContents/>;
            
            return <Redirect to="/"/>;
          }
        }
      </userContext.Consumer>
      </div>
    );
  }
}

class HomePageContents extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>Home Page</h2>
      </div>
    );
  }
}

export default HomePage;