import {connect} from 'react-redux'
import Dashboard from '../components/dashboard'

import {
    fetchUserTransactions,
    fetchDashboard,

} from '../actions/dashboardActions'

const mapStateToProps = (state) => {
    return {
        hasLogin: state.user.hasLogin,
        id: state.user.id,
        token: state.user.token,
        date_exp: state.user.date_exp,

        balance: state.dashboard.balance,
        limit: state.dashboard.limit,
        page: state.dashboard.page,
        transactions: state.dashboard.transactions,
        fetching:  state.dashboard.fetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDashboard: (id, date_exp, token) => dispatch(fetchDashboard(id, date_exp, token)),
        fetchUserTransactions: (id, limit, page) => dispatch(fetchUserTransactions(id, limit, page)),
    }
};



const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;

