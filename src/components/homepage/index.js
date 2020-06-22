import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';

class HomePage extends Component {

    render() {
        if (localStorage.getItem("token") != null)
            return <HomePageContents />;
        return <Redirect to="/" />
    }
}

class HomePageContents extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1 class="display-3">Home Page</h1>
            </div>
        );
    }
}

export default HomePage;