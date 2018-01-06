import {connect} from 'react-redux'
import Navbar from '../components/navbar'
import {doLogout, checkHasLogin, reloadUserLogin} from "../actions/userActions";
import {doAdminLogout, checkHasAdminLogin, reloadAdminLogin} from "../actions/admin/adminActions";
import {fetchDashboard} from "../actions/dashboardActions";


const mapStateToProps = (state) => {
    return {
        hasLogin: state.user.hasLogin,
        hasAdminLogin: state.admin.hasLogin,
        email: state.user.email,
        admin_email: state.admin.email,
        token: state.user.token,
        date_exp: state.user.date_exp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(doLogout()),
        doAdminLogout: () => dispatch(doAdminLogout()),
        checkHasUserLogin: () => (checkHasLogin()),
        reloadAdminLogin: () => dispatch(reloadAdminLogin()),
        reloadUserLogin: () => dispatch(reloadUserLogin()),
        checkHasAdminLogin: () => (checkHasAdminLogin()),
        fetchDashboard: (id, date_exp, token) => dispatch(fetchDashboard(id, date_exp, token)),
    }
}

const navbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default navbarContainer;