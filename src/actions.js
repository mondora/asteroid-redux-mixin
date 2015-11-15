import {ASTEROID} from "./middleware";

function createMethod (type) {
    return (...args) => ({
        type,
        payload: {args},
        meta: ASTEROID
    });
}

export const ASTEROID_PUBLIC_LOGIN = "ASTEROID_PUBLIC_LOGIN";
export const ASTEROID_PUBLIC_LOGIN_WITH_PASSWORD = "ASTEROID_PUBLIC_LOGIN_WITH_PASSWORD";
export const ASTEROID_PUBLIC_LOGOUT = "ASTEROID_PUBLIC_LOGOUT";
export const ASTEROID_PUBLIC_APPLY = "ASTEROID_PUBLIC_APPLY";
export const ASTEROID_PUBLIC_CALL = "ASTEROID_PUBLIC_CALL";
export const ASTEROID_PUBLIC_SUBSCRIBE = "ASTEROID_PUBLIC_SUBSCRIBE";

export const login = createMethod(ASTEROID_PUBLIC_LOGIN);
export const loginWithPassword = createMethod(ASTEROID_PUBLIC_LOGIN_WITH_PASSWORD);
export const logout = createMethod(ASTEROID_PUBLIC_LOGOUT);
export const apply = createMethod(ASTEROID_PUBLIC_APPLY);
export const call = createMethod(ASTEROID_PUBLIC_CALL);
export const subscribe = createMethod(ASTEROID_PUBLIC_SUBSCRIBE);
