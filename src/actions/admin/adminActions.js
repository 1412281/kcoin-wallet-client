import axios from 'axios'
import {DOADMINLOGIN, DOADMINLOGOUT} from "../actionType";

export function doAdminLogin(email, pwd) {
    return (dispatch) => {
        axios.post('/admin/login', {
            email: email,
            password: pwd
        }).then(function (response) {
            const data = response.data;
            // console.log(data);
            if (data.result === "Login Successful") {
                const payload = {
                    hasAdminLogin: true,
                    email: data.email,
                    date_exp: data.date_exp,
                    token: data.token
                };
                console.log(payload)

                localStorage.setItem('dataAdminLogin', JSON.stringify(payload));
                dispatch({type: DOADMINLOGIN, payload: payload});

            }
            else {
                // self.props.setLogin(false);
            }

        }).catch(function (error) {
            console.log(error);
        });
    }
}

export function doAdminLogout() {
    return (dispatch) => {
        localStorage.setItem('dataAdminLogin', null);
        dispatch({type: DOADMINLOGOUT})
        window.location.reload();
    }
}
export function checkHasAdminLogin() {
        const store = localStorage.getItem('dataAdminLogin');
        const data = JSON.parse(store);
        if (data !== null) {
                return true;
        }
        return false
}

export function reloadAdminLogin() {
    return (dispatch) => {
        const store = localStorage.getItem('dataAdminLogin');
        const data = JSON.parse(store);
        // console.log(data);

        if (data !== null) {
            if (!sessionLoginHasExpired(data.date_exp)) {
                const payload = {
                    hasLogin: true,
                    email: data.email,
                    date_exp: data.date_exp,
                    token: data.token
                };
                // localStorage.setItem('dataAdminLogin', JSON.stringify(payload));
                dispatch({type: DOADMINLOGIN, payload: payload});
                return true;
            }
        }
        return false
    }

}

function sessionLoginHasExpired(date_exp) {
    const current = new Date();
    return (date_exp > current.getTime());
};
