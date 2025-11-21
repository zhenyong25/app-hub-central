import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Center, Html } from "@react-three/drei";
import { Suspense } from "react";

interface ModelCanvasProps {
  modelPath: string;
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="text-foreground bg-background/80 px-4 py-2 rounded-lg">
        Loading model...
      </div>
    </Html>
  );
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <Html center>
      <div className="text-destructive bg-background/80 px-4 py-2 rounded-lg max-w-md text-center">
        <p className="font-semibold">Failed to load model</p>
        <p className="text-sm mt-1">Make sure your .glb file exists in public/models/ folder</p>
      </div>
    </Html>
  );
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
    <Suspense fallback={<LoadingFallback />}>
      <Model modelPath={modelPath} />
    </Suspense>
  );
}
