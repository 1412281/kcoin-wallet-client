import axios from 'axios'
import {FETCH_TRANSACTIONS,
    FETCH_TRANSACTIONS_FULFILLED,
    FETCH_TRANSACTIONS_REJECTED,
    FETCH_BALANCE
} from "./actionType";

export function fetchUserTransactions(id, limit, page) {

    return (dispatch) => {
        dispatch({type: FETCH_TRANSACTIONS});
        axios.get('/transaction/getRencentTransaction', {
            params: {
                id: id,
                limit: limit > 0 ? limit : 5,
                page: page > 1 ? page : 1,
            }
        }).then(function(response) {
            if (response.data.length > 0)
                dispatch({type: FETCH_TRANSACTIONS_FULFILLED, payload: response.data, page: page > 1 ? page : 1})

        }).catch(function(err){
            dispatch({type: FETCH_TRANSACTIONS_REJECTED, payload: err})

        });
    }
}

export function fetchDashboard(id, date_exp, token) {
    return (dispatch) => {
        const params = {
            id: id,
            date_exp: date_exp,
            token: token
        };
        // console.log(params);
        return axios.get('/wallet/dashboard', {
            params: params
        }).then(function (data) {
            console.log(data);
            dispatch({type:FETCH_BALANCE, payload: data.data[0].balance});
        });
    }

}