import React from 'react';
import {
    Router,
    Route,
    Switch
  } from 'react-router-dom';
import HomePage from '../homepage';
import LoginPage from '../loginpage';
import CreatePatientPage from '../createpatientpage';
import NavBar from '../navbar';
import UploadPage from '../uploadpage';
import history from '../../history';
import ChoosePatientPage from '../choosepatientpage';
import MedicalRecordPage from '../medicalrecordpage';

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/(home|new-patient|upload|choose-patient|medical-record)" render={
                        () => (
                            <NavBar>
                                <Switch>
                                    <Route path="/home" component={HomePage}/>
                                    <Route path="/new-patient" component={CreatePatientPage}/>
                                    <Route path="/upload" component={UploadPage} />
                                    <Route path="/choose-patient" component={ChoosePatientPage} />
                                    <Route path="/medical-record" component={MedicalRecordPage} />
                                </Switch>                
                            </NavBar>
                        )
                    }   
                    />
                    
                </Switch>
            </Router>
        );
    }
}

export default Routes;
