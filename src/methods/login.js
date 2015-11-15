/*
*   login mixin methods wrappers
*/

import {
    loginStart,
    loginFail,
    logoutStart,
    logoutFail
} from "../actions/login";

export function rLogin (/* arguments */) {
    const {dispatch} = this.reduxStore;
    dispatch(loginStart());
    const promise = this.login(...arguments);
    promise
        .catch(({error}) =>
            dispatch(loginFail(new Error(error)))
        );
    return promise;
}

export function rLogout () {
    const {dispatch} = this.reduxStore;
    dispatch(logoutStart());
    const promise = this.logout();
    promise
        .catch(({error}) =>
            dispatch(logoutFail(new Error(error)))
        );
    return promise;
}
