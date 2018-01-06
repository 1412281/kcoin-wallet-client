import React, {Component} from 'react';
import Transaction from './listTransaction';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class Dashboard extends Component {


    componentWillMount() {

    }


    handleButtonNext() {
        const {email, limit, page} = this.props;
        this.props.fetchUserTransactions(email, limit, page + 1);

    }
    handleButtonPrevious() {
        const {email, limit, page} = this.props;
        this.props.fetchUserTransactions(email, limit, page - 1);

    }
    componentDidMount() {
        const {email, date_exp, token, limit, page} = this.props;
        this.props.fetchDashboard(email, date_exp, token);
        // this.props.fetchUserTransactions(email, limit, page);
    }
    render() {
        if (!(this.props.hasLogin || this.props.checkHasUserLogin())) {
            return (<Redirect  to={'/'}/>);
        }
        return(
            <div className='dashboard'>
                <h2>YOUR BALANCES:${this.props.balance}</h2>
                <Transaction data={this.props.transactions}/>
                <Button onClick={() => this.handleButtonPrevious()}>Previous</Button>
                <Button onClick={() => this.handleButtonNext()}>Next</Button>
            </div>

        );
    };
}

export default Dashboard;