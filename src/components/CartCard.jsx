import "../styles/CartView.css";
import { Link } from "react-router";
import { useCart } from "../Context/CartContext";
import {Icon} from '@mdi/react';
import { mdiBasketRemoveOutline } from '@mdi/js';
export default function CartCard(props) {
  const { incrementToCart, decrementFromCart, removeFromCart } = useCart();
  return (
    <div className="cartCard">
      <Link to={`/shop/${props.cartItem.title.toLowerCase()}`} className="link">
        <img src={props.cartItem.image}></img>
      </Link>
      <div className="cartInfo">
        <div className="header">
          <h2>{props.cartItem.title}</h2>
          <h3>Quantity: {props.cartItem.count}</h3>
        </div>
        <h3>{props.cartItem.description.split(" ").slice(0, 9).join(" ")}</h3>

        <h3>Price: ${props.cartItem.price}</h3>
        <h3>Ingredients: </h3>
        <ul className="ingredients">
          {props.cartItem.ingredients.map((ingredient, index) => (
            <li key={index}><h5>{ingredient}</h5></li>
          ))}
        </ul>
        <div className="buttons">
          <div className="buttons1">
            <button
              className="bt1"
              onClick={() => incrementToCart(props.cartItem)}
            >
              +
            </button>
            <button
              className="bt1"
              onClick={() => decrementFromCart(props.cartItem)}
            >
              -
            </button>
          </div>
          <div>
            <button onClick={() => removeFromCart(props.cartItem)}>
              <Icon path={mdiBasketRemoveOutline} size={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
