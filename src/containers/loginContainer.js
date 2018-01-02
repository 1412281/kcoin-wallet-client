import {connect} from 'react-redux'
import {doLogin} from '../actions/userActions'
import Login from '../components/login'


const mapStateToProps = (state) => {
    // console.log(state.user);
    return {
        hasLogin: state.user.hasLogin,
        address: state.user.adddress,
        token: state.user.token,
        date_exp: state.user.date_exp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginButton: (address, pwd) => dispatch(doLogin(address, pwd)),

    }
};

const loginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default loginContainer;