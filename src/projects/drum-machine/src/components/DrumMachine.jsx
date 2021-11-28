// https://d1jtxvnvoxswj8.cloudfront.net/wysiwyg/akai-pro/pdp/mpx-8/mpx8_ortho_web_2_lg.jpg_081fac3f2e8f2dc90ecdee788751eb42.jpg
import Display from "./Display";
import ControlPanel from "./ControlPanel";
import DrumPad from "./DrumPad";
import bank from "../store/dataBank";
import "./DrumMachine.scss";

const DrumMachine = () => {
  return (
    <div className="drum-machine">
      <div id="drum-machine">
        <Display />
        <h1 className="title">DRUM MACHINE</h1>
        <div className="title2">
          <span className="title2-1">MPX9</span>
          <span className="title2-2">MOBILE SAMPLE PLAYER</span>
        </div>
        <ControlPanel />
        <div className="pad-container">
          {bank.map((item, i) => (
            <DrumPad
              count={i + 1}
              key={item.keyCode}
              keyCode={item.keyCode}
              keyTrigger={item.keyTrigger}
              data={item.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
