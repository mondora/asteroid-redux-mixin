import {
    ASTEROID_PRIVATE_METHOD_START,
    ASTEROID_PRIVATE_METHOD_SUCCESS,
    ASTEROID_PRIVATE_METHOD_FAIL
} from "../private-actions/methods";

const defaultMethodState = {
    pending: false,
    responded: false,
    response: null,
    failed: false,
    error: null
};

function method (state = defaultMethodState, {type, payload}) {
    switch (type) {
    case ASTEROID_PRIVATE_METHOD_START:
        return {
            ...defaultMethodState,
            pending: true
        };
    case ASTEROID_PRIVATE_METHOD_SUCCESS:
        return {
            ...defaultMethodState,
            responded: true,
            response: payload
        };
    case ASTEROID_PRIVATE_METHOD_FAIL:
        return {
            ...defaultMethodState,
            failed: true,
            error: payload
        };
    default:
        return state;
    }
}

export function methods (state = {}, action) {
    const {type, meta} = action;
    switch (type) {
    case ASTEROID_PRIVATE_METHOD_START:
    case ASTEROID_PRIVATE_METHOD_SUCCESS:
    case ASTEROID_PRIVATE_METHOD_FAIL:
        return {
            ...state,
            [meta.name]: method(state[meta.name], action)
        };
    default:
        return state;
    }
}
