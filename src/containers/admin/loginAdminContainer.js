import {connect} from 'react-redux'
import {doAdminLogin, checkHasAdminLogin} from '../../actions/admin/adminActions'
import {checkHasLogin} from '../../actions/userActions'
import LoginAdmin from '../../components/admin/loginAdmin'


const mapStateToProps = (state) => {
    return {
        hasAdminLogin: state.admin.hasLogin,
        hasUserLogin: state.user.hasLogin,
        token: state.admin.token,
        date_exp: state.admin.date_exp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasAdminLogin: () => (checkHasAdminLogin()),
        checkHasUserLogin: () => (checkHasLogin()),
        handleLoginButton: (email, pwd) => dispatch(doAdminLogin(email, pwd)),
    }
};

const loginAdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginAdmin);

export default loginAdminContainer;