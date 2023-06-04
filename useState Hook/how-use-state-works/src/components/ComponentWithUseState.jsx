import React, { useState } from "react";

const ComponentWithUseState = () => {
  const [val, setVal] = useState(3);

  const clickHandler = () => {
    setVal(val + 1);
  };

  // const clickHandler = () => {
  //   setVal(val + 1);
  //   console.log(val);
  // };

  // const clickHandler = () => {
  //   setVal(val + 1);
  //   setVal(val + 1);
  //   setVal(val + 1);
  //   console.log(val);
  // };

  // const clickHandler = () => {
  //   setVal((val) => {
  //     console.log("current value is", val);
  //     return val+1
  //   });
  // };

  // const clickHandler = () => {
  //   setVal((val) => val + 1);
  // };

  // const clickHandler = () => {
  //   setVal((val) => val + 1);
  //   setVal((val) => val + 1);
  //   setVal((val) => val + 1);
  // };

  return (
    <>
      <div>ComponentWithUseState</div>
      <p>Current Val is {val}</p>
      <p>
        <button onClick={clickHandler}>increment val</button>
      </p>
    </>
  );
};

export default ComponentWithUseState;
