import { useEffect, useMemo } from "react";

function Buttons({ onClickHandler }) {
  const btns = useMemo(
    () => [
      { name: "clear", value: "AC", key: " " },
      { name: "backspace", value: "⇐", key: "Backspace" },
      { name: "divide", value: "÷", key: "/" },
      { name: "seven", value: 7, key: "7" },
      { name: "eight", value: 8, key: "8" },
      { name: "nine", value: 9, key: "9" },
      { name: "multiply", value: "×", key: "*" },
      { name: "four", value: 4, key: "4" },
      { name: "five", value: 5, key: "5" },
      { name: "six", value: 6, key: "6" },
      { name: "subtract", value: "-", key: "-" },
      { name: "one", value: 1, key: "1" },
      { name: "two", value: 2, key: "2" },
      { name: "three", value: 3, key: "3" },
      { name: "add", value: "+", key: "+" },
      { name: "zero", value: 0, key: "0" },
      { name: "decimal", value: ".", key: "." },
      { name: "equals", value: "=", key: "Enter" },
    ],
    []
  );

  useEffect(() => {
    function handleKeyDown(e) {
      for (let i = 0; i < btns.length; i++) {
        if (btns[i].key === e.key) onClickHandler(btns[i].value);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [btns, onClickHandler]);

  return (
    <div className="buttons">
      {btns.map((btn) => (
        <button
          key={btn.name}
          id={btn.name}
          className={btn.name}
          tabIndex="-1"
          onClick={() => onClickHandler(btn.value)}
        >
          {btn.value}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
