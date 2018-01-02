import {connect} from 'react-redux'
import {doAdminLogin} from '../actions/adminActions'
import LoginAdmin from '../components/loginAdmin'


const mapStateToProps = (state) => {
    return {
        hasAdminLogin: state.admin.hasLogin,
        token: state.admin.token,
        date_exp: state.admin.date_exp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginButton: (email, pwd) => dispatch(doAdminLogin(email, pwd)),
    }
};

const loginAdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginAdmin);

export default loginAdminContainer;