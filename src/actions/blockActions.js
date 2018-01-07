import axios from 'axios'
import {
    FETCH_PUBLIC_BLOCKS,
    FETCH_PUBLIC_BLOCKS_REJECTED,
    FETCH_PUBLIC_BLOCKS_FULFILLED
} from "./actionType";



export function fetchPublicBlocks(limit, page) {
    if (page < 0) return ((dispatch) => {dispatch({type: FETCH_PUBLIC_BLOCKS_REJECTED,})});
    return (dispatch) => {
        dispatch({type: FETCH_PUBLIC_BLOCKS});
        axios.get('/block/getBlocks', {
            params: {
                limit: limit > 10 ? limit : 10,
                page: page >= 0 ? page : 0
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data.length > 0)
                dispatch({type: FETCH_PUBLIC_BLOCKS_FULFILLED, payload: response.data, page: page >= 0 ? page : 0})
            else {
                dispatch({type: FETCH_PUBLIC_BLOCKS_REJECTED, payload: response})
            }
        }).catch((err) => {
            dispatch({type: FETCH_PUBLIC_BLOCKS_REJECTED, payload: err})
        });
    }
}
