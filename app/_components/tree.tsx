"use client";

import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

function Scene() {
  const gltf = useGLTF("/sakura.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export default function Tree() {
  const [classNameAnim, setClassNameAnim] = useState("");

  useProgress((state) => {
    if (classNameAnim === "slide-in-right") return;
    if (state.loaded === 7) {
      setClassNameAnim("slide-in-right");
    }
  });
  return (
    <div
      className={`absolute right-5 top-96 h-[31vh] w-[40vw] pt-8 opacity-0 sm:static sm:max-h-[80vh] sm:min-h-[80vh] sm:w-[55vw] ${classNameAnim}`}
    >
      <Canvas shadows>
        <ambientLight intensity={1.15} />
        <PerspectiveCamera makeDefault position={[-25, 35, 60]} />
        <OrbitControls enablePan={false} minDistance={67} maxDistance={67} />
        <Float rotationIntensity={0.6} speed={3}>
          <Scene />
        </Float>
      </Canvas>
    </div>
  );
}
