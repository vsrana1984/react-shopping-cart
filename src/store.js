import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducers
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

