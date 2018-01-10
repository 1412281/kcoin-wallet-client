import React, {Component} from 'react';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';
import axios from 'axios';


export default class Transaction extends Component {

    constructor(props){
        super(props);
        this.state = {
            transaction: {},
            fetched: false,
        }
    }

    componentDidMount() {
        console.log('1111111111111111111')
        const strTransactionLink = '/transaction/' + this.props.match.params.hash;
        const self = this;
        axios.get(strTransactionLink).then(function (res) {
            const transaction = res.data;
            console.log(transaction);
            if (transaction.hasOwnProperty('hash')) {

                self.setState({transaction: transaction, fetched: true});
            }
        })
    }

    render() {
        // const block = this.props.data;
        // console.log(data);
        //calc value of block
        if (this.state.fetched === false) {
            return (<div></div>)
        }

        const outputs = this.state.transaction.outputs;
        let value = 0;
        outputs.forEach(output => {
            value += output.value;
        });


            const listInput = this.state.transaction.inputs.map((input, index) => {
                return (
                    <div>
                        {convertTransactionToLink(input.referencedOutputHash)}#{input.referencedOutputIndex}

                    </div>
                )
            });

            const listOutput = this.state.transaction.outputs.map((output, index) => {
                let st = scriptToLinkAddress(output.lockScript);
                return (
                    <div>
                        #{index}: <b>{output.value}</b> to {st}
                    </div>
                )
            });



        //link transactions

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <h1>Transaction</h1>
                        <Table responsive striped>
                            <thead>
                            <tr>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.transaction.hash}
                            </tbody>

                        </Table>


                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>Hash</th>
                                <th>Inputs</th>
                                <th>Outputs</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td>{convertTransactionToLink(this.state.transaction.hash)}</td>
                                <td>{listInput}</td>
                                <td>{listOutput}</td>

                            </tr>
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


function convertTransactionToLink(st) {
    const toSt = '/transaction/' + st;
    return (
        <Link to={toSt}>{st.slice(0, 20)}...</Link>
    );
}