import { useState } from "react";
import { Folder, Upload, Box } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface ModelSidebarProps {
  onSelectModel: (path: string) => void;
}

// Example models - replace these with your actual .glb file paths
const exampleModels = [
  { name: "Model 1", path: "/models/example1.glb", folder: "Folder A" },
  { name: "Model 2", path: "/models/example2.glb", folder: "Folder A" },
  { name: "Model 3", path: "/models/example3.glb", folder: "Folder B" },
  { name: "Model 4", path: "/models/example4.glb", folder: "Folder B" },
];

export function ModelSidebar({ onSelectModel }: ModelSidebarProps) {
  const [selectedModelPath, setSelectedModelPath] = useState<string>("");

  const folders = Array.from(new Set(exampleModels.map((m) => m.folder)));

  const handleModelSelect = (path: string) => {
    setSelectedModelPath(path);
    onSelectModel(path);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      handleModelSelect(url);
    }
  };

  return (
    <Sidebar className="border-r border-border">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-foreground">3D Models</h2>
        <SidebarTrigger />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Upload Model</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload .glb file
              </Button>
              <input
                id="file-upload"
                type="file"
                accept=".glb,.gltf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {folders.map((folder) => (
          <SidebarGroup key={folder}>
            <SidebarGroupLabel>
              <Folder className="h-4 w-4 mr-2 inline" />
              {folder}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {exampleModels
                  .filter((model) => model.folder === folder)
                  .map((model) => (
                    <SidebarMenuItem key={model.path}>
                      <SidebarMenuButton
                        onClick={() => handleModelSelect(model.path)}
                        className={
                          selectedModelPath === model.path
                            ? "bg-muted text-primary font-medium"
                            : "hover:bg-muted/50"
                        }
                      >
                        <Box className="h-4 w-4" />
                        <span>{model.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
