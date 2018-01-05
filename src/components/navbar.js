import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {
    Link,
} from 'react-router-dom';

import '../App.css'

export default class NavbarInstance extends Component {

    componentWillMount() {
        this.props.checkHasLogin();
    }

    render() {
        let log;
        const {doLogout} = this.props;
        if (!this.props.hasLogin) {
            log = <NavLogin/>;
        }
        else {
            log = <NavLogout doLogout={doLogout}/>;
            const {email, date_exp, token} = this.props;
            this.props.fetchDashboard(email, date_exp, token);
        }

        if (!this.props.hasAdminLogin) {
            log = <NavLogin/>;
        }
        else {
            log = <NavAdminLogout doAdminLogout={this.props.doAdminLogout}/>;
        }

        return (
                <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a><Link to="/">MY BLOCKCHAIN</Link></a>
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
                <NavItem><Link to="/signup">SIGN UP</Link></NavItem>
                <NavItem><Link to="/login">LOG IN</Link></NavItem>
                <NavItem><Link to="/admin/login">ADMIN LOG IN</Link></NavItem>
            </Nav>

    )
    }
}

class NavLogout extends Component{

    handleButtonLogout() {
        this.props.doLogout();
    }
    render() {
        // console.log(this.props);

        return (

            <Nav pullRight>
                <NavItem><Link to="/createTransaction">CREATE TRANSACTION</Link></NavItem>
                <NavItem><Link to="/dashboard">DASHBOARD</Link></NavItem>
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
                {/*<NavItem><Link to="/dashboard">DASHBOARD</Link></NavItem>*/}
                <NavItem><a onClick={this.handleButtonLogout.bind(this)}>LOG OUT</a></NavItem>

            </Nav>

        )
    }
}