// import chai, {expect} from "chai";
// import {EventEmitter} from "events";
// import sinon from "sinon";
// import sinonChai from "sinon-chai";
//
// chai.use(sinonChai);
//
// import * as mixin from "../src/mixin";
//
// describe("mixin module", () => {
//     it("exports an init function", () => {
//         expect(mixin.init).to.be.a("function");
//     });
// });
//
// describe("init", () => {
//     describe("event listeners binding", () => {
//         const instance = new EventEmitter();
//         instance.ddp = new EventEmitter();
//         const reduxStore = {
//             dispatch: sinon.spy()
//         };
//         beforeEach(() => {
//             reduxStore.dispatch.reset();
//         });
//         it("added", () => {
//             mixin.init.call(instance, {reduxStore});
//             instance.ddp.emit("added", {
//                 collection: "collection",
//                 id: "id",
//                 fields: {
//                     key: "value"
//                 }
//             });
//             expect(reduxStore.dispatch).to.have.been.calledWith({
//                 type: "ASTEROID_COLLECTION_ADD",
//                 payload: {
//                     collection: "collection",
//                     id: "id",
//                     fields: {
//                         key: "value"
//                     }
//                 }
//             });
//         });
//         it("changed", () => {
//             mixin.init.call(instance, {reduxStore});
//             instance.ddp.emit("changed", {
//                 collection: "collection",
//                 id: "id",
//                 fields: {
//                     key: "value"
//                 },
//                 cleared: ["key"]
//             });
//             expect(reduxStore.dispatch).to.have.been.calledWith({
//                 type: "ASTEROID_COLLECTION_CHANGE",
//                 payload: {
//                     collection: "collection",
//                     id: "id",
//                     fields: {
//                         key: "value"
//                     },
//                     cleared: ["key"]
//                 }
//             });
//         });
//         it("removed", () => {
//             mixin.init.call(instance, {reduxStore});
//             instance.ddp.emit("removed", {
//                 collection: "collection",
//                 id: "id"
//             });
//             expect(reduxStore.dispatch).to.have.been.calledWith({
//                 type: "ASTEROID_COLLECTION_REMOVE",
//                 payload: {
//                     collection: "collection",
//                     id: "id"
//                 }
//             });
//         });
//     });
// });
