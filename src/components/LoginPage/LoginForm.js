import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
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
            <Panel className="Panel">
            <Form horizontal className="LoginForm" id="loginForm">
                <FormGroup controlId="formEmail">
                <FormControl type="doctor_id" placeholder="Doctor ID" inputRef={(value) => this.id = value}/>
                </FormGroup>
                <FormGroup controlId="formPassword">
                <FormControl type="password" placeholder="Password" inputRef={(value) => this.password = value}/>
                </FormGroup>
                <FormGroup controlId="formSubmit">
                <Button className="loginButton" bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                    Login
                </Button>
                </FormGroup>
            </Form>
            </Panel>
        </div>
        );
    }
}

export default LoginForm;