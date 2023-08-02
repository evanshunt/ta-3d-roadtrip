import { createRoot } from "react-dom/client";
import Experience from "./Experience.jsx";
import React, { Suspense } from "react";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import Loading from "./Loading.jsx";

const root = createRoot(document.querySelector("#root"));

studio.extend(extension);
studio.initialize();

root.render(
  <>
    <Suspense fallback={<Loading />}>
      <Experience />
    </Suspense>
  </>
);
