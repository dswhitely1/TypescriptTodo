import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { taskReducer as taskList } from './task/taskReducer';

const rootReducer = combineReducers({ taskList });
const middleware = [logger];
const enhancers = applyMiddleware(...middleware);

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools(enhancers));
