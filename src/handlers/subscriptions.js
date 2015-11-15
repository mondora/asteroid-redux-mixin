import {start, ready, stop, fail} from "../private-actions/subscriptions";

export function subscribe (asteroid, dispatch, [name, ...args]) {
    dispatch(start(name));
    asteroid.subscribe(name, ...args)
        .on("ready", () => dispatch(
            ready(name)
        ))
        .on("stop", () => dispatch(
            stop(name)
        ))
        .on("error", ({error}) => dispatch(
            fail(name, new Error(error))
        ));
}
