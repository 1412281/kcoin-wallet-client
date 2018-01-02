import {combineReducers} from 'redux';

import transactionPublic from './transactionReducer'
import user from './userReducer'
import admin from './adminReducer'
import dashboard from './dashboardReducer'

export default combineReducers({
    transactionPublic,
    user,
    admin,
    dashboard,
})