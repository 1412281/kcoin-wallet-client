import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";

class DashboardAdmin extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
    }

    handleButtonLoadMore() {
        const {email, date_exp, token,limit, next} = this.props;
        console.log(next)
        console.log('loadmore')
        this.props.fetchNextUsersBalance(email, date_exp, token, limit, next);
    }

    generateUsersTable(data){
        return (
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th  colspan={2} className={"UsersTableHeader"+" col-sm-8"}>
                        {this.props.total_user} User(s)
                    </th>
                    <th className={"UsersTableHeader"}>Address</th>
                    <th className={"BalanceTableHeader"}>#1Balance: {this.props.total_balance}</th>
                    <th className={"BalanceTableHeader"}>#2ABalance: {this.props.total_real_balance}</th>
                </tr>
                </thead>
                <tbody>
                {data.map(function(object, i){
                    return (<tr>
                        <th scope="row">{i+1}</th>
                        <td>{object.email}</td>
                        <td>
                            <a href={'/#'}>{object.address}</a>
                        </td>

                        <td>{object.balance}</td>
                        <td>{object.real_balance}</td>
                    </tr>);
                })
                }
                </tbody>
            </table>
        );
    }
    render() {
        if (this.props.checkHasUserLogin()) {
            return (<Redirect  to={'/'}/>);
        }
        if ( !this.props.checkHasAdminLogin()) {
            return (<Redirect  to={'/admin/login'}/>);
        }
        if (!this.props.fetched) {
            const {email, date_exp, token, limit, cursor} = this.props;
            this.props.fetchUsersBalance(email, date_exp, token, limit, cursor);
        }
        return(
            <div className='dashboard'>
                <div className={"col-sm-2"}>
                </div>
                <div className={"col-sm-6"}>
                    {this.generateUsersTable(this.props.users_balance)}
                    <Button onClick={() => this.handleButtonLoadMore()}>LoadMore</Button>
                </div>
            </div>

        );
    };
}

export default DashboardAdmin;