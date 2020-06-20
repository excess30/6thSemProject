import React, { useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';
import './index.css';
import axios from 'axios';
import history from '../../history';

class MedicalRecordForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            updated: false
        }

        this.diagnosis = undefined;
        this.symptoms = undefined;
        this.treatment = undefined;

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:5000/api/medical-record/update", {
            record_id: this.props.record_id,
            patient_id: this.props.id,
            diagnosis: this.diagnosis.value,
            treatment: this.treatment.value,
            symptoms: this.symptoms.value,
        }, { headers: { "x-access-token": localStorage.getItem("token") }})
        .then(response => {
            console.log(response);
            this.setState({ updated: true })
        })
        .catch(err => {
            console.log(err);
            alert("Error updating medical record.");
        });        
    }

    render() {
        if ( ! this.state.updated)
            return (
                <div className="vertical-center">
                    <Card className="Panel">
                        <Form className="MedicalRecord" id="recordForm">
                            <Form.Group controlId="formpatient">
                                <Form.Label>Patient Name: {this.props.name}</Form.Label>
                                <br/>
                                <Form.Label>Gender: {this.props.gender}</Form.Label>
                                <br/>
                                <Form.Label>DOB: {this.props.dob}</Form.Label>
                                <br/>
                                <Form.Label>Contact: {this.props.contact}</Form.Label>
                                <br/>
                            </Form.Group>
                            <Form.Group controlId="formDiagnosis">
                                <Form.Label>Diagnosis:  </Form.Label>
                                <Form.Control type="text" placeholder="Enter Diagnosis Data" ref={(ref) => this.diagnosis = ref}/>
                            </Form.Group>
                            <Form.Group controlId="formSymptoms">
                                <Form.Label id="symptomstxt">Symptoms:  </Form.Label>
                                <Form.Control type="text" placeholder="Enter Symptoms Data" ref={(ref) => this.symptoms = ref}/>
                            </Form.Group>
                            <Form.Group controlId="formTreatment">
                                <Form.Label id="treatmenttxt">Treatment:  </Form.Label>
                                <Form.Control type="text" placeholder=" Enter Treatment Data" ref={(ref) => this.treatment = ref}/>
                            </Form.Group>
                            <Form.Group controlId="formSave">
                                <Button variant="secondary" type="Save" onClick={this.handleFormSubmit}>
                                    Save
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            );

        return <this.Popup/>
    }

    Popup(props) {
        const [show, setShow] = useState(true);
      
        const handleClose = () => {
            setShow(false);
            history.push("/home");
        }
      
        return (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Medical Record</Modal.Title>
              </Modal.Header>
              <Modal.Body>Record updated successfully</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        );
    }
}

export default MedicalRecordForm;