`apollo-cache-redux-immutable` is a cache implementation backed by Redux for Apollo Client 2.0.

It is forked from [apollo-cache-redux](https://github.com/rportugal/apollo-cache-redux), so most credit belongs there, but I'm not entirely sure if this is suitable for merging upstream as yet.

# Installation
```javascript
npm install elandesign/apollo-cache-redux-immutable --save
```

After installing the package:
```js
import { ReduxCache, apolloReducer } from 'apollo-cache-redux-immutable';
import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

const store = createStore(
    combineReducers({
        apollo: apolloReducer
        ...otherReducers
    })
);

const cache = new ReduxCache({ store });

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});
```

The following options are accepted for `ReduxCache`:
* `store`. An existing Redux store. If you don't have one, please create it as per the example above.
* `reduxRootSelector` (optional). Customises the reducer name for the cache (default: `apollo`).
* Other options accepted by `InMemoryCache`, to customise the underlying `InMemoryCache` (e.g. `fragmentMatcher`).
