import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Transaction extends Component {
    render() {
        const data = this.props.data;
        // console.log(data);
        const listTransaction = data.map((transaction, index) => {
            return (<tr>
                <td>{transaction.id}</td>
                <td>{transaction.wallet_send}</td>
                <td>{transaction.wallet_receive}</td>
                <td>{transaction.coin}</td>
                <td>{transaction.date}</td>
            </tr>);
        });
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Wallet Send</th>
                    <th>Wallet Receive</th>
                    <th>Coin</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {listTransaction}
                </tbody>
            </Table>

        );
    };

}
