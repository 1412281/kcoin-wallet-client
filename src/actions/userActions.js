import axios from 'axios'
import {DOLOGIN, DOLOGOUT, DOSIGNUP} from "./actionType";

export function doSignup(email, pwd) {
    return (dispatch) => {
        axios.post('/wallet/register', {
            email: email,
            password: pwd
        }).then(function (response) {
                console.log(response);
                alert("Your wallet ID is: " + response.data.address+"\nPlease check your email for your confirmation!");
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
                // self.props.setLogin(false);
            }

        }).catch(function (error) {
            console.log(error);
        });
    }
}

export function doLogout() {
    localStorage.setItem('dataLogin', null);

    return {type: DOLOGOUT}
}

export function checkHasLogin() {
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
            }
        }
    }

}

function sessionLoginHasExpired(date_exp) {
    const current = new Date();
    return (date_exp > current.getTime());
};
