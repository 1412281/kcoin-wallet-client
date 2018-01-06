import {combineReducers} from 'redux';

import transactionPublic from './transactionReducer'
import user from './userReducer'
import admin from './admin/adminReducer'
import dashboard from './dashboardReducer'
import admindashboard from './admin/admindashboardReducer'
import admintransaction from './admin/adminTransactionReducer'

export default combineReducers({
    transactionPublic,
    user,
    admin,
    admindashboard,
    admintransaction,
    dashboard,
})