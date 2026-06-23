import { useCart } from "../Context/CartContext";
import CartCard from "../components/CartCard";
import CartTotal from "../components/CartTotal";
import "../styles/CartView.css";
export default function CartPage() {
  const { totalCartCount, cart } = useCart();
  return (
    <div className="cartPage">
      <h1>Cart view</h1>
      <h2>{totalCartCount()}</h2>
      <div>
        {cart.length == 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          <div className="cartView">
            <div className="cartItems">
              {cart.map((item) => (
                <CartCard key={item.id} cartItem={item} />
              ))}
            </div>
            <CartTotal />
          </div>
        )}
      </div>
    </div>
  );
}
