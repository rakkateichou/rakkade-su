"use client";

import {
    Float,
    OrbitControls,
    PerspectiveCamera,
    useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Scene() {
  const gltf = useGLTF("/sakura.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export default function Tree() {
  return (
    <div className="min-h-[80vh] pt-8 pl-10">
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
