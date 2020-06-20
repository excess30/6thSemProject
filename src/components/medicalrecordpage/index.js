import React, { Component } from 'react';
import MedicalRecordForm from './MedicalRecordForm';
import './index.css';

class MedicalRecordpage extends Component {
    render() {
        return (
            <div className="MedicalRecordpage">
                <MedicalRecordForm {...this.props.location.patient_data} record_id={this.props.location.record_id}/>
            </div>
        );
    }
}

export default MedicalRecordpage;