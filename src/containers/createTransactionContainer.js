import {connect} from 'react-redux'
import CreateTransaction from '../components/createtransaction'

import {
    checkWalletAvailable,
    createTransaction,
} from '../actions/transactionActions'

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        wallet_send: state.user.address,
        balance: state.dashboard.balance,
        doneSend: state.transactionPublic.doneSend,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (coin, email, wallet_receive) => dispatch(createTransaction(coin, email, wallet_receive)),
        checkWalletAvailable: (wallet) => checkWalletAvailable(wallet),
    }
};


const CreateTransactionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTransaction);

export default CreateTransactionContainer;

