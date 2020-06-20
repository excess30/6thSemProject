import React from 'react';
import { ListGroup, Accordion, Card, Button } from 'react-bootstrap';
import './index.css'
import axios from 'axios';
import history from '../../history';

class ChoosePatientPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            patient_data: undefined
        }
    } 

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/api/doctor/patients", { 
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log(response.data);
            this.setState({ patient_data: response.data.sort() });
        })
        .catch(err => {
            console.log(err);
            alert("Error occurred while fetching patient info.");
        });
    }

    onClick(event, patient_data, record_id) {
        event.preventDefault();

        history.push({
            pathname: "/upload", 
            patient_data: {
                id: patient_data.id,
                name: patient_data.name,
                gender: patient_data.gender,
                dob: patient_data.dob,
                contact: patient_data.contact
            },
            record_id: record_id
        });
    }
    
    render() {
        let body = null;

        if (this.state.patient_data === undefined) {
            body = <h3>Loading...</h3>;
        }
        else {
            const items = [];
            for (const [index, value] of this.state.patient_data.entries()) {
                
                // creating list of records
                let record_items = [];
                for (const [index, record_id] of value.records.entries()) {
                    record_items.push(
                        <ListGroup.Item key={`${record_id}:${index}`} action onClick={(event) => this.onClick(event, value, record_id)}>
                            {`record ${record_id}`}
                        </ListGroup.Item>
                    )
                }
                items.push(
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text" eventKey={index}>
                                {value.name}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index}>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    {record_items}
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>     
                );
            }
            body = <Accordion> {items} </Accordion>
        }
        
        return (
            <div className="ChoosePatientPage">
                <h1>Choose Patient</h1>
                <br/>
                {body}
            </div>
        );
    }
}

export default ChoosePatientPage;
