import "../styles/HomePage.css";
import Card from "../components/Card";
import bgImage1 from "../assets/bgImage1.jpg";
import bgImage2 from "../assets/bgImage2.jpg";
import { Link } from "react-router";
import data from "../data.json";

const HomePage = () => {
  const top3 = [data[0], data[1], data[2]];

  return (
    <div className="homePage">
      <div className="bgImg1" style={{ backgroundImage: `url(${bgImage1})` }}>
        <div className="textContent">
          <h1>Delicious Coffee</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
          <Link to="shop">Shop</Link>
        </div>
      </div>
      <div className="midHeader">
        <h2>Drink a coffee</h2>
        <h5>Taste you've never imagined</h5>
      </div>
      <div className="popularContainer">
        <>
          {top3.map((menuItem) => (
            <div className="popCard" key={menuItem.id}>
              <Card
                menuItem={menuItem}
                description={menuItem.description
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}
                to={`/shop/${menuItem.title.toLowerCase()}`}
              />
            </div>
          ))}
        </>
      </div>
      <div
        className="bgImg2"
        style={{ backgroundImage: `url(${bgImage2})` }}
      ></div>
    </div>
  );
};

export default HomePage;
