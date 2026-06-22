import { useState } from "react";
import { CartContext } from "./CartContext.jsx";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
      if (itemExist.count > 1) {
        setCart(
          cart.map((cartItem) =>
            cartItem.id == itemToRemove.id
              ? { ...cartItem, count: cartItem.count - 1 }
              : cartItem,
          ),
        );
      } else {
        removeFromCart(itemToRemove);
      }
    } else {
      return;
    }
  };

  const cartBehavDisplay = (menuItem) => {
    if (!itemExist(menuItem)) {
      incrementToCart(menuItem);
    } else {
      removeFromCart(menuItem);
    }
  };

  const itemExist = (menuItem) => {
    return cart.find((item) => item.id == menuItem.id);
  };

  const retrieveCount = (menuItem) => {
    const found = cart.find((item) => item.id == menuItem.id);
    return found ? found.count : 0;
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((cartItem) => cartItem.id != itemToRemove.id));
  };

  const totalCartCount = () => {
    return cart.reduce((count, item) => count + item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementToCart,
        decrementFromCart,
        totalCartCount,
        removeFromCart,
        retrieveCount,
        cartBehavDisplay,
        itemExist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
