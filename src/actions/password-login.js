export const ASTEROID_CREATE_USER_START = "ASTEROID_CREATE_USER_START";
export const ASTEROID_CREATE_USER_SUCCESS = "ASTEROID_CREATE_USER_SUCCESS";
export const ASTEROID_CREATE_USER_FAIL = "ASTEROID_CREATE_USER_FAIL";

export function createUserStart () {
    return {
        type: ASTEROID_CREATE_USER_START
    };
}

export function createUserSuccess (userId) {
    return {
        type: ASTEROID_CREATE_USER_SUCCESS,
        payload: {userId}
    };
}

export function createUserFail (error) {
    return {
        type: ASTEROID_CREATE_USER_FAIL,
        payload: error,
        error: true
    };
}
