import { useState } from "react";
import "../styles/card.css";
export default function Card(props) {
    const [count, setCount] = useState(0);
    
    const incrementCount = () =>{
        setCount(count+1);
    }
    const decrementCount = () =>{
        if(count ==0) return;
        setCount(count-1);
    }
  return (
    <div className="cardContainer" style={{backgroundImage: `url(${props.img})`}}>
      <div className="infoContainer">
        <h4>Caramel Frap</h4>
        <h5>Brief Description</h5>
        <div className="purchaseInfo">
          <h5>$5 Price</h5>
          <div className="buttonContainer">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}