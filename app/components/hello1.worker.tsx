import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import HelloWorld1 from "~/routes/hello1";

const renderComponent = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();

    const html = ReactDOMServer.renderToString(<HelloWorld1 data={data} />);
    return html;
  } catch (error) {
    console.error("Error fetching data:", error);
    return ReactDOMServer.renderToString(<HelloWorld1 data={null} />);
  }
};

Comlink.expose({ renderComponent });
