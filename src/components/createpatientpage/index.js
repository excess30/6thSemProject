import React from 'react';
import history from '../../history';
import { Card, Form, Button } from 'react-bootstrap';
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
            history.push({
                pathname: "/upload", 
                patient_data: {
                    id: res.data.patient_id,
                    name: this.name.value,
                    gender: this.gender.value,
                    dob: this.dob.value,
                    contact: this.contact.value
                },
                record_id: res.data.record_id
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
                <h1 class="display-3">Create New Patient</h1>
                <div className="vertical-center">
                    <Card className="Panel">
                        <h3>Please enter the patient details: </h3>
                        <br/>
                        <Form horizontal>
                            <Form.Group controlId="name">
                                <Form.Control type="text" placeholder="Patient name" ref={(value) => this.name = value}/>
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Control type="text" placeholder="Gender" ref={(value) => this.gender = value}/>
                            </Form.Group>
                            <Form.Group controlId="dob">
                                <Form.Control type="text" placeholder="dob" ref={(value) => this.dob = value}/>
                            </Form.Group>
                            <Form.Group controlId="contact">
                                <Form.Control type="text" placeholder="Contact" ref={(value) => this.contact = value}/>
                            </Form.Group>
                        </Form>
                        <div className="submit-div">
                            <Button className="submitButton" bsStyle="primary" type="button" onClick={this.submitForm}>
                                Submit
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CreatePatientPage