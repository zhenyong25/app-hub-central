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
  MessageSquare,
  Eye,
  MapPin,
  Globe,
  TrendingUp
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
                <div id="focal">
                  <AppCard
                    name="FOCAL"
                    description="Operational coordination and logistics"
                    icon={TrendingUp}
                    url="https://focal.example.com"
                    environment="production"
                  />
                </div>
                <div id="ops-insight">
                  <AppCard
                    name="OpsInsight"
                    description="Operational analytics and insights"
                    icon={BarChart3}
                    url="https://opsinsight.example.com"
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
                    iconColor="nsewl-red"
                  />
                </div>
                <div id="tfms-ccl">
                  <AppCard
                    name="TFMS CCL"
                    description="Circle Line fleet management"
                    icon={Train}
                    url="https://tfms-ccl.example.com"
                    environment="production"
                    iconColor="ccl-orange"
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
                <div id="tfms-tel">
                  <AppCard
                    name="TFMS TEL"
                    description="Thomson-East Coast Line fleet management"
                    icon={Train}
                    url="https://tfms-tel.example.com"
                    environment="production"
                    iconColor="tel-brown"
                  />
                </div>
              </CategorySection>
            </div>

            {/* Overwatch Category */}
            <div id="overwatch">
              <CategorySection title="Overwatch - Real-time Monitoring">
                <div id="overwatch-nsewl">
                  <AppCard
                    name="Overwatch NSEWL"
                    description="Real-time monitoring for NSEWL"
                    icon={Eye}
                    url="https://overwatch-nsewl.example.com"
                    environment="production"
                    iconColor="nsewl-red"
                  />
                </div>
                <div id="overwatch-ccl">
                  <AppCard
                    name="Overwatch CCL"
                    description="Real-time monitoring for CCL"
                    icon={Eye}
                    url="https://overwatch-ccl.example.com"
                    environment="production"
                    iconColor="ccl-orange"
                  />
                </div>
                <div id="overwatch-tel">
                  <AppCard
                    name="Overwatch TEL"
                    description="Real-time monitoring for TEL"
                    icon={Eye}
                    url="https://overwatch-tel.example.com"
                    environment="production"
                    iconColor="tel-brown"
                  />
                </div>
              </CategorySection>
            </div>

            {/* GIS Category */}
            <div id="gis">
              <CategorySection title="GIS - Geographic Information System">
                <div id="gis-local">
                  <AppCard
                    name="GIS Local"
                    description="Local geographic information system"
                    icon={MapPin}
                    url="https://gis-local.example.com"
                    environment="production"
                  />
                </div>
                <div id="gis-mysg">
                  <AppCard
                    name="GIS MYSG"
                    description="MySG geographic information system"
                    icon={Globe}
                    url="https://gis-mysg.example.com"
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
