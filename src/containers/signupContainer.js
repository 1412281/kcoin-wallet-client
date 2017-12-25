import {connect} from 'react-redux'
import {doSignup} from '../actions/userActions'
import Signup from '../components/signup'


const mapStateToProps = (state) => {
    // console.log(state.user);
    return {
        doneSignUp: state.user.doneSignUp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSignUp: (email, pwd) => dispatch(doSignup(email, pwd)),
    }
};

const signupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);

export default signupContainer;