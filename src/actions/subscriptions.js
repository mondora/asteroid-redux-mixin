export const ASTEROID_SUBSCRIPTION_START = "ASTEROID_SUBSCRIPTION_START";
export const ASTEROID_SUBSCRIPTION_READY = "ASTEROID_SUBSCRIPTION_READY";
export const ASTEROID_SUBSCRIPTION_STOP = "ASTEROID_SUBSCRIPTION_STOP";
export const ASTEROID_SUBSCRIPTION_FAIL = "ASTEROID_SUBSCRIPTION_FAIL";

export function start (name) {
    return {
        type: ASTEROID_SUBSCRIPTION_START,
        meta: {name}
    };
}

export function ready (name) {
    return {
        type: ASTEROID_SUBSCRIPTION_READY,
        meta: {name}
    };
}

export function stop (name) {
    return {
        type: ASTEROID_SUBSCRIPTION_STOP,
        meta: {name}
    };
}

export function fail (name, error) {
    return {
        type: ASTEROID_SUBSCRIPTION_FAIL,
        payload: error,
        error: true,
        meta: {name}
    };
}
