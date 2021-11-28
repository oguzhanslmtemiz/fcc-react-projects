function SessionLength({ props }) {
  const [state, setState] = props;

  function increase() {
    if (state.sessionLength < 60) {
      setState({
        ...state,
        sessionLength: ++state.sessionLength,
        timer: state.sessionLength * 60,
      });
    }
  }

  function decrease() {
    if (state.sessionLength > 1) {
      setState({
        ...state,
        sessionLength: --state.sessionLength,
        timer: state.sessionLength * 60,
      });
    }
  }

  return (
    <div className="container break-session-container">
      <div id="session-label">Session Length</div>
      <div className="btn-container break-session-btns">
        <button
          id="session-increment"
          onClick={increase}
          disabled={state.isStarted}
        >
          +
        </button>
        <div id="session-length">{state.sessionLength}</div>
        <button
          id="session-decrement"
          onClick={decrease}
          disabled={state.isStarted}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default SessionLength;
