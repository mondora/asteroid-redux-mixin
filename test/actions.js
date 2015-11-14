import {expect} from "chai";

import * as actions from "../src/actions";

describe("actions module", () => {
    it("exports five action types and five action creators", () => {
        expect(actions.COLLECTION_ADDED).to.equal("COLLECTION_ADDED");
        expect(actions.COLLECTION_CHANGED).to.equal("COLLECTION_CHANGED");
        expect(actions.COLLECTION_REMOVED).to.equal("COLLECTION_REMOVED");
        expect(actions.LOGGED_IN).to.equal("LOGGED_IN");
        expect(actions.LOGGED_OUT).to.equal("LOGGED_OUT");
        expect(actions.add).to.be.a("function");
        expect(actions.change).to.be.a("function");
        expect(actions.remove).to.be.a("function");
        expect(actions.logIn).to.be.a("function");
        expect(actions.logOut).to.be.a("function");
    });
});

describe("add", () => {
    it("returns a FSA with the correct payload", () => {
        const ret_1 = actions.add({
            collection: "collection",
            id: "id",
            fields: {
                key: "value"
            }
        });
        expect(ret_1).to.deep.equal({
            type: "COLLECTION_ADDED",
            payload: {
                collection: "collection",
                id: "id",
                fields: {
                    key: "value"
                }
            }
        });
        const ret_2 = actions.add({
            collection: "collection",
            id: "-id",
            fields: {
                key: "value"
            }
        });
        expect(ret_2).to.deep.equal({
            type: "COLLECTION_ADDED",
            payload: {
                collection: "collection",
                id: "id",
                fields: {
                    key: "value"
                }
            }
        });
    });
});

describe("change", () => {
    it("returns a FSA with the correct payload", () => {
        const ret_1 = actions.change({
            collection: "collection",
            id: "id",
            fields: {
                key: "value"
            },
            cleared: ["key"]
        });
        expect(ret_1).to.deep.equal({
            type: "COLLECTION_CHANGED",
            payload: {
                collection: "collection",
                id: "id",
                fields: {
                    key: "value"
                },
                cleared: ["key"]
            }
        });
        const ret_2 = actions.change({
            collection: "collection",
            id: "-id",
            fields: {
                key: "value"
            },
            cleared: ["key"]
        });
        expect(ret_2).to.deep.equal({
            type: "COLLECTION_CHANGED",
            payload: {
                collection: "collection",
                id: "id",
                fields: {
                    key: "value"
                },
                cleared: ["key"]
            }
        });
    });
});

describe("remove", () => {
    it("returns a FSA with the correct payload", () => {
        const ret_1 = actions.remove({
            collection: "collection",
            id: "id"
        });
        expect(ret_1).to.deep.equal({
            type: "COLLECTION_REMOVED",
            payload: {
                collection: "collection",
                id: "id"
            }
        });
        const ret_2 = actions.remove({
            collection: "collection",
            id: "-id"
        });
        expect(ret_2).to.deep.equal({
            type: "COLLECTION_REMOVED",
            payload: {
                collection: "collection",
                id: "id"
            }
        });
    });
});

describe("logIn", () => {
    it("returns a FSA with the correct payload", () => {
        const ret = actions.logIn("userId");
        expect(ret).to.deep.equal({
            type: "LOGGED_IN",
            payload: {
                userId: "userId"
            }
        });
    });
});

describe("logOut", () => {
    it("returns a FSA with the correct payload", () => {
        const ret = actions.logOut();
        expect(ret).to.deep.equal({
            type: "LOGGED_OUT"
        });
    });
});
