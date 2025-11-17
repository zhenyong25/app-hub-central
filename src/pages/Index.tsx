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
  TrendingUp,
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
                <h1 className="text-4xl font-bold text-foreground">
                  Strides Technologies App Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Access all your hosted applications and tools in one place
                </p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-6 py-12 space-y-12">
            {/* Internal Tools Category */}
            <div id="internal-tools">
              <CategorySection title="Internal Tools">
                <div id="false-god">
                  <AppCard
                    name="False God"
                    description="Your second choice from ChatGPT"
                    icon={Users}
                    url="https://art20bsd311hcmd.smrtnet.ads:3210/auth"
                    environment="production"
                  />
                </div>
                <div id="document-center">
                  <AppCard
                    name="PDF Center"
                    description="Internal tool for converting text and documents into PDF"
                    icon={FileText}
                    url="https://pdf.artcdm.dev/auth/ldap.php?redirect=pdf.artcdm.dev/"
                    environment="production"
                  />
                </div>
                <div id="analytics-dashboard">
                  <AppCard
                    name="Uptime Kuma"
                    description="Dashboard for monitoring application uptime"
                    icon={BarChart3}
                    url="https://uptime.artcdm.dev/"
                    environment="production"
                    iconColor="green-200"
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
                    url=""
                    environment="production"
                    iconColor="green-200"
                  />
                </div>
                <div id="overwatch-ccl">
                  <AppCard
                    name="Overwatch CCL"
                    description="Real-time monitoring for CCL"
                    icon={Eye}
                    url=""
                    environment="production"
                    iconColor="orange-200"
                  />
                </div>
                <div id="overwatch-tel">
                  <AppCard
                    name="Overwatch TEL"
                    description="Real-time monitoring for TEL"
                    icon={Eye}
                    url=""
                    environment="production"
                    iconColor="yellow-600"
                  />
                </div>
                <div id="overwatch-nsewl">
                  <AppCard
                    name="Overwatch NSEWL"
                    description="Real-time monitoring for NSEWL"
                    icon={Eye}
                    url=""
                    environment="staging"
                    iconColor="green-200"
                  />
                </div>
                <div id="overwatch-ccl">
                  <AppCard
                    name="Overwatch CCL"
                    description="Real-time monitoring for CCL"
                    icon={Eye}
                    url=""
                    environment="staging"
                    iconColor="orange-200"
                  />
                </div>
                <div id="overwatch-tel">
                  <AppCard
                    name="Overwatch TEL"
                    description="Real-time monitoring for TEL"
                    icon={Eye}
                    url=""
                    environment="staging"
                    iconColor="yellow-600"
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
                    description="North-South East-West Line Fleet Management"
                    icon={Train}
                    url="http://overwatchnsewl.smrt.com.sg:3031/tfm"
                    environment="production"
                    iconColor="green-200"
                  />
                </div>
                <div id="tfms-ccl">
                  <AppCard
                    name="TFMS CCL"
                    description="Circle Line Fleet Management"
                    icon={Train}
                    url="https://ccl23bsd329dcor/TFMS_CCL"
                    environment="production"
                    iconColor="orange-200"
                  />
                </div>
                <div id="tfms-nsewl-staging">
                  <AppCard
                    name="TFMS NSEWL"
                    description="North-South East-West Line Fleet Management"
                    icon={Train}
                    url="https://art20bsd311hcmd.smrtnet.ads/TFM/"
                    environment="staging"
                    iconColor="green-200"
                  />
                </div>
                <div id="tfms-ccl-staging">
                  <AppCard
                    name="TFMS CCL"
                    description="Circle Line Fleet Management"
                    icon={Train}
                    url="http://art20bsd311hcmd.smrtnet.ads:3130/TFM"
                    environment="staging"
                    iconColor="orange-200"
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
                    description="Local Geographic Information System"
                    icon={Globe}
                    url="https://art20bsd311hcmd.smrtnet.ads/SMRT_GIS/"
                    environment="production"
                  />
                </div>
                <div id="gis-mysg">
                  <AppCard
                    name="GIS RTS"
                    description="RTS Geographic Information System"
                    icon={Globe}
                    url="https://art20bsd311hcmd.smrtnet.ads/SMRT_GIS_RTS/"
                    environment="production"
                    iconColor="cyan-300"
                  />
                </div>
                <div id="gis-mysg">
                  <AppCard
                    name="GIS Local (v2)"
                    description="Local Geographic Information System (v2)"
                    icon={Globe}
                    url="https://art20bsd311hcmd.smrtnet.ads/SMRT_GIS_Platform/"
                    environment="staging"
                    iconColor="gray-200"
                  />
                </div>
              </CategorySection>
            </div>

            <div id="ops-insight">
              <CategorySection title="OpsInsight">
                <div id="ops-insight">
                  <AppCard
                    name="OpsInsight"
                    description="Operational Insights and Analytics"
                    icon={BarChart3}
                    url=""
                    environment="production"
                  />
                </div>
                <div id="ops-insight">
                  <AppCard
                    name="OpsInsight"
                    description="Operational Insights and Analytics"
                    icon={BarChart3}
                    url=""
                    environment="staging"
                  />
                </div>
              </CategorySection>
            </div>

            {/* Other Apps Category */}
            <div id="other-apps">
              <CategorySection title="Other Apps">
                <div id="focal">
                  <AppCard
                    name="FOCAL"
                    description="Point Machine Monitoring System"
                    icon={TrendingUp}
                    url="https://rail-webapps-focalweb-prod.azurewebsites.net/"
                    environment="production"
                  />
                </div>
                <div id="optimus">
                  <AppCard
                    name="Optimus"
                    description="Optimus"
                    icon={BarChart3}
                    url=""
                    environment="production"
                  />
                </div>
                <div id="rsmap">
                  <AppCard
                    name="RSMap"
                    description="RSMap"
                    icon={BarChart3}
                    url="https://art20bsd311hcmd.smrtnet.ads/SMRT_NSEWL_RSMAP"
                    environment="production"
                    iconColor="red-200"
                  />
                </div>
                <div id="occ-apps">
                  <AppCard
                    name="OCC Apps"
                    description="List of OCC Applications"
                    icon={BarChart3}
                    url="https://nsw23bsd408dcor.smrtnet.ads/occ-apps-repository/"
                    environment="production"
                  />
                </div>
              </CategorySection>
            </div>
          </main>
          {/* Footer */}
          <footer className="border-t border-border bg-card mt-20">
            <div className="container mx-auto px-6 py-6">
              <p className="text-center text-sm text-muted-foreground">
                Strides Technologies App Dashboard © 2025 - All apps and
                services in one place
              </p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
