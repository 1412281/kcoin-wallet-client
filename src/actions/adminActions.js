import axios from 'axios'
import {DOADMINLOGIN, DOADMINLOGOUT} from "./actionType";

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
                alert('Login Success, go to Admin Dashboard');

                localStorage.setItem('dataAdminLogin', JSON.stringify(payload));
                dispatch({type: DOADMINLOGIN, payload: payload});
                // self.props.setLoginInfo(entity);

                // console.log(self.props.hasLogin);
                // self.setState({hasLogin: true});

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
    localStorage.setItem('dataAdminLogin', null);
    return {type: DOADMINLOGOUT}
}

export function checkHasAdminLogin() {
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
                localStorage.setItem('dataAdminLogin', JSON.stringify(payload));
                dispatch({type: DOADMINLOGIN, payload: payload});
            }
        }
    }

}

function sessionLoginHasExpired(date_exp) {
    const current = new Date();
    return (date_exp > current.getTime());
};
