import {connect} from 'react-redux'
import TransactionAdmin from '../../components/admin/transactionAdmin'

import {
    fetchAdminTransaction,

} from '../../actions/admin/FetchAdminActions'

import {
    checkHasAdminLogin
} from '../../actions/admin/adminActions'
import {checkHasLogin} from "../../actions/userActions";
const mapStateToProps = (state) => {
    return {
        hasLogin: state.admin.hasLogin,
        email: state.admin.email,
        token: state.admin.token,
        date_exp: state.admin.date_exp,
        limit: state.admintransaction.limit,
        cursor: state.admintransaction.cursor,
        transactions: state.admintransaction.transactions,
        fetched: state.admintransaction.fetched,
        next: state.admintransaction.next,
        total_transaction: state.admintransaction.total_transaction,
        total_status: state.admintransaction.total_status,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasUserLogin: () => (checkHasLogin()),
        checkHasAdminLogin: () => (checkHasAdminLogin()),
        fetchAdminTransactions : (email, date_exp, token, limit, cursor) => dispatch(fetchAdminTransaction(email, date_exp, token, limit, cursor)),
        fetchNextAdminTransactions : (email, date_exp, token, limit, next) => dispatch(fetchAdminTransaction(email, date_exp, token, limit, next))
    }
};



const AdminTransactionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionAdmin);

export default AdminTransactionContainer;

