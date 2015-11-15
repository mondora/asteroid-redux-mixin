function normalizeId (id) {
    /*
    *   When elements of a collection have an ObjectId as _id, the
    *   stringification of the ObjectId meteor does before sending the element
    *   to the client prepends a dash `-` to the normal stringification of the
    *   _id. See https://github.com/meteor/meteor/issues/1679 for details.
    */
    return (id[0] === "-") ? id.slice(1) : id;
}

function createCollectionAction (type) {
    return message => ({
        type,
        payload: {...message, id: normalizeId(message.id)}
    });
}

export const ASTEROID_COLLECTION_ADD = "ASTEROID_COLLECTION_ADD";
export const ASTEROID_COLLECTION_CHANGE = "ASTEROID_COLLECTION_CHANGE";
export const ASTEROID_COLLECTION_REMOVE = "ASTEROID_COLLECTION_REMOVE";

export const add = createCollectionAction(ASTEROID_COLLECTION_ADD);
export const change = createCollectionAction(ASTEROID_COLLECTION_CHANGE);
export const remove = createCollectionAction(ASTEROID_COLLECTION_REMOVE);
