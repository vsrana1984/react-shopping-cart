import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
import { orderReducers } from './reducers/orderReducers';
import { userLoginReducer } from './reducers/userReducers';
import messageReducers from './reducers/messageReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducers,
    order: orderReducers,
    user: userLoginReducer,
    message: messageReducers,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

