import {
    ASTEROID_PRIVATE_SUBSCRIPTION_START,
    ASTEROID_PRIVATE_SUBSCRIPTION_READY,
    ASTEROID_PRIVATE_SUBSCRIPTION_STOP,
    ASTEROID_PRIVATE_SUBSCRIPTION_FAIL
} from "../private-actions/subscriptions";

const defaultSubscriptionState = {
    pending: false,
    ready: false,
    failed: false,
    error: null
};

function subscription (state = defaultSubscriptionState, {type, payload}) {
    switch (type) {
    case ASTEROID_PRIVATE_SUBSCRIPTION_START:
        return {
            ...defaultSubscriptionState,
            pending: true
        };
    case ASTEROID_PRIVATE_SUBSCRIPTION_READY:
        return {
            ...defaultSubscriptionState,
            ready: true
        };
    case ASTEROID_PRIVATE_SUBSCRIPTION_FAIL:
        return {
            ...defaultSubscriptionState,
            failed: true,
            error: payload
        };
    default:
        return state;
    }
}

export function subscriptions (state = {}, action) {
    const {type, meta} = action;
    switch (type) {
    case ASTEROID_PRIVATE_SUBSCRIPTION_START:
    case ASTEROID_PRIVATE_SUBSCRIPTION_READY:
    case ASTEROID_PRIVATE_SUBSCRIPTION_STOP:
        return {
            ...state,
            [meta.name]: subscription(state[meta.name], action)
        };
    case ASTEROID_PRIVATE_SUBSCRIPTION_FAIL:
        const newState = {...state};
        delete newState[meta.name];
        return newState;
    default:
        return state;
    }
}
