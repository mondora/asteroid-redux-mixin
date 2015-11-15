import AsteroidError from "../common/asteroid-error";
import {
    loginStart,
    loginFail
} from "../private-actions/login";
import {
    createUserStart,
    createUserSuccess,
    createUserFail
} from "../private-actions/password-login";

export function loginWithPassword (asteroid, dispatch, args) {
    dispatch(loginStart());
    asteroid.loginWithPassword(...args)
        .catch(error => dispatch(
            loginFail(new AsteroidError(error))
        ));
}

export function createUser (asteroid, dispatch, args) {
    dispatch(createUserStart());
    asteroid.createUser(...args)
        .then(userId => dispatch(
            createUserSuccess(userId)
        ))
        .catch(error => dispatch(
            createUserFail(new AsteroidError(error))
        ));
}
