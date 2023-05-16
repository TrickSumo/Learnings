import App from "./App";
import App2 from "./App2";

console.log("useState with single state");
App();
App(); // equivalent to rerender after state change

console.log("useState with multiple states");
App2();
App2(); // equivalent to rerender after state change
