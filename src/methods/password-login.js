/*
*   password-login mixin methods wrappers
*/

import {loginStart, loginFail} from "../actions/login";
import {
    createUserStart,
    createUserSuccess,
    createUserFail
} from "../actions/password-login";

export function rLoginWithPassword (/* arguments */) {
    const {dispatch} = this.reduxStore;
    dispatch(loginStart());
    const promise = this.loginWithPassword(...arguments);
    promise
        .catch(({error}) =>
            dispatch(loginFail(new Error(error)))
        );
    return promise;
}

export function rCreateUser (/* arguments */) {
    const {dispatch} = this.reduxStore;
    dispatch(createUserStart());
    const promise = this.createUser(...arguments);
    promise
        .then(userId => {
            dispatch(createUserSuccess(userId));
        })
        .catch(({error}) =>
            dispatch(createUserFail(new Error(error)))
        );
    return promise;
}
