import { useState } from "react";
import {
  Wrench,
  Train,
  Cloud,
  MessageSquare,
  ChevronDown,
  Eye,
  MapPin,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SubItem {
  title: string;
  id: string;
}

interface Category {
  title: string;
  icon: any;
  id: string;
  subItems?: SubItem[];
}

const categories: Category[] = [
  {
    title: "Internal Tools",
    icon: Wrench,
    id: "internal-tools",
    subItems: [
      { title: "False God", id: "False God" },
      { title: "PDF Center", id: "PDF Center" },
      { title: "Uptime Kuma", id: "Uptime Kuma" },
    ],
  },
  {
    title: "Overwatch",
    icon: Eye,
    id: "overwatch",
    subItems: [
      { title: "NSEWL", id: "overwatch-nsewl" },
      { title: "CCL", id: "overwatch-ccl" },
      { title: "TEL", id: "overwatch-tel" },
      { title: "NSEWL Staging", id: "overwatch-nsewl-staging" },
      { title: "CCL Staging", id: "overwatch-ccl-staging" },
      { title: "TEL Staging", id: "overwatch-tel-staging" },
    ],
  },
  {
    title: "TFMS",
    icon: Train,
    id: "tfms",
    subItems: [
      { title: "NSEWL", id: "tfms-nsewl" },
      { title: "CCL", id: "tfms-ccl" },
      { title: "NSEWL Staging", id: "tfms-nsewl-staging" },
      { title: "CCL Staging", id: "tfms-ccl-staging" },
    ],
  },

  {
    title: "GIS",
    icon: MapPin,
    id: "gis",
    subItems: [
      { title: "GIS Local", id: "gis-local" },
      { title: "GIS RTS", id: "gis-rts" },
      { title: "GIS Local (v2)", id: "gis-local-v2" },
    ],
  },
  {
    title: "OpsInsight",
    icon: Cloud,
    id: "ops-insight",
    subItems: [
      { title: "OpsInsight", id: "ops-insight" },
      { title: "OpsInsight Staging", id: "ops-insight-staging" },
    ],
  },
  {
    title: "Other Apps",
    icon: MessageSquare,
    id: "other-apps",
    subItems: [
      { title: "FOCAL", id: "focal" },
      { title: "Optimus", id: "optimus" },
      { title: "RSMap", id: "rsmap" },
      { title: "OCC Apps", id: "occ-apps" },
    ],
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <Collapsible
                  key={category.id}
                  open={openCategories.includes(category.id)}
                  onOpenChange={() => toggleCategory(category.id)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="hover:bg-muted/50">
                        <category.icon className="h-4 w-4" />
                        {open && (
                          <>
                            <span>{category.title}</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </>
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {category.subItems && open && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {category.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.id}>
                              <SidebarMenuSubButton
                                onClick={() => scrollToElement(subItem.id)}
                                className="cursor-pointer hover:bg-muted/50"
                              >
                                <span>{subItem.title}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
