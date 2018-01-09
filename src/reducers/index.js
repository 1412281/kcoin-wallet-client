import {combineReducers} from 'redux';

import block from './blockReducer'
import transactionPublic from './transactionReducer'
import user from './userReducer'
import admin from './admin/adminReducer'
import dashboard from './dashboardReducer'
import income from './incomeReducer'
import admindashboard from './admin/admindashboardReducer'
import admintransaction from './admin/adminTransactionReducer'

export default combineReducers({
    block,
    transactionPublic,
    user,
    admin,
    admindashboard,
    admintransaction,
    dashboard,
    income
})