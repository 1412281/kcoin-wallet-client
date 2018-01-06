import {connect} from 'react-redux'
import Dashboard from '../components/dashboard'

import {
    fetchUserTransactions,
    fetchDashboard, fetchUserTransactionsPrevious,

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

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDashboard: (email, date_exp, token) => dispatch(fetchDashboard(email, date_exp, token)),
        fetchUserTransactions: (email, limit, cursor) => dispatch(fetchUserTransactions(email, limit, cursor)),
        fetchUserTransactionsNext: (email, limit, next) => dispatch(fetchUserTransactions(email, limit, next)),
        fetchUserTransactionsPrevious: (email, limit, previous) => dispatch(fetchUserTransactionsPrevious(email, limit, previous)),

    }
};



const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;

