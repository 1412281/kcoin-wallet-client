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
import LoginAdminContainer from './containers/loginAdminContainer';
import DashboardContainer from './containers/dashboardContainer';
import AdminDashboardContainer from './containers/admindashboardContainer';

import axios from 'axios';
import Block from "./components/block";
import Transaction from "./components/transaction";

axios.defaults.baseURL = 'http://localhost:4000';
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
                    <Route path="/admin/login" render={() => <LoginAdminContainer/>}/>
                    <Route path="/admin/dashboard" render={() => <AdminDashboardContainer/>}/>
                    <Route path="/dashboard" render={() => <DashboardContainer/>}/>
                    <Route path="/createTransaction" render={() => <CreateTransactionContainer/>}/>
                    <Route path="/block" render={() => <Block/>}/>
                    <Route path="/transaction" render={() => <Transaction/>}/>

                </Switch>

            </div>


        );
    }
}


export default App;
