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

  const incrementToCart = (itemToAdd) => {
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

  const decrementFromCart = (itemToRemove) => {
    const itemExist = cart.find((item) => item.id == itemToRemove.id);
    if (itemExist) {
      if (itemExist.count >= 2) {
        setCart(
          cart.map((cartItem) =>
            cartItem.id == itemToRemove.id
              ? { ...cartItem, count: cartItem.count - 1 }
              : cartItem,
          ),
        );
      } else {
        setCart(cart.filter((cartItem) => cartItem.id != itemToRemove.id));
      }
    } else {
      return;
    }
  };

  const totalCartCount = () => {
    return cart.reduce((count, item) => count + item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        inventory,
        incrementToCart,
        decrementFromCart,
        error,
        loading,
        totalCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
