import {connect} from 'react-redux'
import Dashboard from '../components/dashboard'
import {checkHasLogin} from "../actions/userActions";
import {
    fetchUserTransactions,
    fetchDashboard, fetchUserTransactionsPrevious,
    deleteTransaction, fetchUserIncome

} from '../actions/dashboardActions'

const mapStateToProps = (state) => {
    return {
        hasLogin: state.user.hasLogin,
        email: state.user.email,
        token: state.user.token,
        date_exp: state.user.date_exp,
        balance: state.dashboard.balance,
        limit: state.dashboard.limit,
        next: state.dashboard.next,
        previous: state.dashboard.previous,
        transactions: state.dashboard.transactions,
        fetching:  state.dashboard.fetching,

        transactionsIncome: state.income.transactions

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasUserLogin: () => (checkHasLogin()),
        fetchDashboard: (email, date_exp, token) => dispatch(fetchDashboard(email, date_exp, token)),
        fetchUserTransactions: (email, limit, cursor) => dispatch(fetchUserTransactions(email, limit, cursor)),
        fetchUserTransactionsNext: (email, limit, next) => dispatch(fetchUserTransactions(email, limit, next)),
        fetchUserTransactionsPrevious: (email, limit, previous) => dispatch(fetchUserTransactionsPrevious(email, limit, previous)),
        deleteTransaction: (email, date_exp, token, transaction) => dispatch(deleteTransaction(email, date_exp, token, transaction)),
        fetchUserIncome: (email, date_exp, token) => dispatch(fetchUserIncome(email, date_exp, token)),

    }
};



const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;

