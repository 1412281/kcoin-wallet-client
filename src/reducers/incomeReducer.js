import {FETCH_INCOME} from '../actions/actionType'

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
                transactions: action.transactions
            });
        default:
            return state;
    }
}