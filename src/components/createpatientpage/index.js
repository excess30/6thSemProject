import React from 'react';
import history from '../../history';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './index.css'
import axios from 'axios';

class CreatePatientPage extends React.Component {

    constructor(props) {
        super(props);

        this.name = undefined;
        this.gender = undefined;
        this.dob = undefined;
        this.contact = undefined;

        this.submitForm = this.submitForm.bind(this);
        
    }

    submitForm(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:5000/api/patient/add", {
            name: this.name.value,
            gender: this.gender.value,
            dob: this.dob.value,
            contact: this.contact.value
        }, { headers: { "x-access-token": localStorage.getItem("token") }})
        .then((res) => {
            console.log(res);
            console.log(res.data.patient_id);
            history.push({
                pathname: "/upload", 
                patient_id: res.data.patient_id   
            });
        })
        .catch((err) => {
            console.log(err);
            alert("Error creating patient data.");
        });
    }

    render() {
        return (
            <div className="patient-form">
                <h1>Create New Patient</h1>
                <div className="vertical-center">
                    <h3>Please enter the patient details: </h3>
                    <br/>
                    <Panel className="Panel">
                        <Form horizontal>
                            <FormGroup controlId="name">
                                <FormControl type="text" placeholder="Patient name" inputRef={(value) => this.name = value}/>
                            </FormGroup>
                            <FormGroup controlId="gender">
                                <FormControl type="text" placeholder="Gender" inputRef={(value) => this.gender = value}/>
                            </FormGroup>
                            <FormGroup controlId="dob">
                                <FormControl type="text" placeholder="dob" inputRef={(value) => this.dob = value}/>
                            </FormGroup>
                            <FormGroup controlId="contact">
                                <FormControl type="text" placeholder="Contact" inputRef={(value) => this.contact = value}/>
                            </FormGroup>
                            <FormGroup controlId="submit">
                                <Button className="submitButton" bsStyle="primary" type="button" onClick={this.submitForm}>
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default CreatePatientPage