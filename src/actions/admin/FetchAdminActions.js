import axios from 'axios'
import {FETCH_ADMIN_TRANSACTIONS, FETCH_USERS_BALANCE} from "../actionType";

export function fetchUsersBalance(email, date_exp, token, limit, cursor) {
    return (dispatch) => {
        console.log(email)
        console.log(token)
        console.log(date_exp)
        axios.get('/admin/usersbalance', {
            params:{
                email: email,
                date_exp: date_exp,
                token: token,
                limit: limit,
                cursor: cursor
            }
        }).then(function (response) {
            if (response.status == 403) {

            }
            const data = response.data;
            console.log(data);
            dispatch({type: FETCH_USERS_BALANCE, payload: data})
        }).catch(function (error) {
            console.log(error);
        });
    }
}
export function fetchAdminTransaction(email, date_exp, token, limit, cursor) {
    return (dispatch) => {
        console.log(email)
        console.log(token)
        console.log(date_exp)
        axios.get('/admin/userstransaction', {
            params:{
                email: email,
                date_exp: date_exp,
                token: token,
                limit: limit,
                cursor: cursor
            }
        }).then(function (response) {
            if (response.status == 403) {

            }
            const data = response.data;
            console.log(data);
            dispatch({type: FETCH_ADMIN_TRANSACTIONS, payload: data})
        }).catch(function (error) {
            console.log(error);
        });
    }
}