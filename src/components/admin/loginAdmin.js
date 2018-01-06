import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Redirect } from 'react-router-dom';
import '../../App.css'

class LoginAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            validEmail: null,
            validPwd: null,
            validForm: null,
        }
    }

    checkHasAdminLogin() {
        if (this.props.hasAdminLogin) {
            console.log('has Admin Login');
            return true;
        }
        return false;
    }
    handleInputEmail(e) {
        let value = e.target.value;
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid) {
            this.setState({email: value, validEmail: 'success'});
        } else {
            this.setState({email: value, validEmail: 'error'})
        }

    }

    handleInputPassword(e) {
        let value = e.target.value;
        let passwordValid = value.length >= 6 ? 'success' : 'error';
        this.setState({pwd: value, validPwd: passwordValid});

    }

    handleLoginButtonClick() {
        const {email, pwd} = this.state;
        this.props.handleLoginButton(email, pwd);
    }

    render() {
        if (this.props.checkHasUserLogin())
        {
            return (<Redirect  to={'/'}/>);
        }
        if (this.props.checkHasAdminLogin() || this.props.hasAdminLogin)
        {
            return (<Redirect  to={'/admin/dashboard'}/>);
        }
        if (this.state.validAddress === 'success' && this.state.validPwd === 'success') {
            this.state.validForm = null;
        }
        else {
            this.state.validForm = 1;
        }

        return (

            <div className="center">
                <form>
                    <FormGroup controlId="formHorizontalId" validationState={this.state.validEmail}>
                        <ControlLabel>Admin email</ControlLabel>

                        <FormControl value={this.state.email}
                                     type="text"
                                     onChange={this.handleInputEmail.bind(this)}
                                     onBlur={this.handleInputEmail.bind(this)}

                        /><FormControl.Feedback/>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword" validationState={this.state.validPwd}>
                        <ControlLabel>Password</ControlLabel>

                        <FormControl value={this.state.pwd}
                                     type="Password"
                                     onChange={this.handleInputPassword.bind(this)}
                                     onBlur={this.handleInputPassword.bind(this)}
                        /><FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup>

                        <Button bsStyle="primary" block
                                disabled={!this.state.validForm}
                                onClick={() => this.handleLoginButtonClick()}
                        >Login</Button>
                    </FormGroup>
                </form>
            </div>
        );
    };
}

export default LoginAdmin;