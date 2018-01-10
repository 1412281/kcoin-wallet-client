import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Link} from "react-router-dom";

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
            const today = new Date();
            const blockTime = new Date(block.timestamp*1000);
            const diffMs = (today - blockTime); // milliseconds between now & Christmas
            const stDays = Math.floor(diffMs / 86400000); // days
            const stHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
            const stMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
            const timeString = stDays > 0 ? stDays + " day(s)" : stHrs > 0 ? stHrs + " hour(s)" : stMins + " min(s)";

            return (<tr>
                <td>{block.height}</td>
                <td>{convertBlockToLink(block.hash)}</td>
                <td>{block.transactions.length}</td>
                <td>{timeString}</td>
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

function convertBlockToLink(st) {
    const toSt = '/block/' + st;
    return (
        <Link to={toSt}>{st}</Link>
    );
}
function convertTransactionToLink(st) {
    const toSt = '/address/' + st;
    return (
        <Link to={toSt}>{st.slice(0,20)}...</Link>
    );
}