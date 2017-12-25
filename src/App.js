import React, {Component} from 'react';
import './App.css';
import {
    Switch,
    Route
} from 'react-router-dom';

import NavbarContainer from './containers/navbarContainer';
import CreateTransactionContainer from './containers/createTransactionContainer';
import HomeContainer from './containers/homeContainer';
import SignUpContainer from './containers/signupContainer';
import LoginContainer from './containers/loginContainer';
import DashboardContainer from './containers/dashboardContainer';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';


class App extends Component {

    componentWillMount() {
        // this.getLoginData();
    }


    render() {

        return (
            <div>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/signup" component={SignUpContainer}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                    <Route path="/dashboard" render={() => <DashboardContainer/>}/>
                    <Route path="/createTransaction" render={() => <CreateTransactionContainer/>}/>

                </Switch>

            </div>


        );
    }
}


export default App;
