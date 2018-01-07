import {connect} from 'react-redux'
import DashboardAdmin from '../../components/admin/dashboardAdmin'

import {
    fetchUsersBalance,

} from '../../actions/admin/FetchAdminActions'

import {
    checkHasAdminLogin
} from '../../actions/admin/adminActions'
import {checkHasLogin} from "../../actions/userActions";
const mapStateToProps = (state) => {
    return {
        hasLogin: state.admin.hasLogin,
        email: state.admin.email,
        token: state.admin.token,
        date_exp: state.admin.date_exp,
        limit: state.admindashboard.limit,
        cursor: state.admindashboard.cursor,
        users_balance: state.admindashboard.users_balance,
        fetched: state.admindashboard.fetched,
        next: state.admindashboard.next,
        total_user: state.admindashboard.total_user,
        total_balance: state.admindashboard.total_balance,
        total_real_balance: state.admindashboard.total_real_balance,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasUserLogin: () => (checkHasLogin()),
        checkHasAdminLogin: () => (checkHasAdminLogin()),
        fetchUsersBalance : (email, date_exp, token, limit, cursor) => dispatch(fetchUsersBalance(email, date_exp, token, limit, cursor)),
        fetchNextUsersBalance : (email, date_exp, token, limit, next) => dispatch(fetchUsersBalance(email, date_exp, token, limit, next))
    }
};



const adminDashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardAdmin);

export default adminDashboardContainer;

