import { put, takeEvery } from 'redux-saga/effects'
import { productsLoaded } from './actions';
import {
    GET_ALL_PRODUCTS
} from '../Constants'

import executeAPI from 'API/http';

function* getProducts() {
    
    const requestURL = 'https://fakestoreapi.com/products';
    try{
        const { data, error} = yield executeAPI(
            'GET',
            requestURL
        )
        if(error){
            // handle error 
        }else if(data){
            // return data
            yield put(productsLoaded(data))
        }
    } catch (errors) {
        console.log('API error occured', errors);
    }
}

export default function* loadProducts() {
    yield  takeEvery( GET_ALL_PRODUCTS, getProducts);
}