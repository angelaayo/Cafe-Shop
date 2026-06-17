// import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import "../styles/ShopPage.css";
import { useCart } from "../Context/CartContext.jsx";

export default function ShopPage() {
  const { loading, error, inventory } = useCart();

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>There has been a server error</h1>;
  return (
    <>
      <h1>Catalog</h1>
      <div className="shopContainer">
        {inventory.map((menuItem) => (
          <div className="cardContainer-shop" key={menuItem.id}>
            <Card
              menuItem={menuItem}
              description={menuItem.description
                .split(" ")
                .slice(0, 4)
                .join(" ")}
            />
          </div>
        ))}
      </div>
    </>
  );
}
