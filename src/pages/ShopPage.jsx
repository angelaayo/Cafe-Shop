import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import "../styles/ShopPage.css";

export default function ShopPage() {
  const [inventory, setInventory] = useState(null);
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

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>There has been a server error</h1>;
  return (
    <>
      <h1>Catalog</h1>
      <div className="shopContainer">
        {inventory.map((menuItem, index) => (
          <div className="cardContainer">
            <Card
              key={index}
              title={menuItem.title}
              description={menuItem.description
                .split(" ")
                .slice(0, 4)
                .join(" ")}
              image={menuItem.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}
