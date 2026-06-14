import { useState, useEffect } from "react";
import { CartContext } from "./CartContext.jsx";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const addToCart = (itemToAdd) => {
    const itemExist = cart.find((item) => item.id == itemToAdd.id);
    if (itemExist) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id == itemToAdd.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, { ...itemToAdd, count: 1 }]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, inventory, addToCart, error, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};
