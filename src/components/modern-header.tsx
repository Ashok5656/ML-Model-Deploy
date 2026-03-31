import { useState, useRef, useEffect } from "react";
import { 
  Notification as Bell, 
  Moon, 
  Sun, 
  Menu, 
  User, 
  Logout as LogOut, 
  Settings, 
  UserAvatar as UserCircle, 
  ChevronLeft as PanelLeftClose, 
  ChevronRight as PanelLeftOpen, 
  Search, 
  Globe, 
  Headset,
  Checkmark as Check, 
  Security as ShieldCheck, 
  Security as ShieldOff, 
  ChevronLeft, 
  ChevronRight, 
  Switcher as LayoutSidebar, 
  Menu as Sidebar, 
  Lightning as Zap, 
  SkipBack as ArrowLeftToLine, 
  TextAlignLeft as AlignLeft, 
  Filter as SlidersHorizontal, 
  Information as Info, 
  Minimize as Minimize2, 
  Maximize as Maximize2, 
  ChevronLeft as ChevronsLeft, 
  ChevronRight as ChevronsRight,
  Close,
  Notebook as StickyNote,
} from "@carbon/icons-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import clari5Logo from "../assets/6dfdb4c1a68d250267231b32de1f1a07e05b6acf.png";
import { GlobalSearch, SearchResult } from "./global-search";
import { KeyboardShortcuts, useKeyboardShortcuts } from "./keyboard-shortcuts";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";

interface Module {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  gradient?: string;
}

interface ModernHeaderProps {
  onLogout: () => void;
  isSubmenuOpen?: boolean;
  onSubmenuToggle?: () => void;
  is2FAEnabled?: boolean;
  onToggle2FA?: (enabled: boolean) => void;
  username?: string;
  userRole?: string;
  isSidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
  modules?: Module[];
  currentModule?: string;
  onModuleSelect?: (moduleId: string) => void;
  searchableItems?: SearchResult[]; 
  pageTitle?: string;
}

export function ModernHeader({ 
  onLogout, 
  isSubmenuOpen, 
  onSubmenuToggle,
  is2FAEnabled,
  onToggle2FA,
  username,
  userRole,
  isSidebarCollapsed,
  onSidebarToggle,
  modules,
  currentModule,
  onModuleSelect,
  searchableItems = [], 
  pageTitle,
}: ModernHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showNotifications, setShowNotifications] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useKeyboardShortcuts(
    () => {
      inputRef.current?.focus();
      setIsSearchActive(true);
    },
    () => setIsShortcutsOpen(true)
  );

  const handleLogout = () => {
    onLogout();
  };

  const languages = [
    { code: "en", name: "English", label: "EN" },
    { code: "es", name: "Español", label: "ES" },
    { code: "fr", name: "Français", label: "FR" },
    { code: "de", name: "Deutsch", label: "DE" },
    { code: "zh", name: "中文", label: "ZH" },
    { code: "ja", name: "日本語", label: "JA" },
    { code: "ar", name: "العربية", label: "AR" },
    { code: "hi", name: "हिन्दी", label: "HI" },
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  const versionDetails = {
    "Config": [
      { name: "Action Maintenance", version: "v2.1.0" },
      { name: "Case Management System", version: "v2.2.0" },
      { name: "Entity Tagging", version: "v2.3.0" },
      { name: "File Upload", version: "v2.4.0" },
      { name: "Jobs", version: "v2.5.0" },
      { name: "Manual Alert Creation", version: "v2.6.0" },
      { name: "Reference Codes", version: "v2.7.0" },
      { name: "Remittance Watchlist", version: "v2.8.0" },
      { name: "Risk Level Assessment", version: "v2.9.0" },
      { name: "Scenario Authoring Tool", version: "v2.10.0" },
      { name: "Strategic Dashboard", version: "v2.11.0" },
      { name: "Strategy Builder", version: "v2.12.0" },
    ],
    "Audit": [
      { name: "Authorization", version: "v1.5.2" },
      { name: "Activity Logs", version: "v1.6.2" },
      { name: "Access Tracking", version: "v1.7.2" },
      { name: "Compliance Reports", version: "v1.8.2" },
    ],
    "AML": [
      { name: "Automated Clearing Reports", version: "v5.1.0" },
      { name: "Batch Settings Discarding", version: "v5.0.1" },
      { name: "Branch Risk Score Cases", version: "v5.1.4" },
      { name: "Counterfeit Currency Report", version: "v5.0.2" },
      { name: "Customer Risk Score Cases", version: "v5.1.2" },
      { name: "Dual Usage Codes Upload", version: "v5.0.3" },
      { name: "Batch Processing", version: "v5.6.0" },
      { name: "Sangs Reports", version: "v5.2.1" },
      { name: "KYC Verification", version: "v5.4.0" },
      { name: "Manual Alert Creation", version: "v5.6.2" },
      { name: "Manual RTR Alerts", version: "v5.6.1" },
      { name: "RVN/CVP/ORDERS", version: "v5.5.1" },
      { name: "Online Customer Onboarding", version: "v5.4.2" },
      { name: "Reattach Screening", version: "v5.0.5" },
      { name: "Reports Dashboard", version: "v5.3.0" },
      { name: "RCON MSI SST Management", version: "v5.1.1" },
      { name: "Research Data Loading", version: "v5.2.0" },
      { name: "Unusual Posting Transaction", version: "v5.5.0" },
      { name: "Watchlist Rules", version: "v5.3.1" },
      { name: "Watchlist Upload", version: "v5.3.2" },
    ],
    "Reports": [
      { name: "Generate SAR Report", version: "v3.0.1" },
      { name: "Monthly Summary", version: "v3.1.0" },
      { name: "Trend Analysis", version: "v3.2.0" },
      { name: "Custom Queries", version: "v3.3.0" },
      { name: "Compliance Dashboard", version: "v3.4.0" },
      { name: "Risk Assessment Reports", version: "v3.5.0" },
      { name: "Transaction Analysis", version: "v3.6.0" },
      { name: "Audit Trail Reports", version: "v3.7.0" },
    ],
    "Investigation": [
      { name: "Open Cases", version: "v4.2.1" },
      { name: "Pending Reviews", version: "v4.3.0" },
      { name: "Closed This Month", version: "v4.4.0" },
      { name: "Archive Search", version: "v4.5.0" },
      { name: "Evidence Management", version: "v4.6.0" },
      { name: "Case Timeline", version: "v4.7.0" },
      { name: "Investigation Notes", version: "v4.8.0" },
      { name: "Stakeholder Communication", version: "v4.9.0" },
    ]
  };

  const notifications = [
    {
      id: 1,
      title: "High-Risk Transaction Alert",
      description: "₹8.5L withdrawal detected - Rajesh Kumar",
      time: "2 min ago",
      type: "critical",
      unread: true,
    },
    {
      id: 2,
      title: "Compliance Report Ready",
      description: "Monthly AML report has been generated",
      time: "15 min ago",
      type: "info",
      unread: true,
    },
    {
      id: 3,
      title: "System Update Complete",
      description: "AI detection model updated successfully",
      time: "1 hour ago",
      type: "success",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <>
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-50">
        
        <div className="h-[54px] px-4 flex items-center justify-between gap-4 relative">
          
          <div className="flex items-center gap-4">
            {onSidebarToggle && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      onClick={onSidebarToggle}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-[36px] w-[36px] flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-[8px] transition-all text-gray-500 hover:text-[#2A53A0] dark:text-gray-400 dark:hover:text-[#6b93e6]"
                    >
                      {isSidebarCollapsed ? (
                        <ChevronRight className="size-5" />
                      ) : (
                        <ChevronLeft className="size-5" />
                      )}
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700">
                    <p>{isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <div ref={searchContainerRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[260px] hidden md:block">
              <div 
                className={`flex items-center gap-3 px-4 h-[40px] bg-white dark:bg-gray-900 rounded-[8px] transition-all border ${
                  isSearchActive 
                    ? 'border-[#2A53A0] ring-4 ring-[#2A53A0]/10 shadow-md' 
                    : 'border-gray-200 dark:border-gray-800 hover:shadow-sm'
                }`}
              >
                <Search className={`size-5 transition-colors ${isSearchActive ? 'text-[#2A53A0]' : 'text-gray-400'}`} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchActive(true)}
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-gray-700 dark:text-gray-200 placeholder:text-gray-400 h-full w-full font-normal"
                  placeholder="Search Genie"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => { setSearchQuery(""); inputRef.current?.focus(); }}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Clear</span>
                    <Close className="size-4" />
                  </button>
                )}
              </div>
              
              <AnimatePresence>
                {isSearchActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] mt-2 z-50"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden ring-1 ring-black/5">
                      <GlobalSearch 
                        query={searchQuery}
                        items={searchableItems}
                        onSelect={(result) => {
                          setIsSearchActive(false);
                          setSearchQuery(result.title);
                          if (result.path && onModuleSelect) {
                            onModuleSelect(result.path);
                          }
                        }}
                        onClose={() => setIsSearchActive(false)}
                        className="border-0 shadow-none rounded-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          <div className="flex items-center gap-2 sm:gap-4">

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-[36px] w-[36px] flex items-center justify-center rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-[#2A53A0] transition-all"
                >
                  <Info className="size-5" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-gray-200 dark:border-gray-800 shadow-xl">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Info className="size-4 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <span>System Versions</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                  {Object.entries(versionDetails).map(([category, items]) => (
                    <div key={category} className="py-2">
                      <div className="px-4 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50/50 dark:bg-gray-800/50 sticky top-0 backdrop-blur-sm z-10">
                        {category}
                      </div>
                      {items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                          <span className="text-sm text-gray-700 dark:text-gray-300 truncate max-w-[180px] group-hover:text-[#2A53A0] transition-colors" title={item.name}>{item.name}</span>
                          <Badge variant="outline" className="font-mono text-[10px] h-5 px-1.5 border-gray-200 dark:border-gray-700 text-gray-500 bg-gray-50 dark:bg-gray-900">
                            {item.version}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <div className="px-4 py-2.5 bg-gray-50/50 dark:bg-gray-800/50">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    System Core: v2.4.0 (Stable)
                  </p>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-[36px] w-[36px] flex items-center justify-center rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-[#2A53A0] transition-all"
                  >
                    <Headset className="size-5" />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700">
                  <p>Support</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-[36px] w-[36px] flex items-center justify-center rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-[#2A53A0] transition-all"
                  >
                    <AnimatePresence mode="wait">
                      {theme === "light" ? (
                        <motion.div
                          key="moon"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon className="size-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun className="size-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700">
                  <p>Switch to {theme === "light" ? "dark" : "light"} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu open={showNotifications} onOpenChange={setShowNotifications}>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative h-[36px] w-[36px] flex items-center justify-center rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-[#2A53A0] transition-all"
                >
                  <Bell className="size-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 border border-white dark:border-gray-950"></span>
                    </span>
                  )}
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-gray-200 dark:border-gray-800 shadow-xl">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    {unreadCount > 0 && (
                      <Badge className="bg-[#2A53A0] hover:bg-[#2A53A0]/90 text-white border-0">
                        {unreadCount} New
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto no-scrollbar">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-all ${
                        notification.unread ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                          notification.type === 'critical' ? 'bg-red-500 shadow-sm shadow-red-500/50' :
                          notification.type === 'info' ? 'bg-blue-500 shadow-sm shadow-blue-500/50' :
                          'bg-green-500 shadow-sm shadow-green-500/50'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 line-clamp-2">
                            {notification.description}
                          </p>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1.5 font-medium">
                            {notification.time}
                          </p>
                        </div>
                        {notification.unread && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2A53A0]" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-900/50">
                  <button className="text-xs text-[#2A53A0] dark:text-[#6b93e6] hover:text-[#1e3a70] dark:hover:text-[#8cb0ff] w-full text-center font-medium py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    Mark all as read
                  </button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 px-2 py-1 rounded-[8px] h-[38px] hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-transparent"
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#2A53A0] flex items-center justify-center text-white shadow-md ring-2 ring-white dark:ring-gray-950 overflow-hidden text-sm font-bold">
                       {username ? username.charAt(0).toUpperCase() : "U"}
                    </div>
                  </div>
                  <div className="hidden lg:flex flex-col items-start text-left">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-none mb-0.5">{username || "User"}</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-tight uppercase">{userRole || "Admin"}</span>
                  </div>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-gray-200 dark:border-gray-800 shadow-xl">
                <DropdownMenuLabel>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-10 h-10 rounded-full bg-[#2A53A0] flex items-center justify-center text-white text-lg font-bold">
                      {username ? username.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{username}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 tracking-tight uppercase">{userRole}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2.5 cursor-pointer">
                  <UserCircle className="size-4 mr-2.5 text-[#2A53A0]" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2.5 cursor-pointer">
                  <Settings className="size-4 mr-2.5 text-[#2A53A0]" />
                  <span>Account Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2.5 cursor-pointer">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <ShieldCheck className="size-4 mr-2.5 text-[#2A53A0]" />
                      <span>Two-Factor Auth</span>
                    </div>
                    <Switch checked={is2FAEnabled} onCheckedChange={onToggle2FA} />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsShortcutsOpen(true)} className="py-2.5 cursor-pointer">
                  <span className="size-4 mr-2.5 flex items-center justify-center text-[14px]">⌨️</span>
                  <span>Keyboard Shortcuts</span>
                  <kbd className="ml-auto text-[10px] text-gray-500 px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono">?</kbd>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="py-2.5 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <LogOut className="size-4 mr-2.5" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <KeyboardShortcuts
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </>
  );
}
