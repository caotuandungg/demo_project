// import Countertest from "./components/Countertest"
import { useState } from "react";

function Apptest() {
  const [counter, setCounter] = useState(1);
  const handleIncrease=() => {
    setCounter(alo => alo +1)
    setCounter(alo => alo +1)
    setCounter(alo => alo +1)
  }
  return (
    <div className="app">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>văn minh</button>
      
    </div>
  );
}
export default Apptest;
