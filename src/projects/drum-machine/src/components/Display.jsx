import { useContext, useRef, useEffect, useMemo } from "react";
import Context from "../context/context";

const Display = () => {
  const [state, setState] = useContext(Context);
  const clearDisplay = useRef();
  const flame = useRef();

  function flameCreator() {
    return <div ref={flame} className="flame" />;
  }

  const flameDiv = useMemo(() => flameCreator(), []);

  useEffect(() => {
    if (state.isPower && !flame.current) {
      clearDisplay.current = setTimeout(() => {
        setState((prevState) => ({ ...prevState, display: flameDiv }));
      }, 1481);
    }
    return () => clearTimeout(clearDisplay.current);
  }, [flameDiv, setState, state.display, state.isPower]);

  useEffect(() => {
    if (state.isPower) {
      setState((prevState) => ({ ...prevState, display: flameDiv }));
    } else {
      setState((prevState) => ({ ...prevState, display: "" }));
    }
  }, [flameDiv, setState, state.isPower]);

  return <div id="display">{state.display}</div>;
};

export default Display;
