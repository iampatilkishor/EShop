
import { createStore } from 'redux';
import productReducer from './product/reducer';


const ProductStore = createStore(
  productReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {
  ProductStore
}