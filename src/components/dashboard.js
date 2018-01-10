import React, {Component} from 'react';
import Transaction from './listTransaction';
import {Button, Grid, Row, Col,Pager, Glyphicon, Well} from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import IncomeTransaction from './listIncomeTransaction';

class Dashboard extends Component {


    componentWillMount() {

    }


    handleButtonNext() {
        const {email, limit, next} = this.props;
        console.log(next);
        this.props.fetchUserTransactionsNext(email, limit, next);

    }
    handleButtonPrevious() {
        const {email, limit, previous} = this.props;
        this.props.fetchUserTransactionsPrevious(email, limit, previous[previous.length - 1]);

    }
    componentDidMount() {
        const {email, date_exp, token, limit} = this.props;
        this.props.fetchDashboard(email, date_exp, token);
        this.props.fetchUserTransactions(email, limit, {});
        this.props.fetchUserIncome(email, date_exp, token);
    }
    handleDeleteTransaction(e){
        let transaction = JSON.parse(e.target.id);
        const {email, date_exp, token} = this.props;
        this.props.deleteTransaction(email, date_exp, token, transaction)
    }
    render() {
        if (!(this.props.hasLogin || this.props.checkHasUserLogin())) {
            return (<Redirect  to={'/kcoin-wallet-client'}/>);
        }
        const fetching = this.props.fetching;
        const fetchingIncome = this.props.fetchingIncome;
        let transactions = this.props.transactions;
        let transactionsIncome = this.props.transactionsIncome;
        return(

            <Grid>
                <Row className="show-grid">
                    <Col xs={10} md={10}>

                        <div className='dashboard'>
                            <Well>
                            <h2>Balance: {this.props.balance} <Glyphicon glyph="glyphicon glyphicon-grain"/></h2>
                            </Well>
                            <h2>Outcome Transaction</h2>
                            <Well>
                            <Transaction data={transactions} fetching={fetching} handledeleteTransaction={(e) => this.handleDeleteTransaction(e)}/>
                            <Pager>
                                <Pager.Item onClick={() => this.handleButtonPrevious()}>
                                    &larr; Previous Page
                                </Pager.Item>
                                <Pager.Item onClick={() => this.handleButtonNext()}>
                                    Next Page &rarr;
                                </Pager.Item>
                            </Pager>
                            {/*<Button bsStyle="link" >Previous</Button>*/}
                            {/*<Button bsStyle="link" >Next</Button>*/}
                            </Well>
                            <h2>Income Transaction</h2>
                            <Well>
                                <IncomeTransaction data={transactionsIncome} fetching={fetchingIncome} />
                            </Well>
                        </div>
                    </Col>
                </Row>
            </Grid>


        );
    };
}

export default Dashboard;