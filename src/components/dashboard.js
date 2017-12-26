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
        const {id, limit, page} = this.props;
        this.props.fetchUserTransactions(id, limit, page + 1);

    }
    handleButtonPrevious() {
        const {id, limit, page} = this.props;
        const {fetchUserTransactions} = this.props;

        fetchUserTransactions(id, limit, page - 1);

    }
    componentDidMount() {
        const {id, date_exp, token, limit, page} = this.props;
        const {fetchDashboard, fetchUserTransactions} = this.props;

        fetchDashboard(id, date_exp, token);
        fetchUserTransactions(id, limit, page);
    }
    render() {
        if (!this.props.hasLogin) {
            return (<Redirect  to={'/login'}/>);
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