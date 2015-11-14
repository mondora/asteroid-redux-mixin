import {bindActionCreators} from "redux";
import * as actions from "./actions";

const SERVICE_CONFIG_COLLECTION = "meteor_accounts_loginServiceConfiguration";

export function init ({reduxStore, collectionsStatePath = ["collections"]}) {
    this.reduxStore = reduxStore;
    this.collectionsStatePath = collectionsStatePath;
    const {
        add, change, remove, logIn, logOut
    } =  bindActionCreators(actions, reduxStore.dispatch);
    this.ddp.on("added", add);
    this.ddp.on("changed", change);
    this.ddp.on("removed", remove);
    this.on("loggedIn", logIn);
    this.on("loggedOut", logOut);
}

export function getServiceConfig (providerName) {
    const state = this.reduxStore.getState();
    const serviceConfig = this.collectionsStatePath
        .concat([SERVICE_CONFIG_COLLECTION])
        .reduce((collections, step) => collections[step], state)
        .find(serviceConfig => serviceConfig.service === providerName);
    if (serviceConfig) {
        return serviceConfig;
    } else {
        throw new Error(`No configuration found for provider ${providerName}`);
    }
}
