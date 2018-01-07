import {} from '../../actions/actionType'
import {
    FETCH_USERS_BALANCE,
} from "../../actions/actionType";

const initState = {
    users_balance: [],
    totaluser: 0,
    total_balance: 0,
    total_balance: 0,
    fetching: false,
    fetched: false,
    error: null,
    limit: 10,
    previous: [],
    cursor: {},
    next: {}
};

const combine2array = function (arr1, arr2) {
    arr2.map( function (element) {
        arr1.push(element)
    })
    return arr1
}

export default function admindashboardReducer(state = initState , action) {
    switch (action.type) {
        case FETCH_USERS_BALANCE:
            return Object.assign({}, state, {
                users_balance: combine2array(state.users_balance, action.payload.users_balance),
                fetching: false,
                fetched: true,
                transactions: action.payload,
                next: action.payload.next,
                cursor: action.payload.cursor,
                total_user: action.payload.total_user,
                total_balance: action.payload.total_balance,
                total_real_balance: action.payload.total_real_balance,
            });
        default:
            return state;
    }
}