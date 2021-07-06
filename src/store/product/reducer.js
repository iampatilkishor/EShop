import { products } from "../../store/products";
import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT
} from './constant'

const initialState = {
    products: [],
    selectedProduct: null,
    currency: '$'
}

const productReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...newState,
                products
            }

        case GET_PRODUCT : 
        return {
            ...newState,
            selectedProduct: newState.products.find( product => product._id === action.productId)
        }

        default:
            return newState;

    }

}

export default productReducer;