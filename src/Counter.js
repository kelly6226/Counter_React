import { useState } from "react";
import "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseNum = () => {
    setCount(count + 1);
  };

  const decreaseNum = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}

export default Counter;
