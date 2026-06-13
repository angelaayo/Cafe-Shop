import { useState, useEffect } from "react";

export default function ShopPage() {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const hotResponse = await fetch(
          "https://api.sampleapis.com/coffee/hot",
        );
        const icedResponse = await fetch(
          "https://api.sampleapis.com/coffee/iced",
        );
        if (hotResponse.status >= 400 || icedResponse.status >= 400) {
          throw new Error("server error");
        }
        const hotData = await hotResponse.json();
        const icedData = await icedResponse.json();
        setInventory([...hotData, ...icedData]);
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
    </>
  );
}
