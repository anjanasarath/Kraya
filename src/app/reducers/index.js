import { combineReducers } from 'redux';
import cart from './cart';
import stock from './stock';
import category from './category';

const allReducers = combineReducers({
  cart: cart,
  categories: category,
  stock: stock,
});

export default allReducers;
