import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="/home">Medical Image Analysis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/new-patient">New Patient</Nav.Link>
                            <Nav.Link href="/choose-patient">Existing Patient</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

export default NavBar;