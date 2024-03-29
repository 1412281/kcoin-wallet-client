import axios from 'axios'
import {
    FETCH_TRANSACTIONS,
    FETCH_TRANSACTIONS_PREVIOUS_FULFILLED,
    FETCH_TRANSACTIONS_FULFILLED,
    FETCH_TRANSACTIONS_REJECTED,
    FETCH_BALANCE, FETCH_INCOME, FETCH_INCOME_FULFILLED, FETCH_INCOME_REJECTED
} from "./actionType";

export function fetchUserTransactions(email, limit, cursor) {

    return (dispatch) => {
        dispatch({type: FETCH_TRANSACTIONS});
        axios.post('/transaction/getRencentTransaction', {
                email: email,
                limit: limit,
                cursor: cursor
        }).then(function(response) {
            console.log(response.data);

            if (response.data.data.length > 0)
                dispatch({type: FETCH_TRANSACTIONS_FULFILLED, payload: response.data})
            else {
                dispatch({type: FETCH_TRANSACTIONS_REJECTED});
            }
        }).catch(function(err){
            dispatch({type: FETCH_TRANSACTIONS_REJECTED, payload: err})

        });
    }
}

export function fetchUserTransactionsPrevious(email, limit, previous) {

    return (dispatch) => {
        dispatch({type: FETCH_TRANSACTIONS});
        axios.post('/transaction/getRencentTransaction', {
            email: email,
            limit: limit,
            cursor: previous
        }).then(function(response) {
            console.log(response.data);

            if (response.data.data.length > 0)
                dispatch({type: FETCH_TRANSACTIONS_PREVIOUS_FULFILLED, payload: response.data})

        }).catch(function(err){
            dispatch({type: FETCH_TRANSACTIONS_REJECTED, payload: err})

        });
    }
}


export function fetchDashboard(email, date_exp, token) {
    return (dispatch) => {
        const params = {
            email: email,
            date_exp: date_exp,
            token: token
        };
        console.log(params);
        // console.log(params);
        return axios.get('/wallet/dashboard', {
            params: params
        }).then(function (data) {
            if(data.data[0] !== undefined)
                dispatch({type:FETCH_BALANCE, balance: data.data[0].balance});

        });
    }
}

export function fetchUserIncome(email, date_exp, token) {
    return (dispatch) => {
        const params = {
            email: email,
            date_exp: date_exp,
            token: token
        };

        dispatch({type:FETCH_INCOME});
        console.log(params);

        return axios.get('/wallet/getAllReceiveHistory', {
            params: params
        }).then(function (data) {
            // if(data !== undefined)
            console.log(data.data);
                dispatch({type:FETCH_INCOME_FULFILLED, transactions: data.data});

        }).catch(function (err) {
            dispatch({type:FETCH_INCOME_REJECTED});

        });
    }
}

export function deleteTransaction(email, date_exp, token, transaction) {
    return (dispatch) => {
        const body = {
            email: email,
            date_exp: date_exp,
            token: token,
            transaction: transaction
        };
        console.log(body)
        axios.post('/wallet/deletepending',body).then(function(response) {
            console.log(response.data);
            window.location.reload()
            // if (response.data.data.length > 0)
            //     dispatch({type: FETCH_TRANSACTIONS_PREVIOUS_FULFILLED, payload: response.data})

        }).catch(function(err){
            dispatch({type: FETCH_TRANSACTIONS_REJECTED, payload: err})

        });
    }

}