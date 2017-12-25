import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Redirect } from 'react-router-dom';


export default class CreateTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet_receive: '',
            coin: '',
            validCoin: null,
            validWallet: null,
        }
    }

    componentWillMount() {
        if (!this.props.wallet_send) {
            return (<Redirect  to={'/login'}/>);
        }
    }

    handleInputWallet(e) {
        const self = this;
        let value = e.target.value;
        // console.log(this.props.wallet_send);
        if (value.toString() === this.props.wallet_send) {
            // console.log('111');
            self.setState({wallet_receive: value, validWallet: 'warningSelf'});
        }
        else if (value.length === 40) {

            this.props.checkWalletAvailable(value).then(function (result) {
                console.log(result);
                if (result.data) {
                    self.setState({wallet_receive: value, validWallet: 'success'});
                }
                else {
                    self.setState({wallet_receive: value, validWallet: 'warning'});
                }
            });
        } else {
            self.setState({wallet_receive: value, validWallet: 'error'})
        }


    }

    handleInputCoin(e) {
        let value = e.target.value;
        if (value > 0) {
            if (this.props.balance >= value) {
                this.setState({coin: value, validCoin: 'success'});
            }
            else {
                this.setState({coin: value, validCoin: 'warning'});
            }
        } else {
            this.setState({coin: value, validCoin: 'error'})
        }

    }

    handleButtonSend(e) {
        const {wallet_send} = this.props;
        const {coin, wallet_receive} = this.state;
        this.props.createTransaction(coin, wallet_send, wallet_receive);

    }

    render() {
        if (!this.props.wallet_send) {
            return (<Redirect  to={'/login'}/>);
        }
        if (this.props.doneSend) {
            return (<Redirect to={{
                pathname: '/dashboard',
            }}/>);
        }
        console.log(this.props);
        let helpblockID;
        let helpblockCoin;
        switch (this.state.validWallet) {
            case 'success':
                helpblockID = 'This ID is Available';
                break;
            case 'warning':
                helpblockID = 'This ID is NOT Existing';
                break;
            case 'warningSelf':
                helpblockID = 'You can Not send your self';
                break;
            default:
                helpblockID = 'ID must have 40 characters';
        }

        switch (this.state.validCoin) {
            case 'success':
                helpblockCoin = 'Input Coin is available, Click SEND to complete Transaction';
                break;
            case 'warning':
                helpblockCoin = "You don't enough this coins";
                break;
            default:
                helpblockCoin = 'Coin must have greater than 0';
        }

        console.log(helpblockID);
        console.log(helpblockCoin);

        this.validForm = 1;
        if (this.state.validCoin === 'success' && this.state.validWallet === 'success') {
            this.validForm = null;
        }
        else {
            this.validForm = 1;
        }
        return (
            <div className="center">
                <form>
                    <FormGroup controlId="formHorizontalID" validationState={this.state.validWallet}>
                        <ControlLabel>Wallet receive</ControlLabel>

                        <FormControl value={this.state.wallet_receive}
                                     type="text"
                                     onChange={this.handleInputWallet.bind(this)}
                                     onBlur={this.handleInputWallet.bind(this)}

                        />
                        <FormControl.Feedback/>
                        <HelpBlock>{helpblockID}</HelpBlock>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword" validationState={this.state.validCoin}>
                        <ControlLabel>Coin: (min: 1, max: {this.props.balance})</ControlLabel>

                        <FormControl value={this.state.coin}
                                     type="number"
                                     onChange={this.handleInputCoin.bind(this)}
                                     onBlur={this.handleInputCoin.bind(this)}
                        /><FormControl.Feedback/>
                        <HelpBlock>{helpblockCoin}</HelpBlock>
                    </FormGroup>


                    <FormGroup>

                        <Button bsStyle="primary" block
                                disabled={this.validForm}
                                onClick={this.handleButtonSend.bind(this)}
                        >Send</Button>
                    </FormGroup>
                </form>
            </div>


        );
    };
}


