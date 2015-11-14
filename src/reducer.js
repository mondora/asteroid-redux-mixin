import {
    COLLECTION_ADDED,
    COLLECTION_CHANGED,
    COLLECTION_REMOVED,
    LOGGED_IN,
    LOGGED_OUT
} from "./actions";

function add (collection, {id, fields = {}}) {
    const element = {...fields, _id: id};
    return {...collection, [id]: element};
}

function change (collection, {id, fields = {}, cleared = []}) {
    const element = {...collection[id], fields};
    cleared.forEach(key => delete element[key]);
    return {...collection, [id]: element};
}

function remove (collection, {id}) {
    collection = {...collection};
    delete collection[id];
    return collection;
}

export function collection (state = {}, {type, payload}) {
    switch (type) {
    case COLLECTION_ADDED:
        return add(state, payload);
    case COLLECTION_CHANGED:
        return change(state, payload);
    case COLLECTION_REMOVED:
        return remove(state, payload);
    default:
        return state;
    }
}

export function collections (state = {}, action) {
    const {type, payload} = action;
    switch (type) {
    case COLLECTION_ADDED:
    case COLLECTION_CHANGED:
    case COLLECTION_REMOVED:
        const {collectionName} = payload;
        return {
            ...state,
            [collectionName]: collection(state[collectionName], action)
        };
    default:
        return state;
    }
}

export function loggedIn (state = false, {type}) {
    switch (type) {
    case LOGGED_IN:
        return true;
    case LOGGED_OUT:
        return false;
    default:
        return state;
    }
}

export function userId (state = null, {type, payload}) {
    switch (type) {
    case LOGGED_IN:
        return payload.userId;
    case LOGGED_OUT:
        return null;
    default:
        return state;
    }
}
