
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, onAdd }) {
  const [quantity, setquantity] = useState(1);

  const decrease = () => {
    setquantity(quantity - 1);
  };
  const increase = () => {
    setquantity(quantity + 1);
  };

  return (
    <>
      <div>
        <Button
          className="button-cart btn-dark"
          disabled={quantity <= 1}
          onClick={decrease}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          className="button-cart btn-dark"
          disabled={quantity >= stock}
          onClick={increase}
        >
          +
        </Button>
        <br />
        
        <Link to="./shopcart">
        <Button disabled={stock <= 0} onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </Button>
        </Link>
      </div>
    </>
  );
}