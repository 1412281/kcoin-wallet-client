import {DOADMINLOGIN, DOADMINLOGOUT,DOADMINLOGINFAIL} from '../../actions/actionType'

const initState = {
    hasLogin: false,
    email: '',
    token: '',
    date_exp: '',
    login_error: null
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
        case DOADMINLOGINFAIL:
            return Object.assign({}, state, {
                login_error: 'Login Fail'
            });
        case DOADMINLOGOUT:
            return initState;
        default:
            return state;
    }
}