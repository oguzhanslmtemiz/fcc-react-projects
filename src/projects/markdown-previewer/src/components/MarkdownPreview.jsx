import Editor from "./Editor";
import Preview from "./Preview";

function MarkdownPreview() {
  return (
    <div className="markdown-preview">
      <h1>Markdown Preview</h1>
      <div className="container">
        <Editor />
        <Preview />
      </div>
      <div className="footer">
        by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://codepen.io/oguzhanslmtemiz"
        >
          oguzhanslmtemiz
        </a>
      </div>
    </div>
  );
}

export default MarkdownPreview;
