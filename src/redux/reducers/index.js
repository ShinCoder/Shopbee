import { combineReducers } from 'redux';
import userReducer from './User';
import systemReducer from './System';
import cartReducer from './Cart';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  system: systemReducer
});

export default rootReducer;
