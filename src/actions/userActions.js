import axios from 'axios'
import {DOLOGIN, DOLOGOUT, DOSIGNUP, DOLOGINFAIL} from "./actionType";

export function doSignup(email, pwd) {
    return (dispatch) => {
        axios.post('/wallet/register', {
            email: email,
            password: pwd
        }).then(function (response) {
                console.log(response);
                alert("Please check your email for your confirmation!\nYour wallet ID was send");
                dispatch({type: DOSIGNUP});
        }).catch(function (error) {
                console.log(error);
        });

    }
}

export function doLogin(email, pwd) {
    return (dispatch) => {
        axios.post('/wallet/login', {
            email: email,
            password: pwd
            // id: '2ac90f7b5fcab6f7574e030952ace21d1f562e56',
            // password: '123123'
        }).then(function (response) {
            const data = response.data;
            // console.log(data);

            if (data.result === "Login Successful") {
                const payload = {
                    hasLogin: true,
                    email: email,
                    date_exp: data.date_exp,
                    token: data.token,
                    address: data.address
                };
                alert('Login Success, go to Dashboard');
                console.log(payload);
                localStorage.setItem('dataLogin', JSON.stringify(payload));
                dispatch({type: DOLOGIN, payload: payload});
                // self.props.setLoginInfo(entity);

                // console.log(self.props.hasLogin);
                // self.setState({hasLogin: true});

            }
            else {
                dispatch({type:  DOLOGINFAIL})
            }

        }).catch(function (error) {
            console.log(error);
        });
    }
}

export function doLogout() {
    return (dispatch) => {
        localStorage.setItem('dataLogin', null);
        dispatch({type: DOLOGOUT})
        window.location.reload();
    }
}
export function checkHasLogin() {
        const store = localStorage.getItem('dataLogin');
        const data = JSON.parse(store);

        if (data !== null) {
            // if (sessionLoginHasExpired(data.date_exp)) {
                return true;
            // }
        }
        else {

        }
        return false;
}

export function reloadUserLogin() {
    return (dispatch) => {
        const store = localStorage.getItem('dataLogin');
        const data = JSON.parse(store);
        console.log(data);

        if (data !== null) {
            console.log('has login');
            if (!sessionLoginHasExpired(data.date_exp)) {
                const payload = {
                    hasLogin: true,
                    email: data.email,
                    date_exp: data.date_exp,
                    token: data.token,
                    address: data.address
                };
                // localStorage.setItem('dataLogin', JSON.stringify(payload));
                dispatch({type: DOLOGIN, payload: payload});
                return true;
            }
        }
        return false;
    }
}

function sessionLoginHasExpired(date_exp) {
    const current = new Date();
    // return (date_exp < current.getTime());
    return false;
};
