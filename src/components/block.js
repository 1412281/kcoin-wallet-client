import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Block extends Component {
    render() {
        const data = this.props.data;
        // console.log(data);
        const listBlock = data.map((block, index) => {
            return (<tr>
                <td>{index}</td>
                <td>{block.hash}</td>
                <td>{block.transactions}</td>
                <td>{block.timestamp}</td>
                <td>{block.difficulty}</td>
                <td>{block.nonce}</td>
                <td>{block.outputs}</td>
            </tr>);
        });
        return (
            <Table responsive>
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
