import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';

class HomePage extends Component {

    render() {
        const token = localStorage.getItem("token");

        if (token === "" || token === "undefined" || token === "null")
            return <Redirect to="/" />
        return <HomePageContents />;
    }
}

class HomePageContents extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1 class="display-3">Home</h1>
            </div>
        );
    }
}

export default HomePage;