import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render( <App />, document.getElementById('root'));  // This is the original line of code that was in the index.js file. It was replaced with the line of code below it.

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
