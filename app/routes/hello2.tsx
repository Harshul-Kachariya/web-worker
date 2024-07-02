import React from "react";

export default function HelloWorld2({ data }: any) {
  return (
    <div>
      <h1>Hello World 2 Component</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
