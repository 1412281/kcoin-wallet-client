import {connect} from 'react-redux'
import Income from '../components/income'
import {checkHasLogin} from "../actions/userActions";
import {
    fetchUserIncome

} from '../actions/dashboardActions'
const mapStateToProps = (state) => {
    return {
        hasLogin: state.user.hasLogin,
        email: state.user.email,
        token: state.user.token,
        date_exp: state.user.date_exp,
        fetching:  state.income.fetching,
        transactions: state.income.transactions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasUserLogin: () => (checkHasLogin()),
        fetchUserIncome: (email, date_exp, token) => dispatch(fetchUserIncome(email, date_exp, token)),
    }
};



const IncomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Income);

export default IncomeContainer;

