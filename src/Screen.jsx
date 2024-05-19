import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Screen = ({ isHovered }) => {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState(true);
  const positionVec = new THREE.Vector3();
  const lookatVec = new THREE.Vector3();
  useFrame((state) => {
    const step = 0.05;
    zoom
      ? positionVec.set(focus.x, focus.y  + 0.35, focus.z + 1.6)
      : positionVec.set(-3, 1.5, 4);
    zoom
      ? lookatVec.set(focus.x, focus.y, focus.z - 1.4)
      : lookatVec.set(-2, 1, 2);

    state.camera.position.lerp(positionVec, step);
    state.camera.lookAt(
      meshRef.current.position.x,
      meshRef.current.position.y + 0.35,
      meshRef.current.position.z
    );
    meshRef.current.updateMatrix();
    state.camera.updateProjectionMatrix();
  });

  const zoomToView = (focusRef) => {
    setZoom(!zoom);
    setFocus(focusRef.current.position);
  };
  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "grab";
  }, [hover]);
  return (
    <mesh ref={meshRef}>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
        // onClick={() => {
        //   setClicked(!clicked);
        //   zoomToView(meshRef);
        // }}
      >
        <iframe
          src="https://alexhagbarth.vercel.app/"
          onPointerOver={() => {
            setHover(true);
            isHovered(true);
            setZoom(!zoom);
            zoomToView(meshRef);
          }}
          onPointerOut={() => {
            setHover(false);
            isHovered(false);
            setZoom(!zoom);
          }}
        />
      </Html>
    </mesh>
  );
};

export default Screen;
