import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {
    Link, Redirect
} from 'react-router-dom';

import '../App.css'

export default class NavbarInstance extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.reloadUserLogin()
        this.props.reloadAdminLogin()
    }

    componentDidMount() {

    }

    render() {
        let log;
        const {doLogout} = this.props;

        console.log(this.props.checkHasUserLogin())
        console.log(this.props.checkHasAdminLogin())
        console.log(this.props.hasLogin)
        console.log(this.props.hasAdminLogin)
        if (!(this.props.checkHasUserLogin() || this.props.hasLogin) && !(this.props.checkHasAdminLogin() ||this.props.hasAdminLogin)) {
            log = <NavLogin/>;
        }
        else {
            if (this.props.checkHasUserLogin() || this.props.hasLogin){
                log = <NavLogout doLogout={doLogout} email={this.props.email}/>;
                const {email, date_exp, token} = this.props;
            }   // this.props.fetchDashboard(email, date_exp, token);
            else
                if (this.props.checkHasAdminLogin() || this.props.hasAdminLogin)
                {
                    log = <NavAdminLogout doAdminLogout={this.props.doAdminLogout} admin_email={this.props.admin_email}/>;
                }
            }

        return (
                <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a><Link to="/kcoin-wallet-client/">MY BLOCKCHAIN</Link></a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        
                        </Nav>
                        {log}
                    </Navbar.Collapse>
                </Navbar>
                <hr/>

                </div>

        );
    };
}

class NavLogin extends Component{
    render() {
        return (
            <Nav pullRight>
                <NavItem><Link to="/kcoin-wallet-client/signup">SIGN UP</Link></NavItem>
                <NavItem><Link to="/kcoin-wallet-client/login">LOG IN</Link></NavItem>
                <NavItem><Link to="/kcoin-wallet-client/admin/login">ADMIN LOG IN</Link></NavItem>
            </Nav>

    )
    }
}

class NavLogout extends Component{

    handleButtonLogout() {
        this.props.doLogout();

    }
    render() {
        return (

            <Nav pullRight>
                <NavItem><Link to="/kcoin-wallet-client/createTransaction">CREATE TRANSACTION</Link></NavItem>
                <NavItem><Link to="/kcoin-wallet-client/dashboard">DASHBOARD</  Link></NavItem>
                {/*<NavItem><Link to="/income">INCOME</Link></NavItem>*/}
                <NavItem>{this.props.email}</NavItem>
                <NavItem><a onClick={this.handleButtonLogout.bind(this)}>LOG OUT</a></NavItem>

            </Nav>

    )
    }
}

class NavAdminLogout extends Component{

    handleButtonLogout() {
        this.props.doAdminLogout();
    }

    render() {
        return (

            <Nav pullRight>
                <NavItem><Link to="/kcoin-wallet-client/admin/dashboard">USERS BALANCE</Link></NavItem>
                <NavItem><Link to="/kcoin-wallet-client/admin/transaction">TRANSACTIONS</Link></NavItem>
                <NavItem>{this.props.admin_email}</NavItem>
                <NavItem><a onClick={this.handleButtonLogout.bind(this)}>LOG OUT</a></NavItem>

            </Nav>

        )
    }
}