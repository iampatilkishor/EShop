import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    PRODUCTS_LOADED
} from '../Constants'

const initialState = {
    products: [],
    selectedProduct: null,
    currency: '$',
    loadingProducts: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                loadingProducts: true
            }

        case PRODUCTS_LOADED:
            return {
                ...state,
                loadingProducts: false,
                products: action.prductList
            }

        case GET_PRODUCT : 
        return {
            ...state,
            selectedProduct: state.products.find( product => product.id === +action.productId)
        }

        default:
            return state;

    }

}

export default productReducer;