import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Transaction extends Component {
    render() {
        const data = this.props.data;
        if (data.length === 0) return (<div></div>);
        console.log(data);
        const listTransaction = data.data.map((transaction, index) => {
            return (<tr>
                <td>{transaction.date}</td>
                <td>{transaction.address_receive}</td>
                <td>{transaction.coin}</td>
            </tr>);
        });
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Address receive</th>
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
