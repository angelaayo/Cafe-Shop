// import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import "../styles/ShopPage.css";
import data from "../data.json";

export default function ShopPage() {
  return (
    <>
      <div className="shopContainer">
        {data.map((menuItem) => (
          <div
            to={menuItem.title.toLowerCase()}
            className="cardContainer-shop"
            key={menuItem.id}
          >
            <Card
              menuItem={menuItem}
              description={menuItem.description
                .split(" ")
                .slice(0, 4)
                .join(" ")}
              to={menuItem.title.toLowerCase()}
            />
          </div>
        ))}
      </div>
    </>
  );
}
