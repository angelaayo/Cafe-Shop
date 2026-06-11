import "../styles/HomePage.css";
import Card from "../components/Card";
import testImage from "../assets/testImage.avif";
import testImage2 from "../assets/testImage2.avif";
import testImage3 from "../assets/testImage3.avif";
// import { useState } from "react";

const HomePage = () => {
  // const [heading, setHeading] = useState("Magnificent Monkeys");

  // const clickHandler = () =>{
  //   setHeading("Radical Rhinos");
  // };

  return (
    <>
      <h1>Welcome to the homepage</h1>
      <div className="popularContainer">
        <Card img={testImage} />
        <Card img={testImage2} />
        <Card img={testImage3} />
      </div>
    </>
  );
};

export default HomePage;
