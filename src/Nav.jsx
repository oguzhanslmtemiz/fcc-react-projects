import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink activeclassname="active" to="/randomQuoteMachine">Random Quote Machine</NavLink>
      <NavLink activeclassname="active" to="/markdownPreview">Markdown Preview</NavLink>
      <NavLink activeclassname="active" to="/drumMachine">Drum Machine</NavLink>
      <NavLink activeclassname="active" to="/calculator">Calculator</NavLink>
      <NavLink activeclassname="active" to="/pomodoroClock">Pomodoro Clock</NavLink>
    </nav>
  );
}
