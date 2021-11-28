import { useState, useEffect, useRef } from "react";
import "./PomodoroClock.scss";
import Clock from "./Clock";

const PomodoroClock = () => {
  const [state, setState] = useState({
    sessionLength: 25,
    breakLength: 5,
    isStarted: false,
    timer: 25 * 60,
    timerType: "Session",
  });
  const alarm = useRef();

  useEffect(() => {
    if (state.isStarted && state.timer > 0) {
      const countdown = setInterval(() => {
        setState({
          ...state,
          timer: --state.timer,
        });
      }, 1000);
      return () => clearInterval(countdown);
    } else if (state.timer === 0) {
      // ring alarm, change mode, set timer, start countdown
      alarm.current.play();
      alarm.current.currentTime = 0;
      if (state.timerType === "Session") {
        setState({
          ...state,
          timerType: "Break",
          timer: state.breakLength * 60,
        });
      } else if (state.timerType === "Break") {
        setState({
          ...state,
          timerType: "Session",
          timer: state.sessionLength * 60,
        });
      }
    }
    if (state.isResetted) {
      alarm.current.pause();
      alarm.current.currentTime = 0;
      setState({
        ...state,
        isResetted: !state.isResetted,
      });
    }
  }, [state]);

  return (
    <div className="pomodoro-clock">
      <div className="pomodoro-clock-container">
        <h1 className="title">Pomodoro Clock</h1>
        <Clock props={[state, setState]} />
        <audio
          id="beep"
          ref={alarm}
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </div>
  );
};

export default PomodoroClock;
