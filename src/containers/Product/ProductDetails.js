import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Grid, Box, Chip, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { getProduct } from "Store/product/actions";
import { NotFound } from "../../Components/NotFound";
import Currency from "Components/Currency";
import Star from "@material-ui/icons/Star";

function ProductDetails({ match, product, getProductDetails }) {
  useEffect(() => {
    getProductDetails(match.params.id);

    return () => {};
  }, [getProductDetails, match.params.id]);

  const { title, price, quality, image, desc } = product || {};
  return (
    <Grid>
      <NavLink to="/"> Go Back </NavLink>
      {!product && <NotFound />}
      {product && (
        <Grid className="product_details">
          <Box className="product-wrapper">
            <img alt={title} src={image} className="product-image" />
          </Box>
          <Box>
            <h3> {title} </h3>
            <Chip
              label={`Ratings ${quality}`}
              clickable
              variant="outlined"
              color="primary"
              onDelete={() => {}}
              deleteIcon={<Star />}
            />
            <h4>
              <Currency value={price} />
            </h4>

            <div className="product-desc">{desc}</div>

            <div className="paddingt10">
              <Button color="primary" variant="contained" size="large">
                Buy now
              </Button>
            </div>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetails: (productId) => dispatch(getProduct(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
