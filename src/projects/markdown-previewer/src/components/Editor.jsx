import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../redux/actions/actionCreators";

const Editor = () => {
  const value = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <h1>Editor</h1>
      <textarea
        id="editor"
        value={value}
        onChange={(e) => dispatch(handleChange(e.target.value))}
      />
    </div>
  );
};

export default Editor;
