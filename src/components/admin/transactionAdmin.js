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
                <div>
                    <table class="table">
                        <thead class="thead-default">
                        <tr>
                            <th className={"UsersTableHeader"+" col-sm-8"}>
                                {this.props.total_transaction} Transaction(s)
                            </th>
                            <th className={"danger BalanceTableHeader"}>{this.props.total_status.cancel} Cancel</th>
                            <th className={" BalanceTableHeader"}>{this.props.total_status.pending} Pending</th>
                            <th className={"warning BalanceTableHeader"}>{this.props.total_status.waiting} Waiting</th>
                            <th className={"info BalanceTableHeader"}>{this.props.total_status.processing} Processing</th>
                            <th className={"success BalanceTableHeader"}>{this.props.total_status.done} Done</th>
                        </tr>
                        </thead>
                    </table>
                    <table class="table">
                        <thead class="thead-default">
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
                            const alert =  transaction.status === 'pending' ? '':
                                transaction.status === 'processing' ? 'info':
                                    transaction.status === 'done' ? 'success' :
                                        transaction.status === 'cancel' ? 'danger' :
                                            transaction.status === 'waiting' ? 'warning' : '';
                            return (
                                <tr className={alert}>
                                    <th scope="row">{i+1}</th>
                                    <td>{transaction.date}</td>
                                    <td colspan={3}>{transaction.address_receive}</td>
                                    <td>{transaction.coin}</td>
                                    <td>{transaction.status}</td>
                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>

        );
    }
    render() {
        if (this.props.checkHasUserLogin()) {
            return (<Redirect  to={'/'}/>);
        }
        if ( !this.props.checkHasAdminLogin()) {
            return (<Redirect  to={'/kcoin-wallet-client/admin/login'}/>);
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