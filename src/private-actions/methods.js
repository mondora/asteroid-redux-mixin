export const ASTEROID_PRIVATE_METHOD_START = "ASTEROID_PRIVATE_SUBSCRIPTION_STARTED";
export const ASTEROID_PRIVATE_METHOD_SUCCESS = "ASTEROID_PRIVATE_METHOD_SUCCESS";
export const ASTEROID_PRIVATE_METHOD_FAIL = "ASTEROID_PRIVATE_METHOD_FAIL";

export function start (name) {
    return {
        type: ASTEROID_PRIVATE_METHOD_START,
        meta: {name}
    };
}

export function success (name, result) {
    return {
        type: ASTEROID_PRIVATE_METHOD_SUCCESS,
        payload: result,
        meta: {name}
    };
}

export function fail (name, error) {
    return {
        type: ASTEROID_PRIVATE_METHOD_FAIL,
        payload: error,
        error: true,
        meta: {name}
    };
}
