import { useState } from "react";
import { Wrench, Train, Cloud, MessageSquare, ChevronDown } from "lucide-react";
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
      { title: "Admin Portal", id: "admin-portal" },
      { title: "User Directory", id: "user-directory" },
      { title: "Document Center", id: "document-center" },
      { title: "Analytics Dashboard", id: "analytics-dashboard" },
    ]
  },
  { 
    title: "TFMS", 
    icon: Train, 
    id: "tfms",
    subItems: [
      { title: "NSEWL", id: "tfms-nsewl" },
      { title: "CCL", id: "tfms-ccl" },
      { title: "NEL", id: "tfms-nel" },
      { title: "DTL", id: "tfms-dtl" },
    ]
  },
  { 
    title: "External Services", 
    icon: Cloud, 
    id: "external-services",
    subItems: [
      { title: "Cloud Storage", id: "cloud-storage" },
      { title: "Project Management", id: "project-management" },
      { title: "Security Portal", id: "security-portal" },
      { title: "Email System", id: "email-system" },
    ]
  },
  { 
    title: "Communication", 
    icon: MessageSquare, 
    id: "communication",
    subItems: [
      { title: "Calendar", id: "calendar" },
      { title: "Team Chat", id: "team-chat" },
    ]
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
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
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
