// 1. To Render
//   <h1> Hello World </h1>

const element = React.createElement("h1", { id: "block1" }, "1 Hello World!");
console.log(element); //REACT element is JSON object with attrivutes like key, prop, type etc
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// 2. To Render
{
  /* <div>
        <h1> Hello World </h1>
        <h2> This is React!</h2>
     </div> */
}

// Siblings can be passed as array
const element2 = React.createElement("div", { id: "block2" }, [
  React.createElement("h1", {key:"dftd6f"}, "2 Hello World!"),
  React.createElement("h2", {key:"dftdfef6f"}, "This is React!"),
]);
console.log(element2);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(element2);

// 3. To Render
{
  /* <div id="parent">
         <div id="child">
             <h1> Hello </h1>
          </div>
      </div> */
}

// Children can be nested
const element3 = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child",key:"dftd6dfdf" },
    React.createElement("h1", {key:"dftfefd6f"}, "3 Hello World!")
  ),
]);
console.log(element3);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(element3);
