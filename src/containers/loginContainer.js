import {connect} from 'react-redux'
import {doLogin} from '../actions/userActions'
import Login from '../components/login'
import {checkHasLogin} from "../actions/userActions";
import {checkHasAdminLogin} from "../actions/admin/adminActions";

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
        checkHasUserLogin: () => (checkHasLogin()),
        checkHasAdminLogin: () => (checkHasAdminLogin()),
        handleLoginButton: (email, pwd) => dispatch(doLogin(email, pwd)),

    }
};

const loginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default loginContainer;