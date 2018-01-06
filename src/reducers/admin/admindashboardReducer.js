import {} from '../../actions/actionType'
import {
    FETCH_USERS_BALANCE,
} from "../../actions/actionType";

const initState = {
    users_balance: [],
    fetching: false,
    fetched: false,
    error: null,
    limit: 5,
    page: 1
};

export default function admindashboardReducer(state = initState , action) {
    switch (action.type) {
        case FETCH_USERS_BALANCE:
            return Object.assign({}, state, {
                users_balance: action.users_balance,
                fetched: true,
            });
        default:
            return state;
    }
}