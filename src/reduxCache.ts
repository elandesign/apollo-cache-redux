import {
    Cache,
} from 'apollo-cache';
import {
    ApolloReducerConfig,
    InMemoryCache,
    writeResultToStore
} from 'apollo-cache-inmemory';

import {
    ReduxNormalizedCacheConfig,
    reduxNormalizedCacheFactory
} from './reduxNormalizedCache';

export type ReduxCacheConfig = ApolloReducerConfig & ReduxNormalizedCacheConfig;

export class ReduxCache extends InMemoryCache {
    constructor(config: ReduxCacheConfig) {
        super(config);
        // Overwrite the in-memory data object
        this.data = reduxNormalizedCacheFactory(config);
    }

    public write(write: Cache.WriteOptions): void {
        writeResultToStore({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
        });

        this.broadcastWatches();
    }
}
