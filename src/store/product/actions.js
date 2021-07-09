import { GET_ALL_PRODUCTS, GET_PRODUCT, PRODUCTS_LOADED } from "../Constants";

export function getAllProducts() {
    return  {
        type: GET_ALL_PRODUCTS,
      };      
}

export function getProduct(productId) {
  return {
    type: GET_PRODUCT,
    productId,
  };
}


export function productsLoaded(prductList) {
    return {
      type: PRODUCTS_LOADED,
      prductList
    };
  }
  