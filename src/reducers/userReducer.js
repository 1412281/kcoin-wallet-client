import {DOLOGIN, DOLOGOUT, DOSIGNUP} from '../actions/actionType'

const initState = {
    doneSignUp: false,
    hasLogin: false,
    id: '',
    token: '',
    date_exp: '',
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case DOSIGNUP:
            return Object.assign({}, state, {
                doneSignUp: true,
            });
        case DOLOGIN:
            const payload = action.payload;
            return Object.assign({}, state, {
                hasLogin: true,
                id: payload.id,
                token: payload.token,
                date_exp: payload.date_exp
            });
        case DOLOGOUT:
            return initState;
        default:
            return state;
    }
}