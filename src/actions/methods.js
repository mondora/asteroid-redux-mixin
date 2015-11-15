export const ASTEROID_METHOD_START = "ASTEROID_SUBSCRIPTION_STARTED";
export const ASTEROID_METHOD_SUCCESS = "ASTEROID_METHOD_SUCCESS";
export const ASTEROID_METHOD_FAIL = "ASTEROID_METHOD_FAIL";

export function start (name) {
    return {
        type: ASTEROID_METHOD_START,
        meta: {name}
    };
}

export function success (name, result) {
    return {
        type: ASTEROID_METHOD_SUCCESS,
        payload: result,
        meta: {name}
    };
}

export function fail (name, error) {
    return {
        type: ASTEROID_METHOD_FAIL,
        payload: error,
        error: true,
        meta: {name}
    };
}
