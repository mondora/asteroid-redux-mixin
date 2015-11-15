import {bindActionCreators} from "redux";

import * as collectionsActions from "./actions/collections";
import * as loginActions from "./actions/login";

export function init ({reduxStore}) {

    this.reduxStore = reduxStore;

    /*
    *   Collection events
    */
    const {
        add, change, remove
    } =  bindActionCreators(collectionsActions, reduxStore.dispatch);
    this.ddp.on("added", add);
    this.ddp.on("changed", change);
    this.ddp.on("removed", remove);

    /*
    *   Login events
    */
    const {
        loginSuccess, logoutSuccess
    } =  bindActionCreators(loginActions, reduxStore.dispatch);
    this.on("loggedIn", loginSuccess);
    this.on("loggedOut", logoutSuccess);

}

export * from "./methods/login";
export * from "./methods/methods";
export * from "./methods/password-login";
export * from "./methods/subscriptions";
