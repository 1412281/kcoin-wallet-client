import {connect} from 'react-redux'
import CreateTransaction from '../components/createtransaction'

import {
    checkWalletAvailable,
    createTransaction,
} from '../actions/transactionActions'
import {fetchDashboard} from '../actions/dashboardActions'

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        token: state.user.token,
        date_exp: state.user.date_exp,
        wallet_send: state.user.address,
        balance: state.dashboard.balance,
        doneSend: state.transactionPublic.doneSend,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (coin, email, wallet_receive) => dispatch(createTransaction(coin, email, wallet_receive)),
        checkWalletAvailable: (wallet) => checkWalletAvailable(wallet),
        fetchDashboard: (email, date_exp, token) => dispatch(fetchDashboard(email, date_exp, token)),

    }
};


const CreateTransactionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTransaction);

export default CreateTransactionContainer;

