import {
    ASTEROID_PRIVATE_COLLECTION_ADD,
    ASTEROID_PRIVATE_COLLECTION_CHANGE,
    ASTEROID_PRIVATE_COLLECTION_REMOVE
} from "../private-actions/collections";

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

function collection (state = {}, {type, payload}) {
    switch (type) {
    case ASTEROID_PRIVATE_COLLECTION_ADD:
        return add(state, payload);
    case ASTEROID_PRIVATE_COLLECTION_CHANGE:
        return change(state, payload);
    case ASTEROID_PRIVATE_COLLECTION_REMOVE:
        return remove(state, payload);
    default:
        return state;
    }
}

export function collections (state = {}, action) {
    const {type, payload} = action;
    switch (type) {
    case ASTEROID_PRIVATE_COLLECTION_ADD:
    case ASTEROID_PRIVATE_COLLECTION_CHANGE:
    case ASTEROID_PRIVATE_COLLECTION_REMOVE:
        const {collectionName} = payload;
        return {
            ...state,
            [collectionName]: collection(state[collectionName], action)
        };
    default:
        return state;
    }
}
