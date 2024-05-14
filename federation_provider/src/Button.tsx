import React, { useEffect, useState } from "react";
import classes from "./Button.module.css";

const Button = () => {
  const [count, setCount] = useState(0);
  const [countArray, setCountArray] = useState<number[]>([]); // Add type annotation for countArray

  const handleClick = (value: number) => {
    // Add type annotation for value
    const updatedCountArray = [...countArray, value];
    setCountArray(updatedCountArray);
  };

  useEffect(() => {
    console.log("Sum of countArray:");
  }, [countArray]);

  return (
    <button
      className={classes["custom-button"]}
      onClick={() => {
        setCount(count + 1);
        handleClick(count + 1);
      }}
    >
      Remote Button 1: {count}
    </button>
  );
};

export default Button;
