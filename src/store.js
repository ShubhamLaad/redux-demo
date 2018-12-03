import { applyMiddleware, createStore } from 'redux';

// middlewares
import logger from 'redux-logger';

import reducers from './reducers/reducer';

const middlewares = applyMiddleware(logger);

const store = createStore(reducers, middlewares);

export default store;