import {expect} from "chai";

import * as reducers from "../src/reducers";

describe("loggedIn", () => {
    it("redux dummy event (test default state)", () => {
        const ret = reducers.loggedIn(undefined, {
            type: "@@redux/INIT"
        });
        expect(ret).to.equal(false);
    });
    it("unrelated event", () => {
        const state = {};
        const ret = reducers.loggedIn(state, {
            type: "UNRELATED_EVENT"
        });
        expect(ret === state).to.equal(true);
    });
    it("LOGGED_IN event", () => {
        const ret = reducers.loggedIn(undefined, {
            type: "LOGGED_IN"
        });
        expect(ret).to.equal(true);
    });
    it("LOGGED_OUT event", () => {
        const ret = reducers.loggedIn(undefined, {
            type: "LOGGED_OUT"
        });
        expect(ret).to.equal(false);
    });
});

describe("userId", () => {
    it("redux dummy event (test default state)", () => {
        const ret = reducers.userId(undefined, {
            type: "@@redux/INIT"
        });
        expect(ret === null).to.equal(true);
    });
    it("unrelated event", () => {
        const state = {};
        const ret = reducers.userId(state, {
            type: "UNRELATED_EVENT"
        });
        expect(ret === state).to.equal(true);
    });
    it("LOGGED_IN event", () => {
        const ret = reducers.userId(undefined, {
            type: "LOGGED_IN",
            payload: {
                userId: "userId"
            }
        });
        expect(ret).to.equal("userId");
    });
    it("LOGGED_OUT event", () => {
        const ret = reducers.userId(undefined, {
            type: "LOGGED_OUT"
        });
        expect(ret === null).to.equal(true);
    });
});

describe("collections", () => {
    it("redux dummy event (test default state)", () => {
        const ret = reducers.collections(undefined, {
            type: "@@redux/INIT"
        });
        expect(ret).to.deep.equal({});
    });
    it("unrelated event", () => {
        const state = {};
        const ret = reducers.collections(state, {
            type: "UNRELATED_EVENT"
        });
        expect(ret === state).to.equal(true);
    });
});
