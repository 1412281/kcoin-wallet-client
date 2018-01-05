import {connect} from 'react-redux'
import DashboardAdmin from '../components/dashboardAdmin'

import {
    fetchUsersBalance,

} from '../actions/dashboardAdminActions'

import {
    checkHasAdminLogin
} from '../actions/adminActions'

const mapStateToProps = (state) => {
    return {
        hasLogin: state.admin.hasLogin,
        email: state.admin.email,
        token: state.admin.token,
        date_exp: state.admin.date_exp,
        limit: state.admindashboard.limit,
        page: state.admindashboard.page,
        users_balance: state.admindashboard.users_balance
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasAdminLogin: () => dispatch(checkHasAdminLogin()),
        fetchUsersBalance : (email, date_exp, token, limit, page) => dispatch(fetchUsersBalance(email, date_exp, token, limit, page))
    }
};



const adminDashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardAdmin);

export default adminDashboardContainer;

