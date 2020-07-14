import React from 'react';
import './index.css'
import UploadIcon from './assets/UploadIcon.svg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import history from '../../history';

class UploadPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            t1: undefined,
            t1ce: undefined,
            t2: undefined,
            flair: undefined
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    onFileChange(file, type) {
        this.setState({ [type]: file });
    }

    uploadFiles(e) {
        e.preventDefault();

        const data = new FormData();
        data.append("patient_id", this.props.location.patient_data.id);
        data.append("t1", this.state.t1);
        data.append("t1ce", this.state.t1ce);
        data.append("t2", this.state.t2);
        data.append("flair", this.state.flair);

        const patient_data = this.props.location.patient_data;
        const record_id = this.props.location.record_id;

        fetch("http://127.0.0.1:5000/api/upload", {
            method: 'POST',
            headers: { "x-access-token": localStorage.getItem("token") },
            body: data
        })
        .then(function(response) {
            return response.blob();
        })
        .then(function(blob) {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'res.nii.gz');
            document.body.appendChild(link);
            link.click();
            link.remove();
            history.push({
                pathname: "/medical-record",
                patient_data: patient_data,
                record_id: record_id
            });
        });
    }

    render() {
        return (
            <div className="UploadScanPage">
                <h1 class="display-3">Upload scans</h1>
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Uploader onChange={this.onFileChange} scanType="flair" ext=".nii.gz"/>
                        </Col>
                        <Col>
                            <Uploader onChange={this.onFileChange} scanType="t1" ext=".nii.gz"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Uploader onChange={this.onFileChange} scanType="t1ce" ext=".nii.gz"/>
                        </Col>
                        <Col>
                            <Uploader onChange={this.onFileChange} scanType="t2" ext=".nii.gz"/>
                        </Col>
                    </Row>
                </Container>
                <br /><br />
                <div className="button-div">
                    <Button className="uploadButton" variant="primary" type="button" onClick={this.uploadFiles}>
                        Upload
                    </Button>
                </div>
            </div>
        );
    }
}

class Uploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined,
            file: undefined
        }
        this.inputElement = undefined;

        this.onChange = this.onChange.bind(this);
    }

    validate(event) {
        const file = event.target.files[0]

        // checking if file exceeds max size
        if (file.size > this.props.maxFileSize) {
            this.setState({ error: {fileName: file.name, message: "File size too large." }, file: undefined });
            return false;
        }

        // checking if the file has the correct extension
        if ( ! RegExp(`(${this.props.ext})$`).test(file.name)) {
            this.setState({ error: {fileName: file.name, message: "Invalid file type." }, file: undefined });
            return false;
        }
        
        // since by this point the validation checks have been passed,
        // clearing any previous errors that might have been present.
        this.setState({ error: undefined, file: file });
        return true;
    }

    onChange(event) {
        if (this.validate(event))
            this.props.onChange(event.target.files[0], this.props.scanType);
        else
            this.props.onChange(undefined, this.props.scanType);
    }

    renderError() {
        const { error } = this.state;

        if ( error !== undefined && Object.keys(error).length !== 0)
            return (
                <div className={'errorMessage'}>
                    {error.fileName}: {error.message}
                </div>
            );
    }

    renderPreview() {
        const fileName = this.state.file?.name;

        if (fileName !== undefined)
            return (
                <div>
                    {fileName}
                </div>
            );
        else 
            return null;
    }

    render() {
        return (
            <div className="fileUploader">
                <div className="fileContainer">
                    <img src={UploadIcon} className="uploadIcon" alt="Upload Icon" />
                    <p>Max file size: 50mb, accepted: {this.props.ext}</p>
                    <div className="errorsContainer">
                        {this.renderError()}
                    </div>
                    <button
                    type="button"
                    className="chooseFileButton"
                    onClick={ () => this.inputElement.click() }
                    >
                        Choose {this.props.scanType} scan
                    </button>
                    <input
                    ref={ (element) => this.inputElement = element }
                    type="file"
                    onChange={ this.onChange }
                    accept=".nii.gz"
                    />
                    { this.renderPreview() }
                </div>
            </div>
        );
    }
}

Uploader.defaultProps = {
    maxFileSize: 52428800,
    scanType: "",
    onChange: () => {},
    ext: "",
}

export default UploadPage;