import {} from '../../actions/actionType'
import {FETCH_ADMIN_TRANSACTIONS} from "../../actions/actionType";

const initState = {
    transactions: [],
    fetching: false,
    fetched: false,
    error: null,
    limit: 5,
    page: 1
};

export default function adminTransactionReducer(state = initState , action) {
    switch (action.type) {
        case FETCH_ADMIN_TRANSACTIONS:
            return Object.assign({}, state, {
                transactions: action.transactions,
                fetched: true
            });
        default:
            return state;
    }
}