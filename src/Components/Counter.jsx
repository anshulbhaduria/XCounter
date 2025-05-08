import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Counter App</h1>
      <p>Counter: {count}</p>
      <button className={styles.buttons} onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
