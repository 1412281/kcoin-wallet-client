import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Redirect } from 'react-router-dom';
import '../App.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            validEmail: null,
            validPwd: null,
            validForm: 1,
        }
    }

    checkHasLogin() {
        // console.log(this.props);
        if (this.props.hasLogin) {
            console.log('has Login');
            return true;
        }
        return false;
    }
    handleInputId(e) {
        let value = e.target.value;
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid){
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
        if (this.checkHasLogin()) {
            return (<Redirect  to={'/dashboard'}/>);
        }

        this.validForm = 1;
        if (this.state.validEmail === 'success' && this.state.validPwd === 'success') {
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

                        <FormControl value={this.state.adddress}
                                     type="Email"
                                     onChange={this.handleInputId.bind(this)}
                                     onBlur={this.handleInputId.bind(this)}

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
                                disabled={this.validForm}
                                onClick={() => this.handleLoginButtonClick()}
                        >Login</Button>
                    </FormGroup>
                </form>
            </div>
        );
    };
}

export default Login;