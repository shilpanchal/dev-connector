// import { createStore, applyMiddleware } from 'redux';
// import { composeEnhancers } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const middleWare = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(applyMiddleware(...middleWare))
// );


import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(...middleWare)));

export default store;