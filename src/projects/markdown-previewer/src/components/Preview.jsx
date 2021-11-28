import { useSelector } from "react-redux";
import { marked } from "marked";

const Preview = () => {
  const inputValue = useSelector((state) => state.inputValue);
  marked.setOptions({
    breaks: true,
  });
  let markedText = marked(inputValue);
  return (
    <div className="wrapper" style={{ overflow: "hidden" }}>
      <h1>Preview</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }}></div>
    </div>
  );
};

export default Preview;
