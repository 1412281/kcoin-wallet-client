import {combineReducers} from 'redux';

import transactionPublic from './transactionReducer'
import user from './userReducer'
import dashboard from './dashboardReducer'

export default combineReducers({
    transactionPublic,
    user,
    dashboard,
})