import AsteroidError from "../common/asteroid-error";
import {start, success, fail} from "../private-actions/methods";

export function apply (asteroid, dispatch, [name, args]) {
    dispatch(start(name));
    asteroid.apply(name, args)
        .then(result => dispatch(
            success(name, result)
        ))
        .catch(error => dispatch(
            fail(name, new AsteroidError(error))
        ));
}

export function call (asteroid, dispatch, [name, ...args]) {
    apply(asteroid, dispatch, [name, args]);
}
