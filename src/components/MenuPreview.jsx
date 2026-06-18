import "../styles/MenuPreview.css";
import { useCart } from "../Context/CartContext";
export default function MenuPreview(props) {
  const { retrieveCount, decrementFromCart, incrementToCart, cartBehavDisplay, itemExist } = useCart();
  return (
    <div className="menuPreview">
      <img src={props.menuItem.image}></img>
      <div className="detailsContainer">
        <h3>{props.menuItem.title}</h3>
        <h5>{props.menuItem.description}</h5>
        <h4>Price: $5</h4>
        <div className="buttonContainer">
          <button onClick={() => decrementFromCart(props.menuItem)}>-</button>
          <span>{retrieveCount(props.menuItem)}</span>
          <button onClick={() => incrementToCart(props.menuItem)}>+</button>
        </div>
        <button className = 'addToCart'onClick={() => cartBehavDisplay(props.menuItem)}>
          {itemExist(props.menuItem) ? "Remove Item" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
