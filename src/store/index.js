import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { genreReducer } from './reducers/index';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  genres: genreReducer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
