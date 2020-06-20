import React from 'react';
import { ListGroup } from 'react-bootstrap';
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
            this.setState({ patient_data: response.data.sort() });
        })
        .catch(err => {
            console.log(err);
            alert("Error occurred while fetching patient info.");
        });
    }

    onClick(event, value) {
        event.preventDefault();

        history.push({
            pathname: "/upload", 
            patient_id: value.id   
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
                items.push(
                    <ListGroup.Item key={index} action onClick={(event) => this.onClick(event, value)}>
                        {value.name}
                    </ListGroup.Item>
                );
            }
            body = <ListGroup>{items}</ListGroup>
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
