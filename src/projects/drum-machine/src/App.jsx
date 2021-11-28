import React, { useState } from "react";
import { INITIAL_STATE } from "./initialState";
import Context from "./context/context";
import DrumMachine from "./components/DrumMachine";

function App() {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <Context.Provider value={[state, setState]}>
      <DrumMachine />
    </Context.Provider>
  );
}

export default App;
