import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider, compose } from 'react-redux'

import { startup } from './redux/startup/actions';
import reducers from './redux';
import { isClient } from './utils/client';

const combinedReducers = combineReducers({ ...reducers })
const composeEnhancers = typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : f => f;

export default ({ element }) => {
    const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk))
) // initialState
    store.dispatch(startup());
    return <Provider store={store}>{element}</Provider>
}