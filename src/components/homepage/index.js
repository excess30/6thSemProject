import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
                <h2>Home Page</h2>
            </div>
        );
    }
}

export default HomePage;