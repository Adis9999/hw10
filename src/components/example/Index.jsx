import React, { useEffect } from "react";

const Counter = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <button>+</button>
      <h1>0</h1>
      <button>-</button>
    </div>
  );
};

export default Counter;
