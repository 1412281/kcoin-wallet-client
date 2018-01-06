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
        page: state.admintransaction.page,
        transactions: state.admintransaction.transactions,
        fetched: state.admintransaction.fetched
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkHasUserLogin: () => (checkHasLogin()),
        checkHasAdminLogin: () => (checkHasAdminLogin()),
        fetchAdminTransactions : (email, date_exp, token, limit, page) => dispatch(fetchAdminTransaction(email, date_exp, token, limit, page))
    }
};



const AdminTransactionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionAdmin);

export default AdminTransactionContainer;

