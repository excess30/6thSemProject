import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './index.css'

class ChoosePatientPage extends React.Component {
    render() {
        return (
            <div className="ChoosePatientPage">
                <h1>Choose patient page</h1>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default ChoosePatientPage;
