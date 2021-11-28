import { useContext, useEffect, useCallback } from "react";
import Context from "../context/context";

const DrumPad = ({ count, keyCode, keyTrigger, data }) => {
  const [state, setState] = useContext(Context);

  const handleAudioPlay = useCallback(() => {
    if (state.isPower) {
      const audio = document.getElementById(keyTrigger);
      audio.currentTime = 0;
      audio.volume = state.volume / 100;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {})
          .catch((error) => {
            console.log("Auto-play was prevented: ", error);
          });
      }

      audio.parentElement.classList.toggle("active");
      setTimeout(() => {
        audio.parentElement.classList.toggle("active");
      }, 80);
      setState((prevState) => ({
        ...prevState,
        display: data[state.selectedDataIndex].id,
      }));
    }
  }, [
    data,
    keyTrigger,
    setState,
    state.isPower,
    state.selectedDataIndex,
    state.volume,
  ]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (state.isPower && e.keyCode === keyCode) {
        handleAudioPlay();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleAudioPlay, keyCode, state.isPower, state.volume]);

  return (
    <div
      className="drum-pad"
      id={data[state.selectedDataIndex].id}
      onClick={handleAudioPlay}
    >
      {/* <span>{`PAD ${count}`}</span> */}
      {keyTrigger}
      <audio
        preload="auto"
        className="clip"
        id={keyTrigger}
        src={data[state.selectedDataIndex].url}
      />
    </div>
  );
};

export default DrumPad;
