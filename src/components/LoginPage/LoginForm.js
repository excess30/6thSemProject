import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import history from '../../history';
import './index.css'
import axios from 'axios';


class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.id = undefined;
        this.password = undefined;
        this.state = {
        isLoggedIn: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        axios.post("http://127.0.0.1:5000/api/login", {
            id: this.id.value,
            password: this.password.value
        })
        .then((value) => {
            localStorage.setItem("token", value.data.token);
            history.push("/home");
        })
        .catch((err) => {
            alert("Invalid id or password.");
            console.log(err);
        });
    }

    render() {
        return (
            <div className="vertical-center">
                <Card className="Panel">
                    <Form horizontal className="LoginForm" id="loginForm">
                        <Form.Group controlId="formEmail">
                            <Form.Control type="text" placeholder="Doctor ID" ref={(ref) => this.id = ref}/>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" ref={(ref) => this.password = ref}/>
                        </Form.Group>
                        <Button className="loginButton" variant="primary" type="submit" onClick={this.handleFormSubmit}>
                            Login
                        </Button>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default LoginForm;