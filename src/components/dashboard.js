import React, {Component} from 'react';
import Transaction from './listTransaction';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class Dashboard extends Component {


    componentWillMount() {

    }


    handleButtonNext() {
        const {email, limit, next} = this.props;
        console.log(next);
        this.props.fetchUserTransactionsNext(email, limit, next);

    }
    handleButtonPrevious() {
        const {email, limit, previous} = this.props;
        this.props.fetchUserTransactionsPrevious(email, limit, previous[previous.length - 1]);

    }
    componentDidMount() {
        const {email, date_exp, token, limit} = this.props;
        this.props.fetchDashboard(email, date_exp, token);
        this.props.fetchUserTransactions(email, limit, {});
    }
    handleDeleteTransaction(e){
        var transaction = JSON.parse(e.target.id)
        const {email, date_exp, token} = this.props;
        this.props.deleteTransaction(email, date_exp, token, transaction)
    }
    render() {
        if (!(this.props.hasLogin || this.props.checkHasUserLogin())) {
            return (<Redirect  to={'/'}/>);
        }
        const fetching = this.props.fetching;
        let transactions = this.props.transactions;
        return(
            <div className='dashboard'>
                <h2>YOUR BALANCES:${this.props.balance}</h2>

                <Transaction data={transactions} fetching={fetching} handledeleteTransaction={(e) => this.handleDeleteTransaction(e)}/>

                <Button onClick={() => this.handleButtonPrevious()}>Previous</Button>
                <Button onClick={() => this.handleButtonNext()}>Next</Button>
            </div>

        );
    };
}

export default Dashboard;