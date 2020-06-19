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

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/(home|new-patient|upload)" render={
                        () => (
                            <NavBar>
                                <Switch>
                                    <Route path="/home" component={HomePage}/>
                                    <Route path="/new-patient" component={CreatePatientPage}/>
                                    <Route path="/upload" component={UploadPage} />
                                </Switch>
                            </NavBar>
                        )
                    }   
                    />
                    
                </Switch>    
                </div>
            </Router>
        );
    }
}

export default Routes;
