import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid } from "@react-three/drei";
import { ModelCanvas } from "@/components/ModelCanvas";
import { ModelSidebar } from "@/components/ModelSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ModelViewer() {
  const [selectedModel, setSelectedModel] = useState<string>("");

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <ModelSidebar onSelectModel={setSelectedModel} />
        
        <main className="flex-1 relative bg-background">
          <Canvas
            camera={{ position: [5, 5, 5], fov: 50 }}
            className="bg-gradient-to-br from-background to-muted"
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />
            
            {selectedModel && <ModelCanvas modelPath={selectedModel} />}
            
            <OrbitControls makeDefault />
            <Grid
              args={[20, 20]}
              cellSize={1}
              cellThickness={0.5}
              cellColor="#6b7280"
              sectionSize={5}
              sectionThickness={1}
              sectionColor="#9ca3af"
              fadeDistance={50}
              fadeStrength={1}
              infiniteGrid
            />
            <Environment preset="city" />
          </Canvas>

          {!selectedModel && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-muted-foreground max-w-md">
                <p className="text-lg font-semibold mb-2">No model selected</p>
                <p className="text-sm">Select a model from the sidebar or upload your own .glb file</p>
                <p className="text-xs mt-4 text-muted-foreground/70">
                  To add models: Place .glb files in public/models/ folder
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
}
