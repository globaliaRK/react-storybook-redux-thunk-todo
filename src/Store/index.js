const { createStore, applyMiddleware, compose } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: reducer } = require('./Reduces');


// export default () => createStore(reducer, enhancer)

export default function AppStore() {
    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(thunk));

    const store = createStore(reducer, enhancer);
    return store;
}