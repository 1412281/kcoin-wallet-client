import {connect} from 'react-redux'
import {doLogin} from '../actions/userActions'
import Login from '../components/login'


const mapStateToProps = (state) => {
    // console.log(state.user);
    return {
        hasLogin: state.user.hasLogin,
        email: state.user.email,
        token: state.user.token,
        date_exp: state.user.date_exp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginButton: (email, pwd) => dispatch(doLogin(email, pwd)),

    }
};

const loginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default loginContainer;