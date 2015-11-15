/*
*   methods mixin methods wrappers
*/

import {start, success, fail} from "../actions/methods";

export function rApply (name, args) {
    const {dispatch} = this.reduxStore;
    dispatch(start(name));
    const promise = this.apply(name, args);
    promise
        .then(result =>
            dispatch(success(name, result))
        )
        .catch(({error}) =>
            dispatch(fail(name, new Error(error)))
        );
    return promise;
}
export function rCall (name, ...args) {
    return this.rApply(name, args);
}
