import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a , b) => a + parseFloat(b.price), 0)


  return (
    <>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li key={item[1]}>
            {item.name} - {item.price}
          </li>
        ))}

      <h2>Total : $ { total }</h2>
    </>
  );
};

export default Cart;
