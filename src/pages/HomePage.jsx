import "../styles/HomePage.css";
import Card from "../components/Card";
import testImage from "../assets/testImage.avif";
import testImage2 from "../assets/testImage2.avif";
import testImage3 from "../assets/testImage3.avif";
import bgImage1 from "../assets/bgImage1.jpg";
import bgImage2 from "../assets/bgImage2.jpg";
import { Link } from "react-router";
// import { useState } from "react";

const HomePage = () => {
  // const [heading, setHeading] = useState("Magnificent Monkeys");

  // const clickHandler = () =>{
  //   setHeading("Radical Rhinos");
  // };

  return (
    <div className="homePage">
      <h1>Homepage</h1>
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
        <Card img={testImage} />
        <Card img={testImage2} />
        <Card img={testImage3} />
      </div>
      <div
        className="bgImg2"
        style={{ backgroundImage: `url(${bgImage2})` }}
      ></div>
    </div>
  );
};

export default HomePage;
