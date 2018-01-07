import {} from '../actions/actionType'
import {
    FETCH_PUBLIC_BLOCKS,
    FETCH_PUBLIC_BLOCKS_REJECTED,
    FETCH_PUBLIC_BLOCKS_FULFILLED
} from "../actions/actionType";

const initState = {
    blocks: [],
    fetching: false,
    fetched: false,
    error: null,
    limit: 10,
    page: 0,
    doneSend: false

};

export default function blockReducer(state = initState , action) {
    switch (action.type) {

        case FETCH_PUBLIC_BLOCKS:
            return Object.assign({}, state, {fetching: true});
        case FETCH_PUBLIC_BLOCKS_REJECTED:
            return Object.assign({}, state, {fetching: false, error: action.payload});
        case FETCH_PUBLIC_BLOCKS_FULFILLED:
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                blocks: action.payload,
                page: action.page
            });

        default:
            return state;
    }
}