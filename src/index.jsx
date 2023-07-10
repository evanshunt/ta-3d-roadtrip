import { createRoot } from "react-dom/client";
import Experience from "./Experience.jsx";
import React, { Suspense, useRef, useState } from "react";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

const root = createRoot(document.querySelector("#root"));

const showStudio = () => {
  studio.extend(extension);
  studio.initialize();
};

const handleKeyDown = (e) => {
  if (e.ctrlKey && e.key === "u") {
    showStudio();
  }
};

window.addEventListener("keydown", handleKeyDown);

root.render(
  <>
    <Suspense fallback={null}>
      <Experience />
    </Suspense>
  </>
);
