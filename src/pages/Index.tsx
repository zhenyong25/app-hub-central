import { AppCard } from "@/components/AppCard";
import { CategorySection } from "@/components/CategorySection";
import { 
  Train, 
  Database, 
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-6 py-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">App Dashboard</h1>
            <p className="text-muted-foreground">Access all your hosted applications and tools in one place</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* TFMS Category */}
        <CategorySection title="TFMS - Train Fleet Management System">
          <AppCard
            name="TFMS NSEWL"
            description="North-South East-West Line fleet management"
            icon={Train}
            url="https://tfms-nsewl.example.com"
          />
          <AppCard
            name="TFMS CCL"
            description="Circle Line fleet management"
            icon={Train}
            url="https://tfms-ccl.example.com"
          />
          <AppCard
            name="TFMS NEL"
            description="North East Line fleet management"
            icon={Train}
            url="https://tfms-nel.example.com"
          />
          <AppCard
            name="TFMS DTL"
            description="Downtown Line fleet management"
            icon={Train}
            url="https://tfms-dtl.example.com"
          />
        </CategorySection>

        {/* Internal Tools Category */}
        <CategorySection title="Internal Tools">
          <AppCard
            name="Admin Portal"
            description="System administration and user management"
            icon={Settings}
            url="https://admin.example.com"
          />
          <AppCard
            name="User Directory"
            description="Company-wide user directory and profiles"
            icon={Users}
            url="https://directory.example.com"
          />
          <AppCard
            name="Document Center"
            description="Centralized document repository"
            icon={FileText}
            url="https://docs.example.com"
          />
          <AppCard
            name="Analytics Dashboard"
            description="Business intelligence and reporting"
            icon={BarChart3}
            url="https://analytics.example.com"
          />
        </CategorySection>

        {/* External Services Category */}
        <CategorySection title="External Services">
          <AppCard
            name="Cloud Storage"
            description="File storage and sharing platform"
            icon={Cloud}
            url="https://storage.example.com"
          />
          <AppCard
            name="Project Management"
            description="Track projects and team collaboration"
            icon={Briefcase}
            url="https://projects.example.com"
          />
          <AppCard
            name="Security Portal"
            description="Security monitoring and compliance"
            icon={Shield}
            url="https://security.example.com"
          />
          <AppCard
            name="Email System"
            description="Corporate email and communications"
            icon={Mail}
            url="https://mail.example.com"
          />
        </CategorySection>

        {/* Communication Tools Category */}
        <CategorySection title="Communication Tools">
          <AppCard
            name="Calendar"
            description="Shared calendars and scheduling"
            icon={Calendar}
            url="https://calendar.example.com"
          />
          <AppCard
            name="Team Chat"
            description="Instant messaging and collaboration"
            icon={MessageSquare}
            url="https://chat.example.com"
          />
        </CategorySection>
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
  );
};

export default Index;
