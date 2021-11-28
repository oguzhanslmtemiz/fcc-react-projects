function BreakLength({ props }) {
  const [state, setState] = props;

  function increase() {
    if (state.breakLength < 60) {
      setState({
        ...state,
        breakLength: ++state.breakLength,
      });
    }
  }

  function decrease() {
    if (state.breakLength > 1) {
      setState({
        ...state,
        breakLength: --state.breakLength,
      });
    }
  }

  return (
    <div className="container break-session-container">
      <div id="break-label">Break Length</div>
      <div className="btn-container break-session-btns">
        <button
          id="break-increment"
          onClick={increase}
          disabled={state.isStarted}
        >
          +
        </button>
        <div id="break-length">{state.breakLength}</div>
        <button
          id="break-decrement"
          onClick={decrease}
          disabled={state.isStarted}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default BreakLength;
