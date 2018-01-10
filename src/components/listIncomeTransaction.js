import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class IncomeTransaction extends Component {
    render() {
        const data = this.props.data;
        if (this.props.fetching) return (<div><img src={require('./resources/loading.gif')} width="128" height="128"/></div>);

        if (data === undefined || data.length === 0) return (<div><h5>You have NOT any income transaction</h5></div>);
        const listTransaction = data.map((transaction, index) => {
            return (
                <tr className={alert}>

                <td>{transaction.date}</td>
                <td>{transaction.address_send}</td>
                <td>+{transaction.coin}</td>
            </tr>);
        });
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Address Send</th>
                    <th>Coin</th>
                </tr>
                </thead>
                <tbody>
                {listTransaction}
                </tbody>
            </Table>

        );
    };

}
