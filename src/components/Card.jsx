// import { useState } from "react";
import "../styles/card.css";
import { useCart } from "../Context/CartContext";
export default function Card(props) {
  const { cart, incrementToCart, decrementFromCart } = useCart();

  const retrieveCount = (menuItem) => {
    const found = cart.find((item) => item.id == menuItem.id);
    return found ? found.count : 0;
  };
  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${props.menuItem.image})` }}
    >
      <div className="infoContainer">
        <h4>{props.menuItem.title}</h4>
        <h5>{props.description}</h5>
        <div className="purchaseInfo">
          <h5>$5 Price</h5>
          <div className="buttonContainer">
            <button onClick={() => decrementFromCart(props.menuItem)}>-</button>
            <span>{retrieveCount(props.menuItem)}</span>
            <button onClick={() => incrementToCart(props.menuItem)}>+</button>
            {/* <button onClick={incrementToCart(props.menuItem)}>Add to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
