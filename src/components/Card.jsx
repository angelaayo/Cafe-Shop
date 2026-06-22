import "../styles/card.css";
import { Link } from "react-router";
import { useCart } from "../Context/CartContext";
export default function Card(props) {
  const {
    incrementToCart,
    decrementFromCart,
    retrieveCount,
    itemExist,
    cartBehavDisplay,
  } = useCart();

  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${props.menuItem.image})` }}
    >
      <div className="infoContainer">
        <div className="span1">
          <h4>{props.menuItem.title}</h4>
          <Link to={props.to}> ⮞</Link>
        </div>
        <h5>{props.description}</h5>
        <div className="purchaseInfo">
          <h5>${props.menuItem.price}</h5>
          <div className="buttonContainer">
            <button onClick={() => decrementFromCart(props.menuItem)}>-</button>
            <span>{retrieveCount(props.menuItem)}</span>
            <button onClick={() => incrementToCart(props.menuItem)}>+</button>
            <button onClick={() => cartBehavDisplay(props.menuItem)}>
              {itemExist(props.menuItem) ? "Remove Item" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
