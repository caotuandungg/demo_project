import { Component } from "react";
import "./style.css";

function Counter({ ten, mau }) {
  const text = 1;
  return (
    <div className="Counter" style={{ background: mau }}>
      <div className="counter_title">{ten}</div>
      <div className="counter_container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="counter_count">{text}</div>
          <div>
            <button className="counter_btn1">+</button>
            <button className="counter_btn2">-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;

export class Counterclass extends Component {
  render() {
    const text = "hello worldddddd";
    return <div>{text}</div>;
  }
}
