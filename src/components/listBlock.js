import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class ListBlock extends Component {
    render() {
        const data = this.props.data;
        // console.log(data);
        const listBlock = data.map((block, index) => {
            //calc value of block
            const transactions = block.transactions;
            let value = 0;
            transactions.forEach(transaction => {
                const outputs = transaction.outputs;
                // console.log(transaction);
                outputs.forEach(output => {
                    value += output.value;
                });
            });
            //link transactions


            return (<tr>
                <td>{index}</td>
                <td>{block.hash}</td>
                <td>{block.transactionsHash}</td>
                <td>{block.timestamp}</td>
                <td>{block.difficulty}</td>
                <td>{block.nonce}</td>
                <td>{value}</td>
            </tr>);
        });
        return (
            <Table responsive striped hover >
                <thead>
                <tr>
                    <th>Height</th>
                    <th>Block Hash</th>
                    <th>Transactions</th>
                    <th>Age</th>
                    <th>Difficulty</th>
                    <th>Nonce</th>
                    <th>Total Output</th>

                </tr>
                </thead>
                <tbody>
                {listBlock}
                </tbody>
            </Table>

        );
    };

}
