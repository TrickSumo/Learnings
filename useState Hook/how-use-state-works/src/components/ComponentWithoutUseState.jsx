import React from "react";

const ComponentWithoutUseState = () => {
  let val = 3;

  return (
    <>
      <div>ComponentWithoutUseState</div>
      <p>Current Val is {val}</p>
      <p>
        <button
          onClick={() => {
            val++;
            console.log(val);
          }}
        >
          increment val
        </button>
      </p>
    </>
  );
};

export default ComponentWithoutUseState;
