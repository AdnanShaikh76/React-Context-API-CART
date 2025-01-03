import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const Item = (props) => {
  const cart = useContext(CartContext);

  console.log("cart", cart);
  return (
    <>
      <h3>{props.name}</h3>
      <h5>$ {props.price}</h5>
      <button
        onClick={() =>
          cart.setitems([
            ...cart.items,
            { name: props.name, price: props.price},
          ])
        }
      >
        Add To Cart
      </button>
    </>
  );
};

export default Item;
