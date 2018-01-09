import React, {Component} from 'react';
import {Table,Image,Glyphicon} from 'react-bootstrap';

export default class Transaction extends Component {
    render() {
        const data = this.props.data;
        console.log(data);
        if (this.props.fetching) return (<div><img src={require('./resources/loading.gif')} width="128" height="128"/></div>);
        console.log(data);
        if (data.length === 0) return (<div><h5>You have NOT any outcome transaction</h5></div>);
        const listTransaction = data.data.map((transaction, index) => {
            const alert =  transaction.status === 'pending' ? 'warning':
                            transaction.status === 'processing' ? 'info':
                            transaction.status === 'done' ? 'success' : 'danger';
            return (
                <tr className={alert}>

                <td>{transaction.date}</td>
                <td>{transaction.address_receive}</td>
                <td>-{transaction.coin}</td>
                    <td>{transaction.status}</td>
                    <td>{
                        (transaction.status === 'pending') ? <div onClick={(e) => this.props.handledeleteTransaction(e)}>
                        <p><Glyphicon glyph="glyphicon glyphicon-remove" id={JSON.stringify(transaction)} /></p>
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
