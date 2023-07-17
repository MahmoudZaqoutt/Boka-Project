import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./test";

function App() {
  return (
    <h1 className="text-3xl font-bold underline text-red-600 bg-black ">
      Simple React Typescript Tailwind Sample
      <Test />
    </h1>
  );
}

export default App;
