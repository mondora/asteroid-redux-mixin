import {
    ASTEROID_LOGIN_START,
    ASTEROID_LOGIN_SUCCESS,
    ASTEROID_LOGIN_FAIL,
    ASTEROID_LOGOUT_START,
    ASTEROID_LOGOUT_SUCCESS,
    ASTEROID_LOGOUT_FAIL
} from "../actions/login";

const defaultLoginState = {
    loggingIn: false,
    loginFailed: false,
    loginError: null,
    loggingOut: false,
    logoutFailed: false,
    logoutError: null,
    loggedIn: false,
    userId: null
};

export function login (state = defaultLoginState, {type, payload}) {
    switch (type) {
    case ASTEROID_LOGIN_START:
        return {
            ...state,
            loggingIn: true,
            loginFailed: false,
            loginError: null
        };
    case ASTEROID_LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            loginFailed: false,
            loginError: null,
            loggedIn: true,
            userId: payload.userId
        };
    case ASTEROID_LOGIN_FAIL:
        return {
            ...state,
            loggingIn: false,
            loginFailed: true,
            loginError: payload
        };
    case ASTEROID_LOGOUT_START:
        return {
            ...state,
            loggingOut: true,
            loginFailed: false,
            loginError: null
        };
    case ASTEROID_LOGOUT_SUCCESS:
        return {
            ...state,
            loggingOut: false,
            loginFailed: false,
            loginError: null,
            loggedIn: false,
            userId: null
        };
    case ASTEROID_LOGOUT_FAIL:
        return {
            ...state,
            loggingOut: false,
            loginFailed: true,
            loginError: payload
        };
    default:
        return state;
    }
}
