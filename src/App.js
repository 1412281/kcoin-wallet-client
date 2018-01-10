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
import LoginAdminContainer from './containers/admin/loginAdminContainer';
import DashboardContainer from './containers/dashboardContainer';
import IncomeContainer from './containers/incomeContainer';
import AdminDashboardContainer from './containers/admin/admindashboardContainer';
import AdminTransactionContainer from './containers/admin/adminTransactionContainer';

import axios from 'axios';
import Block from "./components/block";
import Transaction from "./components/transaction";

axios.defaults.baseURL = 'https://kcoin-wallet-server.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4000';
class App extends Component {

    componentWillMount() {
        // this.getLoginData();
    }


    render() {
        const self = this;
        return (
            <div>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/kcoin-wallet-client/" component={HomeContainer}/>
                    <Route path="/kcoin-wallet-client/signup" component={SignUpContainer}/>
                    <Route path="/kcoin-wallet-client/login" render={() => <LoginContainer/>}/>
                    <Route path="/kcoin-wallet-client/dashboard" render={() => <DashboardContainer/>}/>
                    <Route path="/kcoin-wallet-client/income" render={() => <IncomeContainer/>}/>
                    <Route path="/kcoin-wallet-client/createTransaction/" render={() => <CreateTransactionContainer/>}/>
                    <Route path="/kcoin-wallet-client/createTransaction/:address_receive" render={() => <CreateTransactionContainer/>}/>
                    <Route path="/kcoin-wallet-client/createTransaction/:address_receive/:coin" render={() => <CreateTransactionContainer/>}/>

                    <Route path="/kcoin-wallet-client/block/:hash" component={Block}/>
                    <Route path="/kcoin-wallet-client/transaction/:hash" component={Transaction}/>
                    <Route path="/kcoin-wallet-client/admin/login" render={() => <LoginAdminContainer/>}/>
                    <Route path="/kcoin-wallet-client/admin/dashboard" render={() => <AdminDashboardContainer/>}/>
                    <Route path="/kcoin-wallet-client/admin/transaction" render={() => <AdminTransactionContainer/>}/>

                </Switch>

            </div>


        );
    }
}


export default App;
