import { Wrench, Train, Cloud, MessageSquare } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const categories = [
  { title: "Internal Tools", icon: Wrench, id: "internal-tools" },
  { title: "TFMS", icon: Train, id: "tfms" },
  { title: "External Services", icon: Cloud, id: "external-services" },
  { title: "Communication", icon: MessageSquare, id: "communication" },
];

export function AppSidebar() {
  const { open } = useSidebar();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(category.id)}
                    className="hover:bg-muted/50 cursor-pointer"
                  >
                    <category.icon className="h-4 w-4" />
                    {open && <span>{category.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
