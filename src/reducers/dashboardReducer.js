import {} from '../actions/actionType'
import {
    FETCH_BALANCE,
    FETCH_TRANSACTIONS,
    FETCH_TRANSACTIONS_REJECTED,
    FETCH_TRANSACTIONS_FULFILLED,
} from "../actions/actionType";

const initState = {
    balance: null,
    transactions: [],
    fetching: false,
    fetched: false,
    error: null,
    limit: 5,
    page: 1
};

export default function transactionPublic(state = initState , action) {
    switch (action.type) {
        case FETCH_BALANCE:
            return Object.assign({}, state, {
                balance: action.payload,
            });
        case FETCH_TRANSACTIONS:
            return Object.assign({}, state, {fetching: true});
        case FETCH_TRANSACTIONS_REJECTED:
            return Object.assign({}, state, {fetching: false, error: action.payload});
        case FETCH_TRANSACTIONS_FULFILLED:
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