import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT
} from './constant'

export const getAllProducts = {
        type: GET_ALL_PRODUCTS
    }    

export function getProduct (productId) {
   return {
        type: GET_PRODUCT,
        productId: productId
    }    
}

