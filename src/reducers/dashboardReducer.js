import {} from '../actions/actionType'
import {
    FETCH_BALANCE,
    FETCH_TRANSACTIONS,
    FETCH_TRANSACTIONS_REJECTED,
    FETCH_TRANSACTIONS_FULFILLED,
} from "../actions/actionType";
import {FETCH_TRANSACTIONS_PREVIOUS_FULFILLED} from "../actions/actionType";

const initState = {
    balance: null,
    transactions: [],
    fetching: false,
    fetched: false,
    error: null,
    limit: 3,
    previous: [],
    cursor: {},
    next: {},
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
            let previous = [];
            if (JSON.stringify(state.cursor) !== JSON.stringify({})) {
                previous = state.previous;
                previous.push(state.cursor);
            }
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                transactions: action.payload,
                previous: previous,
                next: action.payload.next,
                cursor: action.payload.cursor
            });
        case FETCH_TRANSACTIONS_PREVIOUS_FULFILLED:

            let previous2 = state.previous;
            previous2.pop();
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                transactions: action.payload,
                previous: previous2,
                next: action.payload.next,
                cursor: action.payload.cursor,
            });
        default:
            return state;
    }
}