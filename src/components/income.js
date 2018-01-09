import React, {Component} from 'react';
import IncomeTransaction from './listIncomeTransaction';
import {Redirect} from "react-router-dom";

class Income extends Component {


    componentWillMount() {

    }

    componentDidMount() {
        const {email, date_exp, token} = this.props;
        this.props.fetchUserIncome(email, date_exp, token);
    }
    render() {
        if (!(this.props.hasLogin || this.props.checkHasUserLogin())) {
            return (<Redirect  to={'/'}/>);
        }
        const fetching = this.props.fetching;
        let transactions = this.props.transactions;
        return(
            <div className='dashboard'>
                <IncomeTransaction data={transactions} fetching={fetching} />
            </div>

        );
    };
}

export default Income;