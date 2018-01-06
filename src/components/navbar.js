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
    }

    render() {
        let log;
        const {doLogout} = this.props;
        this.props.reloadUserLogin()
        this.props.reloadAdminLogin()
        console.log(this.props.checkHasUserLogin())
        console.log(this.props.checkHasAdminLogin())
        console.log(this.props.hasLogin)
        console.log(this.props.hasAdminLogin)
        if (!(this.props.checkHasUserLogin() || this.props.hasLogin) && !(this.props.checkHasAdminLogin() ||this.props.hasAdminLogin)) {
            log = <NavLogin/>;
        }
        else {
            if (this.props.checkHasUserLogin() || this.props.hasLogin){
                log = <NavLogout doLogout={doLogout}/>;
                const {email, date_exp, token} = this.props;
            }   // this.props.fetchDashboard(email, date_exp, token);
            else
                if (this.props.checkHasAdminLogin() || this.props.hasAdminLogin)
                {
                    log = <NavAdminLogout doAdminLogout={this.props.doAdminLogout}/>;
                }
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
        return (<Redirect  to={'/admin/login'}/>);
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