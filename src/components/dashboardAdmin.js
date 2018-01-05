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
        this.props.fetchUsersBalance(email, date_exp, token, limit, page);
    }

    generateUsersTable(data){
        let totalBalance = 0, totalrealBalance = 0;
        data.map(function (object, i){
            if (object.balance)
            totalBalance += object.balance
            if (object.balance)
            totalrealBalance += object.real_balance
        })
        return (
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th  colspan={2} className={"UsersTableHeader"+" col-sm-8"}>
                        {data.length} User(s)
                    </th>
                    <th className={"BalanceTableHeader"}>#1Balance: {totalBalance}</th>
                    <th className={"BalanceTableHeader"}>#2Balance: {totalrealBalance}</th>
                </tr>
                </thead>
                <tbody>
                {data.map(function(object, i){
                    return (<tr>
                        <th scope="row">{i+1}</th>
                        <td>{object.email}</td>
                        <td>{object.balance}</td>
                        <td>{object.balance}</td>
                    </tr>);
                })
                }
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
                    {this.generateUsersTable(this.props.users_balance)}
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