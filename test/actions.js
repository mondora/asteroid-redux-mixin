// import {expect} from "chai";
//
// import * as actions from "../src/actions";
//
// describe("actions module", () => {
//     it("exports five action types and five action creators", () => {
//         expect(actions.ASTEROID_PRIVATE_COLLECTION_ADD).to.equal("ASTEROID_PRIVATE_COLLECTION_ADD");
//         expect(actions.ASTEROID_PRIVATE_COLLECTION_CHANGE).to.equal("ASTEROID_PRIVATE_COLLECTION_CHANGE");
//         expect(actions.ASTEROID_PRIVATE_COLLECTION_REMOVE).to.equal("ASTEROID_PRIVATE_COLLECTION_REMOVE");
//         expect(actions.ASTEROID_PRIVATE_LOGGED_IN).to.equal("ASTEROID_PRIVATE_LOGGED_IN");
//         expect(actions.ASTEROID_PRIVATE_LOGGED_OUT).to.equal("ASTEROID_PRIVATE_LOGGED_OUT");
//         expect(actions.add).to.be.a("function");
//         expect(actions.change).to.be.a("function");
//         expect(actions.remove).to.be.a("function");
//         expect(actions.logIn).to.be.a("function");
//         expect(actions.logOut).to.be.a("function");
//     });
// });
//
// describe("add", () => {
//     it("returns a FSA with the correct payload", () => {
//         const ret_1 = actions.add({
//             collection: "collection",
//             id: "id",
//             fields: {
//                 key: "value"
//             }
//         });
//         expect(ret_1).to.deep.equal({
//             type: "ASTEROID_PRIVATE_COLLECTION_ADD",
//             payload: {
//                 collection: "collection",
//                 id: "id",
//                 fields: {
//                     key: "value"
//                 }
//             }
//         });
//         const ret_2 = actions.add({
//             collection: "collection",
//             id: "-id",
//             fields: {
//                 key: "value"
//             }
//         });
//         expect(ret_2).to.deep.equal({
//             type: "ASTEROID_PRIVATE_COLLECTION_ADD",
//             payload: {
//                 collection: "collection",
//                 id: "id",
//                 fields: {
//                     key: "value"
//                 }
//             }
//         });
//     });
// });
//
// describe("change", () => {
//     it("returns a FSA with the correct payload", () => {
//         const ret_1 = actions.change({
//             collection: "collection",
//             id: "id",
//             fields: {
//                 key: "value"
//             },
//             cleared: ["key"]
//         });
//         expect(ret_1).to.deep.equal({
//             type: "ASTEROID_PRIVATE_COLLECTION_CHANGE",
//             payload: {
//                 collection: "collection",
//                 id: "id",
//                 fields: {
//                     key: "value"
//                 },
//                 cleared: ["key"]
//             }
//         });
//         const ret_2 = actions.change({
//             collection: "collection",
//             id: "-id",
//             fields: {
//                 key: "value"
//             },
//             cleared: ["key"]
//         });
//         expect(ret_2).to.deep.equal({
//             type: "ASTEROID_PRIVATE_COLLECTION_CHANGE",
//             payload: {
//                 collection: "collection",
//                 id: "id",
//                 fields: {
//                     key: "value"
//                 },
//                 cleared: ["key"]
//             }
//         });
//     });
// });
//
// describe("remove", () => {
//     it("returns a FSA with the correct payload", () => {
//         const ret_1 = actions.remove({
//             collection: "collection",
//             id: "id"
//         });
//         expect(ret_1).to.deep.equal({
//             type: "ASTEROID_PRIVATE_COLLECTION_REMOVE",
//             payload: {
//                 collection: "collection",
//                 id: "id"
//             }
//         });
//         const ret_2 = actions.remove({
//             collection: "collection",
//             id: "-id"
//         });
//         expect(ret_2).to.deep.equal({
//             type: "ASTEROID_PRIVATE_COLLECTION_REMOVE",
//             payload: {
//                 collection: "collection",
//                 id: "id"
//             }
//         });
//     });
// });
//
// describe("logIn", () => {
//     it("returns a FSA with the correct payload", () => {
//         const ret = actions.logIn("userId");
//         expect(ret).to.deep.equal({
//             type: "ASTEROID_PRIVATE_LOGGED_IN",
//             payload: {
//                 userId: "userId"
//             }
//         });
//     });
// });
//
// describe("logOut", () => {
//     it("returns a FSA with the correct payload", () => {
//         const ret = actions.logOut();
//         expect(ret).to.deep.equal({
//             type: "ASTEROID_PRIVATE_LOGGED_OUT"
//         });
//     });
// });
