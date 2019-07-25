import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

export default   () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger))
};

// export default (preloadedState = {}) => createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
// );