import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Transaction extends Component {
    render() {
        const data = this.props.data;
        console.log(data);
        if (this.props.fetching) return (<div><h2>Loading...</h2></div>);
        console.log(data);
        if (data.length === 0) return (<div>Empty...</div>);
        const listTransaction = data.data.map((transaction, index) => {
            const alert =  transaction.status === 'pending' ? 'warning':
                            transaction.status === 'processing' ? 'info':
                            transaction.status === 'done' ? 'success' : 'danger';
            return (
                <tr className={alert}>

                <td>{transaction.date}</td>
                <td>{transaction.address_receive}</td>
                <td>{transaction.coin}</td>
                    <td>{transaction.status}</td>
                    <td>{
                        (transaction.status === 'pending') ? <div onClick={(e) => this.props.handledeleteTransaction(e)}>
                        <p><span class="glyphicon glyphicon-remove" id={JSON.stringify(transaction)}></span></p>
                        </div>: ''
                    }</td>
            </tr>);
        });
        return (
            <Table responsive>
                <thead>
                <tr>

                    <th>Date</th>
                    <th>Address receive</th>
                    <th>Coin</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {listTransaction}
                </tbody>
            </Table>

        );
    };

}
