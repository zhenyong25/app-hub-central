import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Center } from "@react-three/drei";
import { Suspense } from "react";

interface ModelCanvasProps {
  modelPath: string;
}

function Model({ modelPath }: ModelCanvasProps) {
  const gltf = useLoader(GLTFLoader, modelPath);
  
  return (
    <Center>
      <primitive object={gltf.scene} />
    </Center>
  );
}

export function ModelCanvas({ modelPath }: ModelCanvasProps) {
  return (
    <Suspense fallback={null}>
      <Model modelPath={modelPath} />
    </Suspense>
  );
}
