import {} from '../actions/actionType'
import {
    FETCH_PUBLIC_TRANSACTIONS,
    FETCH_PUBLIC_TRANSACTIONS_REJECTED,
    FETCH_PUBLIC_TRANSACTIONS_FULFILLED,
    CREATE_TRANSACTION_DONE,
} from "../actions/actionType";
import {CREATE_TRANSACTION} from "../actions/actionType";

const initState = {
    transactions: [],
    fetching: false,
    fetched: false,
    error: null,
    limit: 10,
    page: 1,
    doneSend: false

};

export default function transactionPublic(state = initState , action) {
    switch (action.type) {
        case CREATE_TRANSACTION:
            return Object.assign({}, state, {
                doneSend: false
            });
        case CREATE_TRANSACTION_DONE:
            return Object.assign({}, state, {
                doneSend: action.doneSend
            });
        case FETCH_PUBLIC_TRANSACTIONS:
            return Object.assign({}, state, {fetching: true});
        case FETCH_PUBLIC_TRANSACTIONS_REJECTED:
            return Object.assign({}, state, {fetching: false, error: action.payload});
        case FETCH_PUBLIC_TRANSACTIONS_FULFILLED:
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                transactions: action.payload,
                page: action.page
            });

        default:
            return state;
    }
}