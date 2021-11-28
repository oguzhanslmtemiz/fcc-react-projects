import { useState } from "react";
import "./Calculator.scss";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
  const [state, setState] = useState({
    display: "0",
    isLocked: false,
  });

  if (state.display === "NaN" || state.display === "Infinity") {
    setState({
      display: `Error: ${state.display}`,
      isLocked: true,
    });
    setTimeout(() => {
      setState({
        display: "0",
        isLocked: false,
      });
    }, 1500);
  }

  function calculate(a, b, operation) {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return b - a;
      case "×":
        return a * b;
      case "÷":
        return b / a;
      default:
        console.log("Invalid operator");
        break;
    }
  }

  function onClickHandler(action) {
    const display = state.display;
    const isLocked = state.isLocked;
    const last = display.slice(-1);
    if (!isLocked) {
      switch (action) {
        case "AC":
          setState({
            display: "0",
          });
          break;
        case "⇐":
          setState({
            display: display.slice(0, -1),
          });
          break;
        case ".":
          if (/\d+\.\d*$/.test(state.display)) {
            break;
          } else if (!/\d/.test(last)) {
            setState({ display: display + "0." });
          } else {
            setState({ display: display + "." });
          }
          break;
        case "+":
        case "-":
        case "×":
        case "÷":
          if (/[\d]/.test(last)) {
            setState({ display: display + action });
          } else if (/\d/.test(display.slice(-2))) {
            setState({
              display:
                action !== "-"
                  ? display.slice(0, -1) + action
                  : last === "-"
                  ? display.slice(0, -1) + "+"
                  : display + action,
            });
          } else setState({ display: display.slice(0, -2) + action });
          break;
        case "=":
          let formel = display;
          const condition = (str) =>
            str.length <= 1 &&
            ["", "+", "-", "×", "÷"].some((el) => str.includes(el));
          if (condition(formel)) return;
          while (!/[\d]/.test(formel[formel.length - 1])) {
            formel = formel.slice(0, -1);
          }

          const numbers = [];
          let currentNumber = "";
          const ops = [];

          for (let i = 0; i < formel.length; i++) {
            if (formel[i] === "-" && currentNumber === "") {
              currentNumber = "-";
            } else if (/[\d.]/.test(formel[i])) {
              currentNumber = currentNumber + formel[i];
            } else {
              if (currentNumber !== "") {
                numbers.push(Number(currentNumber));
                currentNumber = "";
              }
              while (
                ops.length > 0 &&
                !(
                  (ops[ops.length - 1] === "-" ||
                    ops[ops.length - 1] === "+") &&
                  (formel[i] === "×" || formel[i] === "÷")
                )
              ) {
                numbers.push(
                  calculate(numbers.pop(), numbers.pop(), ops.pop())
                );
              }
              ops.push(formel[i]);
            }
          }
          if (currentNumber !== "") {
            numbers.push(Number(currentNumber));
            currentNumber = "";
          }
          while (ops.length) {
            numbers.push(calculate(numbers.pop(), numbers.pop(), ops.pop()));
          }

          const result = numbers.pop();
          setState({
            display: "" + result + "",
          });
          break;
        default:
          setState({
            display: /([^.0-9]0|^0)$/.test(display)
              ? display.slice(0, -1) + action
              : display + action,
          });
          break;
      }
    }
  }

  return (
    <div className="react-calculator">
      <div className="container">
        <div className="phone">
          <div className="phone-btns" />
          <div className="camera" />
          <div className="sensor" />
          <Display display={state.display} />
          <Buttons onClickHandler={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
