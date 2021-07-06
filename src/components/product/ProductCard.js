import React from "react";
import Chip from "@material-ui/core/Chip";
import Star from "@material-ui/icons/Star";
import { Card,  Button } from "@material-ui/core";
import Currency from "components/Currency";
import "styles/product-style.css";

function ProductCard({ _id, name, price, quality, image, showDetails, desc }) {
  return (
    <Card className="product-wrapper">
      <div>
        <img alt={name} src={image} className="product-image" />
      </div>

        <div className="product-info-row">
          <h3> {name} </h3>
          <h4>
            <Currency value={price} />
          </h4>
        </div>

        <div className="product-action-row">
          <Chip
            label={`Ratings ${quality}`}
            clickable
            variant="outlined"
            color="primary"
            onDelete={() => {}}
            deleteIcon={<Star />}
          />
            <Button
              color="primary"
              size="small"
              onClick={() => showDetails(_id)}
            >
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
    </Card>
  );
}

export default ProductCard;
