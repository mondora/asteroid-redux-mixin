import {bindActionCreators} from "redux";

import * as collectionsActions from "./private-actions/collections";
import * as loginActions from "./private-actions/login";

import * as publicActions from "./actions";

import * as loginHandlers from "./handlers/login";
import * as methodsHandlers from "./handlers/methods";
import * as passwordLoginHandlers from "./handlers/password-login";
import * as subscriptionsHandlers from "./handlers/subscriptions";

const typeHandlerMap = {
    [publicActions.ASTEROID_PUBLIC_LOGIN]: loginHandlers.login,
    [publicActions.ASTEROID_PUBLIC_LOGOUT]: loginHandlers.logout,
    [publicActions.ASTEROID_PUBLIC_LOGIN_WITH_PASSWORD]: passwordLoginHandlers.loginWithPassword,
    [publicActions.ASTEROID_PUBLIC_CREATE_USER]: passwordLoginHandlers.createUser,
    [publicActions.ASTEROID_PUBLIC_APPLY]: methodsHandlers.apply,
    [publicActions.ASTEROID_PUBLIC_CALL]: methodsHandlers.call,
    [publicActions.ASTEROID_PUBLIC_SUBSCRIBE]: subscriptionsHandlers.subscibe
};

export const ASTEROID = Symbol("ASTEROID");

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
            const {type, payload, meta} = action;
            if (meta !== ASTEROID) {
                next(action);
            } else {
                typeHandlerMap[type](asteroid, next, payload.args);
            }
        };
    };
}
