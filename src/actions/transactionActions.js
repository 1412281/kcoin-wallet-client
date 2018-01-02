import axios from 'axios'
import {
    FETCH_PUBLIC_TRANSACTIONS, FETCH_PUBLIC_TRANSACTIONS_FULFILLED,
    FETCH_PUBLIC_TRANSACTIONS_REJECTED,
    CREATE_TRANSACTION,
    CREATE_TRANSACTION_DONE
} from "./actionType";


export function createTransaction(coin, email, wallet_receive) {
    return (dispatch) => {
        axios.post('/transaction/createTransaction', {
            coin: coin,
            email: email,
            address_receive: wallet_receive
        })
            .then(function (response) {
                console.log(response);
                alert("Send coin Successful to " + wallet_receive);
                dispatch({type: CREATE_TRANSACTION_DONE, doneSend: true});

            }).then(function (next)  {
            dispatch({type: CREATE_TRANSACTION});
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export function checkWalletAvailable(wallet) {
    return axios.get('/wallet/checkwalletexist', {
        params: {
            address: wallet,
        }
    });
}

export function fetchPublicTransactions(limit, page) {

    return (dispatch) => {
        dispatch({type: FETCH_PUBLIC_TRANSACTIONS});
        axios.get('/transaction/getAllTransaction', {
            params: {
                limit: limit > 10 ? limit : 10,
                page: page > 1 ? page : 1
            }
        }).then((response) => {
            if (response.data.length > 0)
                dispatch({type: FETCH_PUBLIC_TRANSACTIONS_FULFILLED, payload: response.data, page: page > 1 ? page : 1})

        }).catch((err) => {
            dispatch({type: FETCH_PUBLIC_TRANSACTIONS_REJECTED, payload: err})
        });
    }
}
