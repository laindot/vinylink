import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  genreReducer,
  productReducer,
  cartReducer,
  authReducer,
  orderReducer,
  listingReducer,
} from './reducers/index';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  genres: genreReducer,
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer,
  listings: listingReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
