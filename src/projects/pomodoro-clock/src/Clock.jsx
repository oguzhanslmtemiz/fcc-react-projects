import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";

function Clock({ props }) {
  const [state, setState] = props;

  function startStop() {
    setState({
      ...state,
      isStarted: !state.isStarted,
    });
  }

  function reset() {
    setState({
      sessionLength: 25,
      breakLength: 5,
      isStarted: false,
      timer: 25 * 60,
      timerType: "Session",
      isResetted: true,
    });
  }

  function showTime() {
    let minutes = Math.floor(state.timer / 60);
    let seconds = state.timer % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  }

  return (
    <div className="clock-container">
      <BreakLength props={[state, setState]} />
      <div className="timer container">
        <div id="timer-label">{state.timerType}</div>
        <div id="time-left">{showTime()}</div>
        <div className="btn-container btns-start-reset">
          <button id="start_stop" onClick={startStop}>
            {state.isStarted ? "PAUSE" : "START"}
          </button>
          <button id="reset" onClick={() => reset()}>
            RESET
          </button>
        </div>
      </div>
      <SessionLength props={[state, setState]} />
    </div>
  );
}

export default Clock;
