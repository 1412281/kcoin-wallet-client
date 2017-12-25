import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import '../App.css';
import {Redirect } from 'react-router-dom';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            repwd: '',
            validEmail: null,
            validPwd: null,
            validRePwd: null,
            validForm: 1,
        }
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

    handleInputRePassword(e) {
        let value = e.target.value;
        if (value === this.state.pwd && this.state.validPwd === 'success') {
            this.setState({repwd: value, validRePwd: 'success'});

        }
        else {
            this.setState({repwd: value, validRePwd: 'error'});
        }

    }

    handleSignUpButton() {
        const {email, pwd} = this.state;
        this.props.handleSignUp(email, pwd);
    }

    render() {
        console.log(this.props);
        if (this.props.doneSignUp) {

            return (<Redirect to={{
                pathname: '/login',
            }}/>);
        }

        this.validForm = 1;
        if (this.state.validEmail === 'success' && this.state.validPwd === 'success' && this.state.validRePwd === 'success') {
            this.validForm = null;
        }
        else {
            this.validForm = 1;
        }

        return (
            <div className="center">
                <form>
                    <FormGroup controlId="formHorizontalEmail" validationState={this.state.validEmail}>
                        <ControlLabel>Email</ControlLabel>

                        <FormControl value={this.state.email}
                                     type="email"
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

                    <FormGroup controlId="formHorizontalRePassword" validationState={this.state.validRePwd}>
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl value={this.state.repwd}
                                     type="Password"
                                     onChange={this.handleInputRePassword.bind(this)}
                                     onBlur={this.handleInputRePassword.bind(this)}
                        /><FormControl.Feedback/>

                    </FormGroup>

                    <FormGroup>

                        <Button bsStyle="primary" block
                                disabled={this.validForm}
                                onClick={this.handleSignUpButton.bind(this)}
                        >Sign Up</Button>
                    </FormGroup>
                </form>
            </div>
        );
    };
}

export default SignUp;