import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class DashboardAdmin extends Component {

    componentWillMount() {
        this.props.checkHasAdminLogin()
        if (!this.props.hasLogin) {
            return (<Redirect  to={'/admin/login'}/>);
        }
    }

    handleButtonNext() {
        const {id, limit, page} = this.props;
        this.props.fetchUserTransactions(id, limit, page + 1);
    }

    handleButtonPrevious() {
        const {id, limit, page} = this.props;
        const {fetchUserTransactions} = this.props;

        fetchUserTransactions(id, limit, page - 1);

    }
    componentDidMount() {
        const {email, date_exp, token, limit, page} = this.props;
        const {fetchUsersBalance} = this.props;

        fetchUsersBalance(email, date_exp, token, limit, page);
        // fetchUserTransactions(id, limit, page);
    }

    generateUsersTable(){
        return (
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th  colspan={2} className={"UsersTableHeader"+" col-sm-8"}>
                        100 User(s)
                    </th>
                    <th className={"BalanceTableHeader"}>#1Balance: 1000</th>
                    <th className={"BalanceTableHeader"}>#2Balance: 2000</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td>tdlam123@gmail.com</td>
                    <td className={"BalanceTableRow RealBalance"}>150</td>
                    <td className={"BalanceTableRow Balance"}>150</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>tdlam123@gmail.com</td>
                    <td className={"BalanceTableRow RealBalance"}>150</td>
                    <td className={"BalanceTableRow Balance"}>150</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>tdlam123@gmail.com</td>
                    <td className={"BalanceTableRow RealBalance"}>150</td>
                    <td className={"BalanceTableRow Balance"}>150</td>
                </tr>
                </tbody>
            </table>
        );
    }
    render() {
        if (!this.props.hasLogin) {
            return (<Redirect  to={'/admin/login'}/>);
        }
        return(
            <div className='dashboard'>
                <div className={"col-sm-6"}>
                    {this.generateUsersTable()}
                    {/*<Button onClick={() => this.handleButtonPrevious()}>Previous</Button>*/}
                    {/*<Button onClick={() => this.handleButtonNext()}>Next</Button>*/}
                </div>
                <div className={"col-sm-6"}>
                </div>
            </div>

        );
    };
}

export default DashboardAdmin;