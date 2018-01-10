import React, {Component} from 'react';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';
import axios from 'axios';

export default class Block extends Component {
    constructor(props){
        super(props);
        this.state = {
            block: {},
            fetched: false,
        }
    }


    componentDidMount() {
        const strBlockLink = '/block/' + this.props.match.params.hash;
        const self = this;
        axios.get(strBlockLink).then(function (res) {
            const block = res.data;
            console.log(block);
            if (block.hasOwnProperty('hash')) {
                self.setState({block: block, fetched: true});
            }
        })
    }

    render() {
        // const block = this.props.data;
        // console.log(data);
        if (!this.state.fetched) return (<div></div>);
        console.log(this.state.block);
        const blockHash = convertBlockToLink(this.state.block.hash);

        //calc value of block
        const transactions = this.state.block.transactions;
        let value = 0;
        transactions.forEach(transaction => {
            const outputs = transaction.outputs;
            // console.log(transaction);
            outputs.forEach(output => {
                value += output.value;
            });
        });

        const summary = (
            <tbody>
            <tr>
                <td>Previous Block</td>
                <td>{convertBlockToLink(this.state.block.previousBlockHash)}</td>
            </tr>
            <tr>
                <td>Number of Transactions</td>
                <td>{this.state.block.transactions.length}</td>
            </tr>
            <tr>
                <td>Timestamp</td>
                <td>{new Date(this.state.block.timestamp*1000).toISOString()}</td>
            </tr>
            <tr>
                <td>Difficulty</td>
                <td>{this.state.block.difficulty}</td>
            </tr>
            <tr>
                <td>Nonce</td>
                <td>{this.state.block.nonce}</td>
            </tr>
            <tr>
                <td>Output Total</td>
                <td>{value}</td>
            </tr>
            </tbody>
        );
        const listTransactions = this.state.block.transactions.map((transaction, index) => {

            const listInput = transaction.inputs.map((input, index) => {
                return (
                    <div>
                        {convertTransactionToLink(input.referencedOutputHash)}#{input.referencedOutputIndex}

                    </div>
                )
            });

            const listOutput = transaction.outputs.map((output, index) => {
                let st = scriptToLinkAddress(output.lockScript);
                return (
                    <div>
                        #{index}: <b>{output.value}</b> to {st}
                    </div>
                )
            });

            return (

                <tr>
                    <td>{convertTransactionToLink(transaction.hash)}</td>
                    <td>{listInput}</td>
                    <td>{listOutput}</td>

                </tr>
            )
        });


        //link transactions

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <h1>Block</h1>
                        <Table responsive striped>
                            <thead>
                            <tr>
                            </tr>
                            </thead>
                            <tbody>
                            {blockHash}
                            </tbody>

                        </Table>

                        <h1>Summary</h1>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            {summary}
                        </Table>

                        <h1>Transactions</h1>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>Hash</th>
                                <th>Inputs</th>
                                <th>Outputs</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listTransactions}
                            </tbody>
                        </Table>

                    </Col>

                </Row>
            </Grid>
        );
    };

}

function scriptToLinkAddress(sc) {
    const list = sc.split(' ');
    // const toSt = '/address/' + list[list.length - 1]
    // return (
    //     <Link to={toSt}>{list[list.length - 1].slice(0, 20)}...</Link>
    // );
    return (
        <span>{list[list.length - 1].slice(0, 20)}...</span>
    );
}

function convertBlockToLink(st) {
    const toSt = '/kcoin-wallet-client/block/' + st;
    return (
        <Link to={toSt}>{st}</Link>
    );
}

function convertTransactionToLink(st) {
    const toSt = '/kcoin-wallet-client/transaction/' + st;
    return (
        <Link to={toSt}>{st.slice(0,20)}...</Link>
    );
}