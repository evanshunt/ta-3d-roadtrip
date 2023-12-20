import { createRoot } from "react-dom/client";
import Experience from "./Experience.jsx";
import React from "react";
import displayError from "./utils/displayError.js";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

const root = createRoot(document.querySelector("#root"));

// const Experience = React.lazy(() => import("./Experience.jsx"));

// studio.extend(extension);
// studio.initialize();

const canvas = document.createElement("canvas");
let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

if (!gl) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container");
  document.querySelector("body").appendChild(errorContainer);
  displayError(
    "Please ensure hardware acceleration is enabled in your browser preferences.",
    "If that doesn't work please make sure your browser is up to date.",
    errorContainer
  );
}
root.render(
  // <Suspense fallback={<div className="loading"></div>}>

  <div className="road-trip">
    <Experience />
  </div>
  // </Suspense>
);
