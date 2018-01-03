import axios from 'axios'
import {FETCH_USERS_BALANCE} from "./actionType";

export function fetchUsersBalance(email, date_exp, token, limit, page) {
    console.log(email)
    console.log(token)
    return (dispatch) => {
        axios.get('/admin/usersbalance', {
            params:{
                email: email,
                date_exp: date_exp,
                token: token,
                limit: limit,
                page: page
            }
        }).then(function (response) {
            if (response.status == 403) {

            }
            const data = response.data;
            dispatch({type: FETCH_USERS_BALANCE, users_balance: data})
        }).catch(function (error) {
            console.log(error);
        });
    }
}
