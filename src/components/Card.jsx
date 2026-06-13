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
    <div className="image" style={{backgroundImage: `url(${props.image})`}}>
      <div className="infoContainer">
        <h4>{props.title}</h4>
        <h5>{props.description}</h5>
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