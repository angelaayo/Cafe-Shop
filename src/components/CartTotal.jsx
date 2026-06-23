import { useCart } from "../Context/CartContext";
export default function CartTotal() {
  const { cart } = useCart();

  const findPrice = (cartItem) => {
    return (cartItem.price * cartItem.count).toFixed(2);
  };

  const findTotal = () => {
    return cart.reduce(
      (total, cartItem) => total + cartItem.count * cartItem.price,
      0,
    );
  };
  return (
    <div className="cartTotal">
      <h2>Summary</h2>
      <div className="content">
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="item">
            <h3>
              {cartItem.title} ({cartItem.count})
            </h3>
            <h3>{findPrice(cartItem)}</h3>
          </div>
        ))}
      </div>
      <div>total: {findTotal().toFixed(2)}</div>
    </div>
  );
}
