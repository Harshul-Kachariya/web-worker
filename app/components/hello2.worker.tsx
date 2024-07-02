import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import HelloWorld2 from "~/routes/hello2";

const renderComponent = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    const data = await response.json();

    const html = ReactDOMServer.renderToString(<HelloWorld2 data={data} />);
    return html;
  } catch (error) {
    console.error("Error fetching data:", error);
    return ReactDOMServer.renderToString(<HelloWorld2 data={null} />);
  }
};

Comlink.expose({ renderComponent });
