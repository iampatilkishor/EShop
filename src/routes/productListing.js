import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import { getAllProducts } from 'Store/product/actions'
import ProductCard from "../Containers/Product/ProductCard";
import Loader from 'Components/Loader'

function ProductList({ history, products = [], getProducts, loadingProducts }) {

  useEffect(() => {
    getProducts()

    return () => {
    }
  }, [getProducts])

  const showDetails = (id) => {
    history.push(`/product/${id}`);
  };

  if(loadingProducts){
    return <Loader />
  }

  return (
    <Grid
      className="wrapper"
    >
      {products.map((product) => (
          <ProductCard key={product.id}  {...product} showDetails={showDetails} />
      ))}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    loadingProducts: state.loadingProducts,
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts : () => dispatch(getAllProducts())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductList);
