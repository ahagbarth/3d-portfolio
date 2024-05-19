import {
  useGLTF,
  Float,
  PresentationControls,
  ContactShadows,
  Text,
  Bounds,
} from "@react-three/drei";
import Screen from "./Screen";
import { useState } from "react";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Bounds fit clip observe margin={1.2}>
          <Float rotationIntensity={hovered ? 0 : 0.4} enabled={!hovered}>
            <rectAreaLight
              width={2.5}
              height={2.65}
              intensity={65}
              color={"#161616"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />
            <primitive object={computer.scene} position-y={-1.2}>
              <Screen isHovered={setHovered} />
            </primitive>

            <Text
              font="./bangers-v20-latin-regular.woff"
              fontSize={1}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
              maxWidth={2}
              textAlign="center"
            >
              ALEX HAGBARTH
            </Text>
          </Float>
        </Bounds>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
