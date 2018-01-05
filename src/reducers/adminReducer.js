import {DOADMINLOGIN, DOADMINLOGOUT} from '../actions/actionType'

const initState = {
    hasLogin: false,
    email: '',
    token: '',
    date_exp: ''
};

export default function adminReducer(state = initState, action) {
    switch (action.type) {
        case DOADMINLOGIN:
            const payload = action.payload;
            return Object.assign({}, state, {
                hasLogin: true,
                email: payload.email,
                token: payload.token,
                date_exp: payload.date_exp
            });
        case DOADMINLOGOUT:
            return initState;
        default:
            return state;
    }
}