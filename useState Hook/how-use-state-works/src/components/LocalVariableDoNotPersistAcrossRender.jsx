import React, { useState } from "react";

let globalVal = 3;

const LocalVariableDoNotPersistAcrossRender = () => {
  const [renderSimulator, setRenderSimulator] = useState(0);
  const renderAgain = () => {
    console.log(
      "Local variable data will be lost because of render. It will reset to initial value"
    );
    setRenderSimulator((prev) => prev + 1); // when state update using use state then component renders again
  };

  let localVal = 3;

  return (
    <>
      <div>LocalVariableDoNotPersistAcrossRender</div>
      <p>globalVal and localVal are printed in console...</p>
      <p>
        <button
          onClick={() => {
            localVal++;
            globalVal++;
            console.log(
              `localVal is ${localVal} and global val is ${globalVal}`
            );
          }}
        >
          increment local and global variable
        </button>
      </p>
      <p>
        <button onClick={renderAgain}>
          Simulate Render To Reset Local Variable
        </button>
      </p>
    </>
  );
};

export default LocalVariableDoNotPersistAcrossRender;
