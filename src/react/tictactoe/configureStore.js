import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './redux';

export default () => (
    createStore(
        rootReducer,
        applyMiddleware(logger)
    )
);
