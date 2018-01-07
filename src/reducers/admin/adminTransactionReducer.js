import {} from '../../actions/actionType'
import {FETCH_ADMIN_TRANSACTIONS} from "../../actions/actionType";

const initState = {
    transactions: [],
    fetching: false,
    fetched: false,
    total_transaction: 0,
    total_status: {
        pending: 0,
        processing: 0,
        done: 0
    },
    error: null,
    limit: 10,
    cursor: {},
    next: {}
};
const combine2array = function (arr1, arr2) {
    arr2.map( function (element) {
        arr1.push(element)
    })
    return arr1
}
export default function adminTransactionReducer(state = initState , action) {
    switch (action.type) {
        case FETCH_ADMIN_TRANSACTIONS:
            return Object.assign({}, state, {
                transactions: combine2array(state.transactions, action.payload.users_transaction),
                fetched: true,
                next: action.payload.next,
                cursor: action.payload.cursor,
                total_transaction: action.payload.total_transaction,
                total_status: action.payload.total_status

            });
        default:
            return state;
    }
}