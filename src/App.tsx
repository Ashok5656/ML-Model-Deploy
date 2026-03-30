import { useState, useRef } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner@2.0.3";
import { ModernHeader } from "./components/modern-header";
import { UnifiedSidebar } from "./components/unified-sidebar";
import { BreadcrumbNav } from "./components/breadcrumb-nav";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

// Only functional component kept
import { EntityTagging } from "./components/entity-tagging";
import { MLModelDeploy } from "./components/ml-model-deploy";
import { ComingSoon } from "./components/coming-soon";

import {
  Dashboard,
  User,
  UserProfile,
  Branch,
  Security,
  Scan,
  Activity,
  UserFollow,
  Document,
  List,
  ListChecked,
  ChartBar,
  Edit,
  Notification,
  CheckmarkFilled,
  Money,
  Cognitive,
  Search,
  Group,
  SettingsAdjust,
  DocumentImport,
  View,
  Settings,
  Time,
  Identification,
  Report,
  ChartRadar,
  FlowData,
  ArrowLeft
} from "@carbon/icons-react";

import AppFooter from "./components/app-footer";

export default function App() {
  const mainContentRef = useRef<HTMLElement>(null);
  
  const createSubItems = (items: { label: string; icon: any; description?: string }[]) => 
    items.map(item => ({
      id: item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      ...item
    }));

  const configSubItems = createSubItems([
    { label: "Action Maintenance", icon: Edit },
    { label: "Case Management System Configuration", icon: SettingsAdjust },
    { label: "Entity Tagging", icon: Identification },
    { label: "Jobs", icon: Time },
    { label: "ML Model Deploy", icon: Cognitive },
    { label: "Manual Alert Creation", icon: Notification },
    { label: "Reference Codes", icon: Script },
    { label: "Remittance Watchlist Configuration", icon: List },
    { label: "Risk Level Assessment", icon: Warning },
    { label: "Scenario Authoring Tool", icon: FlowData },
    { label: "Strategy Builder", icon: Chemistry },
  ]);

  const auditSubItems = createSubItems([
    { label: "Authorization", icon: CheckmarkFilled },
  ]);

  const amlSubItems = createSubItems([
    { label: "Anti Money Laundering Reports", icon: Report },
    { label: "Batch Customer Onboarding", icon: Group },
    { label: "Branch Risk Score Card", icon: Branch },
    { label: "Counterfeit Currency Report Upload", icon: Money },
    { label: "Customer Risk Score Card", icon: UserProfile },
    { label: "Dual Usage Goods Upload", icon: DocumentImport },
    { label: "FATCA", icon: Script },
    { label: "FATCA Reports", icon: Report },
    { label: "KYC", icon: Identification },
    { label: "Manual STR Filing", icon: Edit },
    { label: "Non Customers", icon: User },
    { label: "Online Customer Onboarding", icon: UserFollow },
    { label: "Remittance Screening", icon: Search },
    { label: "Reports", icon: Document },
    { label: "Sanction List Management", icon: ListChecked },
    { label: "Trade Finance Money Laundering Admin", icon: Settings },
    { label: "Trade Finance Sanction Screening", icon: Scan },
    { label: "Watchlist Rules", icon: List },
    { label: "Watchlist Upload", icon: DocumentImport },
  ]);

  const reportsSubItems = createSubItems([
    { label: "CTR", icon: Report },
    { label: "EFT", icon: Report },
    { label: "STR", icon: Report },
    { label: "TTR", icon: Report },
  ]);

  const investigationSubItems = createSubItems([
    { label: "Audit Inquiry", icon: Search },
    { label: "Dashboards", icon: Dashboard },
    { label: "Event Trace", icon: Activity },
    { label: "Executive Dashboard", icon: ChartRadar },
    { label: "Fraud Resolution", icon: CheckmarkFilled },
    { label: "Investigation Tool", icon: Cognitive },
    { label: "MIS Reports", icon: ChartBar },
    { label: "Report Viewer", icon: View },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [username, setUsername] = useState("Rajesh Kumar");
  const [userRole, setUserRole] = useState("System Administrator");
  const [activeItem, _setActiveItem] = useState("config-entity-tagging");
  const [refreshKey, setRefreshKey] = useState(0);

  const setActiveItem = (item: string) => {
    if (item === activeItem) {
      setRefreshKey(prev => prev + 1);
    } else {
      _setActiveItem(item);
    }
  };

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  
  const [is2FAEnabled, setIs2FAEnabled] = useState(() => {
    const saved = localStorage.getItem("is2FAEnabled");
    return saved === null ? true : saved === "true";
  });

  const menuItems = [
    {
      id: "config",
      title: "CONFIG",
      icon: Settings,
      gradient: "from-gray-500 via-slate-600 to-zinc-600",
      subItems: configSubItems,
    },
    {
      id: "audit",
      title: "AUDIT",
      icon: View,
      gradient: "from-amber-500 via-orange-600 to-red-600",
      subItems: auditSubItems,
    },
    {
      id: "aml",
      title: "AML",
      icon: Security,
      gradient: "from-blue-500 via-indigo-600 to-purple-600",
      subItems: amlSubItems,
    },
    {
      id: "reports",
      title: "REPORTS",
      icon: Report,
      gradient: "from-teal-500 via-green-600 to-emerald-600",
      subItems: reportsSubItems,
    },
    {
      id: "investigation",
      title: "INVESTIGATION",
      icon: Search,
      gradient: "from-purple-500 via-fuchsia-600 to-pink-600",
      subItems: investigationSubItems,
    },
  ];

  const getCurrentContentInfo = () => {
    const parts = activeItem.split("-");
    const moduleId = parts[0];
    const itemId = parts.slice(1).join("-");
    
    const menu = menuItems.find(m => m.id === moduleId);
    if (menu) {
      const subItem = menu.subItems?.find(i => i.id === itemId);
      if (subItem) {
        return {
          title: subItem.label,
          icon: subItem.icon,
          breadcrumbs: [
            { label: menu.title, path: moduleId },
            { label: subItem.label, path: activeItem, isActive: true }
          ]
        };
      }
      return {
        title: menu.title,
        icon: menu.icon,
        breadcrumbs: [{ label: menu.title, path: menu.id, isActive: true }]
      };
    }
    return { 
      title: "Entity Tagging", 
      icon: Identification,
      breadcrumbs: [{ label: "CONFIG", path: "config" }, { label: "Entity Tagging", path: "config-entity-tagging", isActive: true }]
    };
  };

  const contentInfo = getCurrentContentInfo();

  const searchableItems = menuItems.flatMap(menu => 
    menu.subItems.map(item => ({
      id: `${menu.id}-${item.id}`,
      title: item.label,
      module: menu.title,
      type: "Navigation",
      description: item.description || `Navigate to ${item.label}`,
      path: `${menu.id}-${item.id}`
    }))
  );

  const handleLogout = () => {
    // We are disabling logout for now to stay on the main app
    console.log("Logout triggered");
  };
  
  const handleToggle2FA = (enabled: boolean) => {
    setIs2FAEnabled(enabled);
    localStorage.setItem("is2FAEnabled", String(enabled));
  };

  return (
    <ThemeProvider>
      <Toaster position="top-center" richColors />
      <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden font-sans">
        
        <div className="flex-1 flex overflow-hidden">
          <UnifiedSidebar
            menuItems={menuItems}
            activeItem={activeItem}
            onItemSelect={setActiveItem}
            isCollapsed={isSidebarCollapsed}
            onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />

          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <div className="flex-shrink-0">
              <ModernHeader 
                onLogout={handleLogout} 
                isSubmenuOpen={isSubmenuOpen}
                onSubmenuToggle={() => setIsSubmenuOpen(!isSubmenuOpen)}
                is2FAEnabled={is2FAEnabled}
                onToggle2FA={handleToggle2FA}
                username={username}
                userRole={userRole}
                isSidebarCollapsed={isSidebarCollapsed}
                onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                modules={menuItems.map(m => ({
                  id: m.id,
                  label: m.title,
                  icon: m.icon,
                  gradient: m.gradient
                }))}
                currentModule={activeItem.split("-")[0]}
                onModuleSelect={(moduleId) => setActiveItem(moduleId)}
                searchableItems={searchableItems}
              />
            </div>

            <div className="flex-shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 flex items-center justify-between h-[46px]">
              <div className="flex items-center gap-3">
                 <h3 className="text-[16px] font-semibold text-slate-800 dark:text-white">
                   {contentInfo.title}
                 </h3>
              </div>

              <div className="flex items-center gap-1.5">
                 <BreadcrumbNav 
                   items={contentInfo.breadcrumbs || []} 
                   onNavigate={(path) => setActiveItem(path)} 
                 />
              </div>
            </div>

            <main ref={mainContentRef} className="flex-1 overflow-hidden no-scrollbar bg-slate-50 dark:bg-slate-950/50">
              <div className="h-full">
                {activeItem === "config-entity-tagging" ? (
                  <EntityTagging key={refreshKey} />
                ) : activeItem === "config-ml-model-deploy" ? (
                  <MLModelDeploy key={refreshKey} />
                ) : (
                  <ComingSoon title={contentInfo.title} />
                )}
              </div>
            </main>
          </div>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

// Helper icons/components for sidebar structure
const Script = (props: any) => <Document {...props} />;
const Warning = (props: any) => <Security {...props} />;
const Chemistry = (props: any) => <Activity {...props} />;