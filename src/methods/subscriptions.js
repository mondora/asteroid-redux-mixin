/*
*   subscriptions mixin methods wrappers
*/

import {start, ready, stop, fail} from "../actions/subscriptions";

export function rSubscribe (name, ...args) {
    const {dispatch} = this.reduxStore;
    dispatch(start(name));
    return this.subscribe(name, ...args)
        .on("ready", () =>
            dispatch(ready(name))
        )
        .on("stop", () =>
            dispatch(stop(name)
        ))
        .on("error", ({error}) =>
            dispatch(fail(name, new Error(error)))
        );
}
