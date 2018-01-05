import {combineReducers} from 'redux';

import transactionPublic from './transactionReducer'
import user from './userReducer'
import admin from './adminReducer'
import dashboard from './dashboardReducer'
import admindashboard from './admindashboardReducer'

export default combineReducers({
    transactionPublic,
    user,
    admin,
    admindashboard,
    dashboard,
})