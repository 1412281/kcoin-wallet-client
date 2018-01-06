import React, {Component} from 'react';
import Transaction from './listTransaction';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class Dashboard extends Component {


    componentWillMount() {
        if (!this.props.hasLogin) {
            return (<Redirect  to={'/login'}/>);
        }

    }


    handleButtonNext() {
        const {email, limit, next} = this.props;
        console.log(next);
        this.props.fetchUserTransactionsNext(email, limit, next);

    }
    handleButtonPrevious() {
        const {email, limit, previous} = this.props;
        this.props.fetchUserTransactionsPrevious(email, limit, previous.pop());

    }
    componentDidMount() {
        const {email, date_exp, token, limit} = this.props;
        this.props.fetchDashboard(email, date_exp, token);
        this.props.fetchUserTransactions(email, limit, {});
    }
    render() {
        if (!this.props.hasLogin) {
            return (<Redirect  to={'/login'}/>);
        }
        const fetching = this.props.fetching;
        let transactions = this.props.transactions;
        if (fetching === 'true') { transactions = []}
        return(
            <div className='dashboard'>
                <h2>YOUR BALANCES:${this.props.balance}</h2>

                <Transaction data={transactions}/>

                <Button onClick={() => this.handleButtonPrevious()}>Previous</Button>
                <Button onClick={() => this.handleButtonNext()}>Next</Button>
            </div>

        );
    };
}

export default Dashboard;