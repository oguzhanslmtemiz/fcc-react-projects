import { Provider } from "react-redux";
import { createStore } from "redux";
import markedReducer from "./redux/reducers/markedReducer";
import MarkdownPreview from "./components/MarkdownPreview";
import "./style.scss";

const store = createStore(markedReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MarkdownPreview/>
    </Provider>
  );
};

export default App; 
