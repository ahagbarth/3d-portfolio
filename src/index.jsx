import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import LoadingScreen from "./LoadingScreen.jsx";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    className="r3f"
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <color args={["#241a1a"]} attach="background" />
    <Suspense fallback={null}>
      <Environment preset="city" />
    </Suspense>
    <Suspense fallback={<LoadingScreen />}>
      <Experience />
    </Suspense>
  </Canvas>
);
