import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import HomePage from '../homepage';
import LoginPage from '../loginpage';
import CreatePatientPage from '../createpatientpage';
import NavBar from '../navbar';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/(home|new-patient)" render={
                        () => (
                            <NavBar>
                                <Switch>
                                    <Route path="/home" component={HomePage}/>
                                    <Route path="/new-patient" component={CreatePatientPage}/>
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
