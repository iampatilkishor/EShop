import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import { getAllProducts } from 'store/product/action'
import ProductCard from "../components/Product/ProductCard";


function ProductList({ history, products = [], getProducts }) {

  useEffect(() => {
    getProducts()

    return () => {
    }

  }, [getProducts])

  const showDetails = (_id) => {
    history.push(`/product/${_id}`);
  };

  return (
    <Grid
      className="wrapper"
    >
      {products.map((product) => (
          <ProductCard key={product._id}  {...product} showDetails={showDetails} />
      ))}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts : () => dispatch(getAllProducts)
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductList);
