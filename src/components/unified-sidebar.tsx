import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { cn } from "./ui/utils";
import { Badge } from "./ui/badge";
import { 
  Home, 
  Dashboard,
  ChevronDown, 
  ChevronRight, 
  ChevronLeft, 
  Add, 
  Search,
  Subtract
} from "@carbon/icons-react";
import clari5Logo from "../assets/6dfdb4c1a68d250267231b32de1f1a07e05b6acf.png";
import clari5Favicon from "../assets/Clari5 Favicon.png";
import institutionLogo from "../assets/3ea1d39dbe6397aeec1aa1f46900a6cbfdf8c1c4.png";

// Define a generic Icon type for Carbon icons
type CarbonIcon = React.ComponentType<any>;

interface SubMenuItem {
  id: string;
  label: string;
  icon?: CarbonIcon;
}

interface SubMenuCategory {
  id: string;
  label: string;
  icon?: CarbonIcon;
  items: SubMenuItem[];
}

interface MenuItem {
  id: string;
  title: string;
  icon: CarbonIcon;
  gradient: string;
  subItems?: SubMenuItem[];
  categories?: SubMenuCategory[];
  alertCount?: number;
  useFlatSidebar?: boolean;
}

interface UnifiedSidebarProps {
  menuItems: MenuItem[];
  activeItem: string;
  onItemSelect: (itemId: string) => void;
  isCollapsed?: boolean;
  onCollapse?: () => void;
}

// Tooltip Component
function Tooltip({ children, content, show }: { children: React.ReactNode; content: string; show: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered && buttonRef.current && show) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 8 // 8px gap from the sidebar
      });
    }
  }, [isHovered, show]);

  if (!show) return <>{children}</>;
  
  return (
    <>
      <div 
        ref={buttonRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <div 
          className="fixed z-[9999] pointer-events-none"
          style={{
            left: `${position.left}px`,
            top: `${position.top}px`,
            transform: 'translateY(-50%)'
          }}
        >
          {/* Tooltip container */}
          <div className="relative flex items-center ml-2">
            {/* Arrow (Rotated Square) */}
            <div 
              className="absolute w-3 h-3 bg-white border-l border-b transform rotate-45 z-50"
              style={{
                left: '-5px',
                borderColor: 'rgba(148, 163, 184, 0.2)'
              }}
            ></div>
            
            {/* Tooltip content */}
            <div 
              className="relative z-10 rounded-lg shadow-2xl border"
              style={{
                background: '#ffffff',
                borderColor: 'rgba(148, 163, 184, 0.2)',
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "1.5",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                color: '#1e293b',
                padding: '10px 16px',
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(148, 163, 184, 0.15) inset"
              }}
            >
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Submenu Item Tooltip Component - Shows tooltip when text is truncated
function SubmenuTooltip({ children, content, className, style }: { children: React.ReactNode; content: string; className?: string; style?: React.CSSProperties }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      // Check if text is overflowing (truncated)
      const isOverflowing = element.scrollWidth > element.clientWidth;
      setShowTooltip(isOverflowing);
      
      // Update position when hovered
      if (isOverflowing && isHovered) {
        const rect = element.getBoundingClientRect();
        setPosition({
          top: rect.top + rect.height / 2,
          left: 268 // Sidebar width (260px) + 8px margin
        });
      }
    }
  }, [content, isHovered]);

  return (
    <>
      <span 
        ref={textRef} 
        className={cn("flex-1 truncate", className)}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>
      {showTooltip && isHovered && (
        <div 
          className="fixed z-[9999] pointer-events-none"
          style={{
            left: `${position.left}px`,
            top: `${position.top}px`,
            transform: 'translateY(-50%)'
          }}
        >
          {/* Tooltip container */}
          <div className="relative flex items-center ml-2">
            {/* Arrow (Rotated Square) */}
            <div 
              className="absolute w-3 h-3 bg-white border-l border-b transform rotate-45 z-50"
              style={{
                left: '-5px',
                borderColor: 'rgba(148, 163, 184, 0.2)'
              }}
            ></div>
            
            {/* Tooltip content */}
            <div 
              className="relative z-10 rounded-lg shadow-2xl border"
              style={{
                background: '#ffffff',
                borderColor: 'rgba(148, 163, 184, 0.2)',
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "1.5",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                color: '#1e293b',
                padding: '10px 16px',
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(148, 163, 184, 0.15) inset"
              }}
            >
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Carbon Design System Colors - Unified Blue Theme
const carbonColors = {
  active: "bg-[#EAF2FF] text-[#2A53A0] border-l-4 border-[#2A53A0]", // Active state with border accent
  hover: "hover:bg-[#f4f4f4] hover:text-[#2A53A0]", // Gray 10 hover
  default: "text-gray-700 bg-transparent"
};

// Hover Menu Panel Component for Collapsed State
function HoverMenuPanel({ 
  children, 
  title, 
  items, 
  categories, 
  show, 
  parentId, 
  activeItem, 
  onItemSelect,
  className,
  topOffset = 125
}: { 
  children: React.ReactNode; 
  title: string; 
  items?: SubMenuItem[]; 
  categories?: SubMenuCategory[]; 
  show: boolean;
  parentId: string;
  activeItem: string;
  onItemSelect: (itemId: string) => void;
  className?: string;
  topOffset?: number;
}) {
  // Mega menu functionality removed as requested
  // We simply return the children (the menu button) without any hover popup
  return <>{children}</>;
}

export function UnifiedSidebar({
  menuItems,
  activeItem,
  onItemSelect,
  isCollapsed,
  onCollapse,
}: UnifiedSidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({ config: true });
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = (menuId: string) => {
    if (isCollapsed) {
      // If collapsed, expand sidebar when clicking menu
      if (onCollapse) onCollapse();
      setExpandedMenus({ [menuId]: true });
      return;
    }
    
    setExpandedMenus((prev) => {
      // If clicking the currently expanded menu, collapse it
      if (prev[menuId]) {
        return { [menuId]: false };
      }
      // Otherwise, close all menus and open only the clicked one
      return { [menuId]: true };
    });
    
    // Also collapse all categories when switching menus
    setExpandedCategories({});
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      // If clicking the currently expanded category, collapse it
      if (prev[categoryId]) {
        return { [categoryId]: false };
      }
      // Otherwise, close all categories and open only the clicked one
      return { [categoryId]: true };
    });
  };

  // Auto-expansion disabled

  const handleSubItemClick = (parentId: string, subItemId: string) => {
    onItemSelect(`${parentId}-${subItemId}`);
  };

  const isSubItemActive = (parentId: string, subItemId: string) => {
    return activeItem === `${parentId}-${subItemId}`;
  };

  const toggleCollapse = () => {
    if (onCollapse) {
      onCollapse();
    } else {
      setExpandedMenus({});
      setExpandedCategories({});
    }
  };

  // Filter menu items based on search query
  const filteredMenuItems = searchQuery
    ? menuItems.map(menu => {
        const matchesMenu = menu.title.toLowerCase().includes(searchQuery.toLowerCase());
        const filteredSubItems = menu.subItems?.filter(item => 
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const filteredCategories = menu.categories?.map(cat => {
          const matchesCat = cat.label.toLowerCase().includes(searchQuery.toLowerCase());
          const filteredCatItems = cat.items.filter(item => 
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (matchesCat || filteredCatItems.length > 0) {
            return {
              ...cat,
              items: matchesCat ? cat.items : filteredCatItems
            };
          }
          return null;
        }).filter(Boolean) as SubMenuCategory[];

        if (matchesMenu || (filteredSubItems && filteredSubItems.length > 0) || (filteredCategories && filteredCategories.length > 0)) {
          return {
            ...menu,
            subItems: matchesMenu ? menu.subItems : filteredSubItems,
            categories: matchesMenu ? menu.categories : filteredCategories
          };
        }
        return null;
      }).filter((item): item is MenuItem => item !== null)
    : menuItems;

  const ChevronLeftIcon = ChevronLeft as React.ComponentType<any>;
  const ChevronRightIcon = ChevronRight as React.ComponentType<any>;

  return (
    <motion.div 
      animate={{ width: isCollapsed ? 54 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-full flex flex-col bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 overflow-x-hidden relative"
    >
      {/* Logo Section */}
      <div className={cn(
        "h-[54px] flex-shrink-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex items-center overflow-x-hidden",
        isCollapsed ? "justify-center px-0" : "px-4"
      )}>
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center w-full h-full"
          >
            {/* Clari5 Logo Container */}
            <div className="w-full flex justify-center items-center">
              <img 
                src={clari5Logo} 
                alt="Clari5" 
                className="h-8 w-auto object-contain max-w-full"
              />
            </div>
          </motion.div>
        )}
        {isCollapsed && (
          <div className="w-full flex justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              src={clari5Favicon} 
              alt="Clari5" 
              className="w-6 h-6 object-contain"
            />
          </div>
        )}
      </div>

      {/* Search Bar - Fixed */}
      <div className={cn(
        "pt-3 pb-0 transition-all duration-300",
        !isCollapsed && "border-b border-gray-200 dark:border-gray-800",
        isCollapsed ? "px-2 flex justify-center" : "px-4"
      )}>
        {!isCollapsed ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-3"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menus..."
                className="w-full pl-10 pr-4 h-[46px] rounded-[8px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2A53A0]/20 dark:focus:ring-[#4A7BD0]/30 focus:border-[#2A53A0] dark:focus:border-[#4A7BD0] transition-all"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  letterSpacing: "-0.01em"
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <Close className="size-4" />
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center pb-2">
            <Tooltip content="Search" show={true}>
              <button 
                onClick={onCollapse}
                className="w-9 h-9 flex items-center justify-center rounded-[8px] text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#2A53A0] transition-colors mb-2"
              >
                <Search className="size-5" />
              </button>
            </Tooltip>
            <div className="h-px w-8 bg-gray-200 dark:bg-gray-800" />
          </div>
        )}
      </div>

      {/* Scrollable Menu Section */}
      <div className="flex-1 no-scrollbar">
        <nav className={cn("py-2 space-y-1.5", isCollapsed && "px-0")}>
          {/* Other Menu Items */}
          {filteredMenuItems.map((menu) => {
            const isActive = activeItem?.startsWith(menu.id);
            const isOpen = expandedMenus[menu.id] || searchQuery;
            
            return (
              <div key={menu.id}>
                <HoverMenuPanel 
                  title={menu.title} 
                  items={menu.useFlatSidebar ? undefined : menu.subItems}
                  categories={menu.categories}
                  show={isCollapsed || !isOpen}
                  parentId={menu.id}
                  activeItem={activeItem}
                  onItemSelect={onItemSelect}
                  className={isCollapsed ? "w-full flex items-center justify-center" : ""}
                  topOffset={isCollapsed ? 54 : 125}
                >
                  <button
                    onClick={() => toggleMenu(menu.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 transition-all group relative overflow-hidden",
                      isCollapsed 
                        ? cn(
                            "w-full h-[46px] justify-center px-0",
                            isActive
                              ? "bg-[#EAF2FF] dark:bg-[#2A53A0]/20 text-[#2A53A0] dark:text-[#4A7BD0] border-l-4 border-[#2A53A0] pr-1 font-semibold"
                              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#2A53A0]"
                          )
                        : "w-full h-[46px] rounded-[8px]",
                      !isCollapsed && (isActive
                        ? "bg-transparent text-[#2A53A0] dark:text-[#4A7BD0] font-semibold"
                        : isOpen
                          ? "text-gray-900 dark:text-gray-100 font-medium"
                          : "text-[#161616] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800")
                    )}
                  >
                    <menu.icon className={cn(
                      "size-5 flex-shrink-0",
                      isActive && "text-[#2A53A0] dark:text-[#4A7BD0]"
                    )} />
                    {!isCollapsed && (
                      <>
                        <SubmenuTooltip 
                          content={menu.title}
                          className="text-left"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "15px",
                            fontWeight: isActive ? 600 : 400,
                            lineHeight: "1.5",
                            letterSpacing: "-0.01em"
                          }}
                        >
                          {menu.title}
                        </SubmenuTooltip>
                        {isOpen ? (
                          <ChevronDown className={cn(
                            "size-4 flex-shrink-0",
                            isActive ? "text-[#2A53A0] dark:text-[#4A7BD0]" : "text-gray-500"
                          )} />
                        ) : (
                          <ChevronRight className="size-4 flex-shrink-0 text-gray-400" />
                        )}
                      </>
                    )}
                  </button>
                </HoverMenuPanel>

                {/* Submenu Content */}
              {!isCollapsed && (expandedMenus[menu.id] || searchQuery) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 space-y-1"
                >
                  {/* Regular SubItems */}
                  {menu.subItems?.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSubItemClick(menu.id, item.id)}
                      className={cn(
                        "w-full flex items-center gap-2 py-2 text-left group/item relative transition-all",
                        isSubItemActive(menu.id, item.id)
                          ? "bg-[#EAF2FF] dark:bg-[#2A53A0]/20 text-[#2A53A0] dark:text-[#4A7BD0] font-medium border-l-4 border-[#2A53A0] pl-[23px] pr-4 rounded-r-none"
                          : "text-gray-600 dark:text-gray-400 hover:text-[#2A53A0] dark:hover:text-[#4A7BD0] hover:bg-gray-50 dark:hover:bg-gray-800/50 pl-[27px] pr-4 rounded-md"
                      )}
                    >
                      {item.icon && (
                        <item.icon className="size-4 flex-shrink-0" />
                      )}
                      <SubmenuTooltip content={item.label}>
                        <span 
                          className="flex-1 truncate"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "15px",
                            fontWeight: 400,
                            lineHeight: "1.5",
                            letterSpacing: "0.3px"
                          }}
                        >
                          {item.label}
                        </span>
                      </SubmenuTooltip>
                    </button>
                  ))}

                  {/* Categories with nested items */}
                  {!menu.useFlatSidebar && menu.categories?.map((category) => {
                    const isCategoryActive = category.items.some(item => isSubItemActive(menu.id, item.id));
                    const isCategoryOpen = expandedCategories[`${menu.id}-${category.id}`] || searchQuery;

                    return (
                      <div key={category.id} className="space-y-1">
                        <button
                          onClick={() => toggleCategory(`${menu.id}-${category.id}`)}
                          className={cn(
                            "w-full h-[46px] flex items-center gap-2 pl-[27px] pr-4 transition-all text-left group/category",
                            isCategoryActive
                              ? "bg-transparent text-[#2A53A0] dark:text-[#4A7BD0]"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          )}
                        >
                          {category.icon && (
                            <category.icon 
                              className={cn(
                                "size-4 flex-shrink-0",
                                isCategoryActive && "text-[#2A53A0] dark:text-[#4A7BD0]"
                              )}
                            />
                          )}
                          <span 
                            className="flex-1 truncate"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "14px",
                              fontWeight: isCategoryActive ? 600 : 500,
                              lineHeight: "1.5",
                              letterSpacing: "0.3px"
                            }}
                          >
                            {category.label}
                          </span>
                          {isCategoryOpen ? (
                            <Subtract className={cn(
                              "size-4 flex-shrink-0",
                              isCategoryActive ? "text-[#2A53A0] dark:text-[#4A7BD0]" : "text-gray-500"
                            )} />
                          ) : (
                            <Add className="size-4 flex-shrink-0 text-gray-400" />
                          )}
                        </button>

                        {/* Category nested items */}
                        {isCategoryOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-1"
                          >
                            {category.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => handleSubItemClick(menu.id, item.id)}
                                className={cn(
                                  "w-full flex items-center gap-2 py-2 text-left group/item relative transition-all",
                                  isSubItemActive(menu.id, item.id)
                                    ? "bg-[#EAF2FF] dark:bg-[#2A53A0]/20 text-[#2A53A0] dark:text-[#4A7BD0] font-medium border-l-4 border-[#2A53A0] pl-[39px] pr-4 rounded-r-none"
                                    : "text-gray-500 dark:text-gray-500 hover:bg-[#2A53A0]/5 dark:hover:bg-[#2A53A0]/10 hover:text-[#2A53A0] dark:hover:text-[#4A7BD0] pl-[43px] pr-4 rounded-md"
                                )}
                              >
                                {item.icon && (
                                  <item.icon className="size-4 flex-shrink-0" />
                                )}
                                <SubmenuTooltip content={item.label}>
                                  <span 
                                    className="flex-1 truncate"
                                    style={{
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "14px",
                                      fontWeight: 400,
                                      lineHeight: "1.5",
                                      letterSpacing: "0.3px"
                                    }}
                                  >
                                    {item.label}
                                  </span>
                                </SubmenuTooltip>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}