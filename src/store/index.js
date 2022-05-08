import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { genreReducer, productReducer, cartReducer } from './reducers/index';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  genres: genreReducer,
  products: productReducer,
  cart: cartReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
