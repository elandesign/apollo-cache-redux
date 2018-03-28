import { Reducer } from 'redux';
import { fromJS } from 'immutable';
import {
    APOLLO_OVERWRITE,
    APOLLO_RESET,
    APOLLO_WRITE,
    APOLLO_DELETE,
} from "./constants";

const initialState: any = fromJS({});

export function apolloReducer(state = initialState, action: any): Reducer<any> {
    switch(action.type) {
        case APOLLO_RESET:
            return initialState;
        case APOLLO_OVERWRITE:
            return fromJS(action.data);
        case APOLLO_WRITE:
            return state.mergeDeep(action.data);
        case APOLLO_DELETE:
            return state.delete(action.data);
        default:
            return state;
    }
}
