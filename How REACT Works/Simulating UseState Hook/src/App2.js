const ReactX = () => {
  let state = [];
  let index = 0;
  const useState = (initialValue) => {
    const localIndex = index;
    index++;
    if (state[localIndex] === undefined) state[localIndex] = initialValue;

    const setterFunction = (newValue) => {
      state[localIndex] = newValue;
      // console.log("new value is", newValue, state[localIndex]);
      return newValue;
    };

    return [state[localIndex], setterFunction];
  };

  const resetIndex = () => {
    index = 0;
  };

  return { useState, resetIndex };
};

const { useState, resetIndex } = ReactX();

function App2() {
  const [val, setVal] = useState(3);
  const [val2, setVal2] = useState(2);

  console.log("val is", val);

  if (val !== 5) {
    setVal(val + 2);
    setVal(val + 2);
    setVal((val) => console.log(val));
    console.log("val is", val);
  }

  console.log("val2 is", val2);

  if (val !== 5) {
    setVal2(4);
    console.log("val2 is", val2);
  }

  resetIndex(); // resting index to 0
}

export default App2;
