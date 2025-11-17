import { AppCard } from "@/components/AppCard";
import { CategorySection } from "@/components/CategorySection";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Train, 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  Cloud,
  Briefcase,
  Shield,
  Mail,
  Calendar,
  MessageSquare
} from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col w-full">
          {/* Header */}
          <header className="bg-card border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-card/95">
            <div className="container mx-auto px-6 py-6 flex items-center gap-4">
              <SidebarTrigger />
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-foreground">App Dashboard</h1>
                <p className="text-muted-foreground">Access all your hosted applications and tools in one place</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-6 py-12 space-y-12">
            {/* Internal Tools Category */}
            <div id="internal-tools">
              <CategorySection title="Internal Tools">
                <div id="admin-portal">
                  <AppCard
                    name="Admin Portal"
                    description="System administration and user management"
                    icon={Settings}
                    url="https://admin.example.com"
                    environment="production"
                  />
                </div>
                <div id="user-directory">
                  <AppCard
                    name="User Directory"
                    description="Company-wide user directory and profiles"
                    icon={Users}
                    url="https://directory.example.com"
                    environment="production"
                  />
                </div>
                <div id="document-center">
                  <AppCard
                    name="Document Center"
                    description="Centralized document repository"
                    icon={FileText}
                    url="https://docs.example.com"
                    environment="staging"
                  />
                </div>
                <div id="analytics-dashboard">
                  <AppCard
                    name="Analytics Dashboard"
                    description="Business intelligence and reporting"
                    icon={BarChart3}
                    url="https://analytics.example.com"
                    environment="production"
                  />
                </div>
              </CategorySection>
            </div>

            {/* TFMS Category */}
            <div id="tfms">
              <CategorySection title="TFMS - Train Fleet Management System">
                <div id="tfms-nsewl">
                  <AppCard
                    name="TFMS NSEWL"
                    description="North-South East-West Line fleet management"
                    icon={Train}
                    url="https://tfms-nsewl.example.com"
                    environment="production"
                  />
                </div>
                <div id="tfms-ccl">
                  <AppCard
                    name="TFMS CCL"
                    description="Circle Line fleet management"
                    icon={Train}
                    url="https://tfms-ccl.example.com"
                    environment="production"
                  />
                </div>
                <div id="tfms-nel">
                  <AppCard
                    name="TFMS NEL"
                    description="North East Line fleet management"
                    icon={Train}
                    url="https://tfms-nel.example.com"
                    environment="staging"
                  />
                </div>
                <div id="tfms-dtl">
                  <AppCard
                    name="TFMS DTL"
                    description="Downtown Line fleet management"
                    icon={Train}
                    url="https://tfms-dtl.example.com"
                    environment="production"
                  />
                </div>
              </CategorySection>
            </div>

            {/* External Services Category */}
            <div id="external-services">
              <CategorySection title="External Services">
                <div id="cloud-storage">
                  <AppCard
                    name="Cloud Storage"
                    description="File storage and sharing platform"
                    icon={Cloud}
                    url="https://storage.example.com"
                    environment="production"
                  />
                </div>
                <div id="project-management">
                  <AppCard
                    name="Project Management"
                    description="Track projects and team collaboration"
                    icon={Briefcase}
                    url="https://projects.example.com"
                    environment="production"
                  />
                </div>
                <div id="security-portal">
                  <AppCard
                    name="Security Portal"
                    description="Security monitoring and compliance"
                    icon={Shield}
                    url="https://security.example.com"
                    environment="production"
                  />
                </div>
                <div id="email-system">
                  <AppCard
                    name="Email System"
                    description="Corporate email and communications"
                    icon={Mail}
                    url="https://mail.example.com"
                    environment="production"
                  />
                </div>
              </CategorySection>
            </div>

            {/* Communication Tools Category */}
            <div id="communication">
              <CategorySection title="Communication Tools">
                <div id="calendar">
                  <AppCard
                    name="Calendar"
                    description="Shared calendars and scheduling"
                    icon={Calendar}
                    url="https://calendar.example.com"
                    environment="production"
                  />
                </div>
                <div id="team-chat">
                  <AppCard
                    name="Team Chat"
                    description="Instant messaging and collaboration"
                    icon={MessageSquare}
                    url="https://chat.example.com"
                    environment="staging"
                  />
                </div>
              </CategorySection>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-border bg-card mt-20">
            <div className="container mx-auto px-6 py-6">
              <p className="text-center text-sm text-muted-foreground">
                App Dashboard © 2024 - All apps and services in one place
              </p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
