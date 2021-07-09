import React from "react";
import Chip from "@material-ui/core/Chip";
import Star from "@material-ui/icons/Star";
import { Card, Button, Box } from "@material-ui/core";
import Currency from "Components/Currency";
import "Styles/Product.css";

function ProductCard({ id, title, price, quality, image, showDetails, desc }) {
  return (
    <Box className="product-card">
      <Box className="product-wrapper">
        <img alt={title} src={image} className="product-image" />
      </Box>
      <Box className="product-info">
        <div className="product-info-row">
          <h3> {title} </h3>
          <h4>
            <Currency value={price} />
          </h4>
        </div>

        <div className="product-more-info">
          <Chip
            label={`Ratings ${quality}`}
            clickable
            variant="outlined"
            color="primary"
            onDelete={() => {}}
            deleteIcon={<Star />}
          />
          <Button color="primary" size="small" onClick={() => showDetails(id)}>
            View More...
          </Button>
        </div>
        <div className="product-action-row paddingt10">
          <Button color="primary" variant="contained">
            Add to Cart
          </Button>
          <Button color="primary" variant="contained">
            Buy now
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default ProductCard;
