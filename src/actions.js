function normalizeId (id) {
    /*
    *   When elements of a collection have an ObjectId as _id, the
    *   stringification of the ObjectId meteor does before sending the element
    *   to the client prepends a dash `-` to the normal stringification of the
    *   _id. See https://github.com/meteor/meteor/issues/1679 for details.
    */
    return (id[0] === "-") ? id.slice(1) : id;
}

function createAction (type) {
    return message => ({
        type,
        payload: {...message, id: normalizeId(message.id)}
    });
}

export const COLLECTION_ADDED = "COLLECTION_ADDED";
export const COLLECTION_CHANGED = "COLLECTION_CHANGED";
export const COLLECTION_REMOVED = "COLLECTION_REMOVED";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export const add = createAction(COLLECTION_ADDED);
export const change = createAction(COLLECTION_CHANGED);
export const remove = createAction(COLLECTION_REMOVED);
export function logIn (userId) {
    return {
        type: LOGGED_IN,
        payload: {userId}
    };
}
export function logOut () {
    return {
        type: LOGGED_OUT
    };
}
