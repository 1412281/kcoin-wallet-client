import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Redirect } from 'react-router-dom';
import '../App.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            pwd: '',
            validAddress: null,
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
        if (value.length === 64) {
            this.setState({address: value, validAddress: 'success'});
        } else {
            this.setState({address: value, validAddress: 'error'})
        }


    }

    handleInputPassword(e) {
        let value = e.target.value;
        let passwordValid = value.length >= 6 ? 'success' : 'error';
        this.setState({pwd: value, validPwd: passwordValid});

    }

    handleLoginButtonClick() {
        const {address, pwd} = this.state;
        this.props.handleLoginButton(address, pwd);
    }

    render() {
        if (this.checkHasLogin()) {
            return (<Redirect  to={'/dashboard'}/>);
        }

        this.validForm = 1;
        if (this.state.validAddress === 'success' && this.state.validPwd === 'success') {
            this.validForm = null;
        }
        else {
            this.validForm = 1;
        }

        return (

            <div className="center">
                <form>
                    <FormGroup controlId="formHorizontalId" validationState={this.state.validAddress}>
                        <ControlLabel>Id</ControlLabel>

                        <FormControl value={this.state.adddress}
                                     type="text"
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