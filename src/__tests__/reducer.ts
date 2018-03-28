import { apolloReducer } from '../reducer';
import {APOLLO_RESET, APOLLO_OVERWRITE, APOLLO_WRITE, APOLLO_DELETE} from "../constants";
import { fromJS } from 'immutable';

describe('apollo reducer', () => {
    it('returns the initial state', () => {
       expect(apolloReducer(undefined, {})).toEqual(fromJS({}));
    });

    it('handles APOLLO_RESET', () => {
        const state = fromJS({
            some: 'stuff'
        });

        const action = {
            type: APOLLO_RESET
        };

        expect(apolloReducer(state, action)).toEqual(fromJS({}));
    });

    it('handles APOLLO_OVERWRITE', () => {
        const state = fromJS({
            existing: 'stuff'
        });

        const action = {
            type: APOLLO_OVERWRITE,
            data: {
                some: 'stuff'
            }
        };

        expect(apolloReducer(state, action)).toEqual(fromJS({ some: 'stuff' }));
    });

    it('handles APOLLO_WRITE', () => {
        const state = fromJS({
            some: 'stuff'
        });

        const action = {
            type: APOLLO_WRITE,
            data: {
                more: 'stuff'
            }
        };

        expect(apolloReducer(state, action)).toEqual(fromJS({
            some: 'stuff',
            more: 'stuff'
        }));

    });


    it('handles APOLLO_DELETE', () => {
        const state = fromJS({
            some: 'stuff',
            more: 'stuff'
        });

        const action = {
            type: APOLLO_DELETE,
            data: 'more'
        };

        expect(apolloReducer(state, action)).toEqual(fromJS({
            some: 'stuff'
        }));
    });
});
