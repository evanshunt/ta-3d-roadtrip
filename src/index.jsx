import { createRoot } from "react-dom/client";
// import Experience from "./Experience.jsx";
import React from "react";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

const root = createRoot(document.querySelector("#root"));

const Experience = React.lazy(() => import("./Experience.jsx"));

// studio.extend(extension);
// studio.initialize();

root.render(
  // <Suspense fallback={<div className="loading"></div>}>

  <div className="road-trip">
    <Experience />
  </div>
  // </Suspense>
);
