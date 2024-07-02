import type { MetaFunction } from "@remix-run/node";
import HelloWorld1 from "./hello1";
import HelloWorld2 from "./hello2";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <HelloWorld1 />
      <HelloWorld2 />
    </div>
  );
}
