import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class TransactionAdmin extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }

    handleButtonLoadMore() {
        const {email, date_exp, token,limit, next} = this.props;
        this.props.fetchNextAdminTransactions(email, date_exp, token, limit, next);
    }

    generateTransactionsTable(data){
        console.log(data)
        return (
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th colSpan={2} className={"UsersTableHeader"+" col-sm-8"}>
                        {this.props.total_transaction} Transaction(s)
                    </th>
                    <th className={"warning BalanceTableHeader"}>{this.props.total_status.pending} Pending</th>
                    <th className={"info BalanceTableHeader"}>{this.props.total_status.processing} Processing</th>
                    <th className={"success BalanceTableHeader"}>{this.props.total_status.done} Done</th>
                </tr>
                <tr>
                    <th >No.</th>
                    <th >Date</th>
                    <th >Receiver</th>
                    <th className={"BalanceTableHeader"}>KCoin</th>
                    <th className={"BalanceTableHeader"}>Status</th>
                </tr>
                </thead>
                <tbody>
                {data.map(function(transaction, i){
                    const alert =  transaction.status === 'pending' ? 'warning':
                                    transaction.status === 'processing' ? 'info':
                                    transaction.status === 'done' ? 'success' : 'danger';
                    return (
                            <tr className={alert}>
                                <th scope="row">{i+1}</th>
                                <td>{transaction.date}</td>
                                <td >{transaction.address_receive}</td>
                                <td>{transaction.coin}</td>
                                <td>{transaction.status}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
    render() {
        if (this.props.checkHasUserLogin()) {
            return (<Redirect  to={'/'}/>);
        }
        if ( !this.props.checkHasAdminLogin()) {
            return (<Redirect  to={'/admin/login'}/>);
        }
        if (!this.props.fetched) {
            const {email, date_exp, token, limit, cursor} = this.props;
            this.props.fetchAdminTransactions(email, date_exp, token, limit, cursor);
        }
        return(
            <div className='dashboard'>
                <div className={"col-sm-2"}>
                </div>
                <div className={"col-sm-6"}>
                    {this.generateTransactionsTable(this.props.transactions)}
                    <Button onClick={() => this.handleButtonLoadMore()}>LoadMore</Button>
                </div>
            </div>

        );
    };
}

export default TransactionAdmin;