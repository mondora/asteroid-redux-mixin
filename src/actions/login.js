export const ASTEROID_LOGIN_START = "ASTEROID_LOGIN_START";
export const ASTEROID_LOGIN_SUCCESS = "ASTEROID_LOGIN_SUCCESS";
export const ASTEROID_LOGIN_FAIL = "ASTEROID_LOGIN_FAIL";

export function loginStart () {
    return {
        type: ASTEROID_LOGIN_START
    };
}
export function loginSuccess (userId) {
    return {
        type: ASTEROID_LOGIN_SUCCESS,
        payload: {userId}
    };
}
export function loginFail (error) {
    return {
        type: ASTEROID_LOGIN_FAIL,
        payload: error,
        error: true
    };
}

export const ASTEROID_LOGOUT_START = "ASTEROID_LOGOUT_START";
export const ASTEROID_LOGOUT_SUCCESS = "ASTEROID_LOGOUT_SUCCESS";
export const ASTEROID_LOGOUT_FAIL = "ASTEROID_LOGOUT_FAIL";

export function logoutStart () {
    return {
        type: ASTEROID_LOGOUT_START
    };
}
export function logoutSuccess () {
    return {
        type: ASTEROID_LOGOUT_SUCCESS
    };
}
export function logoutFail (error) {
    return {
        type: ASTEROID_LOGOUT_FAIL,
        payload: error,
        error: true
    };
}
