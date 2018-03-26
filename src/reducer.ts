import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import {
    APOLLO_OVERWRITE,
    APOLLO_RESET,
    APOLLO_WRITE,
    APOLLO_DELETE
} from "./constants";

const initialState: any = {};

export function apolloReducer(state = initialState, action: any): Reducer<any> {
    switch(action.type) {
        case APOLLO_RESET:
            return fromJS(initialState);
        case APOLLO_OVERWRITE:
            return state.merge(action.data);
        case APOLLO_WRITE:
            return state.merge(action.data);
        case APOLLO_DELETE:
            return state.delete(action.data);
        default:
            return state;
    }
}
