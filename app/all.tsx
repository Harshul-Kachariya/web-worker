import React from "react";
import ReactDOM from "react-dom";
import HelloWorld2 from "./routes/hello2";
import HelloWorld1 from "./routes/hello1";
import PdfViewer from "./routes/pdfViewer";

ReactDOM.render(<HelloWorld1 />, document.getElementById("root1"));
ReactDOM.render(<HelloWorld2 />, document.getElementById("root2"));
ReactDOM.render(<PdfViewer />, document.getElementById("root3"));
