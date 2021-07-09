
import { createStore, applyMiddleware   } from 'redux';
import productReducer from './product/reducer';

import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './rootsaga';
import loadProducts from './product/saga'

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)

const ProductStore = createStore(
  productReducer,
  middlewareEnhancer
);

sagaMiddleware.run(loadProducts);

export {
  ProductStore
}