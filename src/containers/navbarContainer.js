import {connect} from 'react-redux'
import Navbar from '../components/navbar'
import {doLogout, checkHasLogin} from "../actions/userActions";
import {fetchDashboard} from "../actions/dashboardActions";


const mapStateToProps = (state) => {
    return {
        hasLogin: state.user.hasLogin,
        email: state.user.email,
        token: state.user.token,
        date_exp: state.user.date_exp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(doLogout()),
        checkHasLogin: () => dispatch(checkHasLogin()),
        fetchDashboard: (id, date_exp, token) => dispatch(fetchDashboard(id, date_exp, token)),
    }
}

const navbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default navbarContainer;