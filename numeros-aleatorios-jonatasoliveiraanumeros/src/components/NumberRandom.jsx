import { useState } from "react";
import "./style.css";

const NumberRandom = () => {
  const [count, setCount] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNum() {
    setCount(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={randomNum}>Criar novo numero</button>
    </div>
  );
};
export default NumberRandom;
