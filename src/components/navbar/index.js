import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import history from '../../history';
import Footer from '../footer';
import './index.css';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();

        localStorage.setItem("token", undefined);
        history.push("/");
    }

    render() {
        return (
            <div className="content-stuff">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="/home">Medical Image Analysis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/new-patient">New Patient</Nav.Link>
                            <Nav.Link href="/choose-patient">Existing Patient</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" onClick={this.onClick}>
                            Logout
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default NavBar;