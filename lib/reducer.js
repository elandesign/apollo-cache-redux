"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var constants_1 = require("./constants");
var initialState = immutable_1.fromJS({});
function apolloReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.APOLLO_RESET:
            return initialState;
        case constants_1.APOLLO_OVERWRITE:
            return immutable_1.fromJS(action.data);
        case constants_1.APOLLO_WRITE:
            return state.mergeDeep(action.data);
        case constants_1.APOLLO_DELETE:
            return state.delete(action.data);
        default:
            return state;
    }
}
exports.apolloReducer = apolloReducer;
//# sourceMappingURL=reducer.js.map