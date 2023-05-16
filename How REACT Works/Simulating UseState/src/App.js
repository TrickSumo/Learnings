const ReactX = () => {
  let getter;
  const useState = (initialValue) => {
    if (getter === undefined) getter = initialValue;

    const setter = (newValue) => {
      getter = newValue;
      // console.log("new value is", newValue, getter);
    };

    return [getter, setter];
  };
  return { useState };
};

const { useState } = ReactX();

function App() {
  const [val, setVal] = useState(3);
  console.log(val);
  if (val !== 5) {
    setVal(5);
    console.log(val);
  }
}

export default App;
