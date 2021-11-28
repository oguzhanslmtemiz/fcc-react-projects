import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Loader from "./Loader";
import Home from "./Home";
import "./App.scss";
const RandomQuoteMachine = lazy(() =>
  import("./projects/random-quote-machine/src/App")
);

const MarkdownPreview = lazy(() =>
  import("./projects/markdown-previewer/src/App")
);

const DrumMachine = lazy(() => import("./projects/drum-machine/src/App"));

const Calculator = lazy(() =>
  import("./projects/react-calculator/src/Calculator")
);

const PomodoroClock = lazy(() =>
  import("./projects/pomodoro-clock/src/PomodoroClock")
);

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="randomQuoteMachine" element={<RandomQuoteMachine />} />
            <Route path="markdownPreview" element={<MarkdownPreview />} />
            <Route path="drumMachine" element={<DrumMachine />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="pomodoroClock" element={<PomodoroClock />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
