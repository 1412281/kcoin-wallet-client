import {DOLOGIN, DOLOGINFAIL, DOLOGOUT, DOSIGNUP} from '../actions/actionType'

const initState = {
    doneSignUp: false,
    hasLogin: false,
    email: '',
    token: '',
    date_exp: '',
    address: '',
    login_error: null
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
                email: payload.email,
                token: payload.token,
                date_exp: payload.date_exp,
                address: payload.address,
                login_error: null
            });
        case DOLOGOUT:
            return initState;
        case DOLOGINFAIL:
            return Object.assign({}, state, {
                login_error: 'Login Fail'
            });
        default:
            return state;
    }
}