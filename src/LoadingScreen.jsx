import React from "react";
import { Html, Loader } from "@react-three/drei";

const LoadingScreen = () => {
  return (
    <Html center>
      <Loader
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
    </Html>
  );
};

export default LoadingScreen;
