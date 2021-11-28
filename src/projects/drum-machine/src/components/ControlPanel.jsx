import { useContext, useEffect } from "react";
import Context from "../context/context";
import bank from "../store/dataBank";

const ControlPanel = () => {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    const displayElem = document.getElementById("display");
    const controlPanel = document.getElementById("control-panel");
    const drumLight = document.querySelectorAll(".drum-pad");

    drumLight && drumLight.forEach((el) => el.classList.toggle("on"));
    displayElem && displayElem.classList.toggle("on");
    controlPanel && controlPanel.classList.toggle("on");
  }, [state.isPower]);

  const handlePowerBtn = (e) => {
    setState((prevState) => ({
      ...prevState,
      isPower: !prevState.isPower,
    }));
    e.target.classList.toggle("on");
  };
  const handleBankSelect = () => {
    if (state.isPower) {
      let currIndex = state.selectedDataIndex;
      let countOfData = bank[0].data.length;
      currIndex === countOfData - 1 ? (currIndex = 0) : currIndex++;
      setState((prevState) => ({
        ...prevState,
        display: currIndex === 0 ? "Heater Kit" : "Smooth Piano Kit",
        selectedDataIndex: currIndex,
      }));
    }
  };
  const handleVolumeChange = (e) => {
    if (state.isPower) {
      let currentVolume = Number(e.target.value);
      setState((prevState) => ({
        ...prevState,
        volume: currentVolume,
        display: "Volume: " + currentVolume,
      }));
    }
  };
  const indicatorCreator = () => {
    return "lsssslsssslsssslsssslsssslssssl"
      .split("")
      .map((el, i) =>
        el === "l" ? (
          <div key={i} className="long-indicator" />
        ) : (
          <div key={i} className="short-indicator" />
        )
      );
  };

  return (
    <div id="control-panel">
      <div className="volume-wrapper">
        <div className="indicator-wrapper">
          <div className="indicator left">{indicatorCreator()}</div>
          <input
            id="volume"
            type="range"
            value={state.volume}
            onChange={handleVolumeChange}
          />
          <div className="indicator right">{indicatorCreator()}</div>
        </div>
      </div>
      <div className="power">
        <button className="on" onClick={handlePowerBtn} />
      </div>
      <div className="bank-selector">
        <button onClick={handleBankSelect}>Bank</button>
      </div>
    </div>
  );
};

export default ControlPanel;
