import React from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './index.css'

class CreatePatientPage extends React.Component {
    render() {
        return (
            <div className="patient-form">
                <h1>Create New Patient</h1>
                <div className="vertical-center">
                    <h3>Please enter the patient details: </h3>
                    <Panel className="Panel">
                        <Form horizontal>
                            <FormGroup controlId="name">
                                <FormControl type="text" placeholder="Patient name" />
                            </FormGroup>
                            <FormGroup controlId="gender">
                                <FormControl type="text" placeholder="Gender" />
                            </FormGroup>
                            <FormGroup controlId="dob">
                                <FormControl type="text" placeholder="dob" />
                            </FormGroup>
                            <FormGroup controlId="contact">
                                <FormControl type="text" placeholder="Contact" />
                            </FormGroup>
                            <FormGroup controlId="submit">
                                <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
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