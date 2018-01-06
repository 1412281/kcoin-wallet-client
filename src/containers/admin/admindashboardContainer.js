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
        fetching:  state.admindashboard.fetching,
        next: state.admindashboard.next
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

