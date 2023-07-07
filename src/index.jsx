import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import Experience from "./Experience.jsx";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Canvas shadows>
    <color args={["#111"]} attach={"background"} />
    <Experience />
  </Canvas>
);
