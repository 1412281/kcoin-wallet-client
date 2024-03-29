import {FETCH_INCOME_FULFILLED, FETCH_INCOME, FETCH_INCOME_REJECTED} from '../actions/actionType'

const initState = {
    transactions: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function income(state = initState , action) {
    switch (action.type) {
        case FETCH_INCOME:
            console.log('1111111111111', action.transactions);
            return Object.assign({}, state, {
                fetching: true, fetched: false
            });
        case FETCH_INCOME_FULFILLED:
            console.log('1111111111111', action.transactions);
            return Object.assign({}, state, {
                transactions: action.transactions,
                fetching: false,
                fetched: true,
            });
        case FETCH_INCOME_REJECTED:
            return Object.assign({}, state, {
                fetching: false
            });
        default:
            return state;
    }
}