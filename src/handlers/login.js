import {
    loginStart,
    loginFail,
    logoutStart,
    logoutFail
} from "../private-actions/login";

export function login (asteroid, dispatch, args) {
    dispatch(loginStart());
    asteroid.login(...args)
        .catch(({error}) => dispatch(
            loginFail(new Error(error))
        ));
}

export function logout (asteroid, dispatch, args) {
    dispatch(logoutStart());
    asteroid.logout(...args)
        .catch(({error}) => dispatch(
            logoutFail(new Error(error))
        ));
}
