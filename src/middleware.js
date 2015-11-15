import {bindActionCreators} from "redux";

import * as collectionsActions from "./private-actions/collections";
import * as loginActions from "./private-actions/login";

import {
    ASTEROID_PUBLIC_LOGIN,
    ASTEROID_PUBLIC_LOGOUT,
    ASTEROID_PUBLIC_LOGIN_WITH_PASSWORD,
    ASTEROID_PUBLIC_CREATE_USER,
    ASTEROID_PUBLIC_APPLY,
    ASTEROID_PUBLIC_CALL,
    ASTEROID_PUBLIC_SUBSCRIBE
} from "./actions";

import {login, logout} from "./handlers/login";
import {apply, call} from "./handlers/methods";
import {createUser, loginWithPassword} from "./handlers/password-login";
import {subscribe} from "./handlers/subscriptions";

const typeHandlerMap = {
    [ASTEROID_PUBLIC_LOGIN]: login,
    [ASTEROID_PUBLIC_LOGOUT]: logout,
    [ASTEROID_PUBLIC_LOGIN_WITH_PASSWORD]: loginWithPassword,
    [ASTEROID_PUBLIC_CREATE_USER]: createUser,
    [ASTEROID_PUBLIC_APPLY]: apply,
    [ASTEROID_PUBLIC_CALL]: call,
    [ASTEROID_PUBLIC_SUBSCRIBE]: subscribe
};

export default function getAsteroidMiddleware (asteroid) {
    return store => {
        /*
        *   Dispatch actions on collection events
        */
        const {
            add, change, remove
        } =  bindActionCreators(collectionsActions, store.dispatch);
        asteroid.ddp.on("added", add);
        asteroid.ddp.on("changed", change);
        asteroid.ddp.on("removed", remove);
        /*
        *   Dispatch actions on login events
        */
        const {
            loginSuccess, logoutSuccess
        } =  bindActionCreators(loginActions, store.dispatch);
        asteroid.on("loggedIn", loginSuccess);
        asteroid.on("loggedOut", logoutSuccess);
        /*
        *   Return the rest of the middleware
        */
        return next => action => {
            const {type, payload} = action;
            const handler = typeHandlerMap[type];
            if (handler) {
                handler(asteroid, next, payload.args);
            } else {
                next(action);
            }
        };
    };
}
