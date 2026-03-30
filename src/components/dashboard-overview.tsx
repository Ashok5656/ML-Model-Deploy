import { motion } from "motion/react";
import {
  TrendingUp,
  TrendingDown,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  FileText,
  BarChart3,
  Activity,
  Calendar,
  Download,
  ChevronDown,
  DollarSign,
  Zap,
  Globe,
  Target,
  Brain,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  ShieldCheck,
  UserCheck,
  CreditCard,
  Wallet,
  Banknote as BanknoteIcon,
  AlertCircle,
  Server,
  MapPin,
  ChevronRight,
  RefreshCw as Renew,
  Filter,
  Briefcase,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { useState } from "react";
import { BreadcrumbNav } from "./breadcrumb-nav";
import { Separator } from "./ui/separator";

interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}

interface DashboardOverviewProps {
  breadcrumbs?: BreadcrumbItem[];
  onBreadcrumbNavigate?: (path: string) => void;
}

export function DashboardOverview({ breadcrumbs, onBreadcrumbNavigate }: DashboardOverviewProps = {}) {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [showDateMenu, setShowDateMenu] = useState(false);

  const dateRangeOptions = [
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "Last 90 Days",
    "This Month",
    "Last Month",
    "This Quarter",
    "This Year",
    "Custom Range",
  ];

  const handleExport = () => {
    console.log("Exporting dashboard data...");
  };

  // Enhanced KPI data
  const kpiCards = [
    {
      title: "My Open Cases",
      value: "12",
      subValue: "4 High Priority",
      change: "-2",
      trend: "down",
      icon: Briefcase,
      gradient: "from-[#2A53A0] to-blue-400",
    },
    {
      title: "Pending Reviews",
      value: "8",
      subValue: "Due Today",
      change: "+3",
      trend: "up",
      icon: FileText,
      gradient: "from-emerald-600 to-teal-500",
    },
    {
      title: "My Efficiency",
      value: "94%",
      subValue: "SLA Adherence",
      change: "+1.5%",
      trend: "up",
      icon: Target,
      gradient: "from-indigo-600 to-purple-500",
    },
    {
      title: "Urgent Actions",
      value: "3",
      subValue: "Requires immediate attention",
      change: "+1",
      trend: "up",
      icon: AlertTriangle,
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Tasks Completed",
      value: "45",
      subValue: "This Month",
      change: "+12",
      trend: "up",
      icon: CheckCircle2,
      gradient: "from-violet-600 to-pink-500",
    },
  ];

  // Extended transaction data
  const transactionData = [
    { month: "Mon", volume: 12, fraud: 2, legitimate: 10, compliance: 95 },
    { month: "Tue", volume: 15, fraud: 1, legitimate: 14, compliance: 94 },
    { month: "Wed", volume: 18, fraud: 3, legitimate: 15, compliance: 96 },
    { month: "Thu", volume: 14, fraud: 0, legitimate: 14, compliance: 93 },
    { month: "Fri", volume: 22, fraud: 4, legitimate: 18, compliance: 95 },
    { month: "Sat", volume: 8, fraud: 1, legitimate: 7, compliance: 94 },
  ];

  const riskData = [
    { name: "Low Risk", value: 68, color: "#10b981" },
    { name: "Medium Risk", value: 22, color: "#f59e0b" },
    { name: "High Risk", value: 10, color: "#ef4444" },
  ];

  // AI Anomaly Detection Data
  const anomalyData = [
    { category: "Transaction Velocity", score: 92, threshold: 75 },
    { category: "Geo-Location", score: 78, threshold: 75 },
    { category: "Device Fingerprint", score: 88, threshold: 75 },
    { category: "Behavior Pattern", score: 95, threshold: 75 },
    { category: "Network Analysis", score: 82, threshold: 75 },
  ];

  // Recent suspicious activities with Indian names
  const recentActivities = [
    {
      id: 1,
      user: "Rajesh Kumar",
      action: "Large cash withdrawal",
      amount: "₹8,50,000",
      location: "Mumbai, Maharashtra",
      time: "3 min ago",
      risk: "high",
      type: "withdrawal",
    },
    {
      id: 2,
      user: "Priya Sharma",
      action: "Multiple international transfers",
      amount: "₹12,30,000",
      location: "Bangalore, Karnataka",
      time: "8 min ago",
      risk: "high",
      type: "transfer",
    },
    {
      id: 3,
      user: "Amit Patel",
      action: "Unusual login location",
      amount: "N/A",
      location: "New Delhi",
      time: "15 min ago",
      risk: "medium",
      type: "login",
    },
    {
      id: 4,
      user: "Sneha Reddy",
      action: "High-value card transaction",
      amount: "₹4,75,000",
      location: "Hyderabad, Telangana",
      time: "22 min ago",
      risk: "medium",
      type: "card",
    },
    {
      id: 5,
      user: "Vikram Singh",
      action: "Rapid successive transactions",
      amount: "₹18,90,000",
      location: "Pune, Maharashtra",
      time: "35 min ago",
      risk: "high",
      type: "transfer",
    },
  ];

  // Geographic distribution
  const geographicData = [
    { region: "Mumbai", transactions: 4250, amount: "₹12.4M", risk: "low" },
    { region: "Bangalore", transactions: 3840, amount: "₹10.8M", risk: "medium" },
    { region: "Delhi", transactions: 3220, amount: "₹9.2M", risk: "low" },
    { region: "Hyderabad", transactions: 2650, amount: "₹7.6M", risk: "medium" },
    { region: "Pune", transactions: 2180, amount: "₹6.1M", risk: "high" },
  ];

  // System health metrics
  const systemHealth = [
    { name: "API Response Time", value: "124ms", status: "good", percentage: 92 },
    { name: "Detection Accuracy", value: "97.8%", status: "excellent", percentage: 98 },
    { name: "System Uptime", value: "99.9%", status: "excellent", percentage: 100 },
    { name: "Queue Processing", value: "142/min", status: "good", percentage: 88 },
  ];

  // Top fraud patterns
  const fraudPatterns = [
    { pattern: "Structuring (Smurfing)", count: 34, trend: "+12%", severity: "high" },
    { pattern: "Card-Not-Present Fraud", count: 28, trend: "-5%", severity: "high" },
    { pattern: "Account Takeover", count: 19, trend: "+8%", severity: "critical" },
    { pattern: "Synthetic Identity", count: 15, trend: "+22%", severity: "critical" },
    { pattern: "Money Mule Activity", count: 12, trend: "-3%", severity: "medium" },
  ];

  const recentAlerts = [
    {
      id: 1,
      title: "Suspicious Transaction Pattern Detected",
      description: "Multiple round-amount transactions by Arjun Mehta",
      severity: "high",
      time: "5 min ago",
      module: "AML",
      icon: AlertTriangle,
    },
    {
      id: 2,
      title: "Compliance Threshold Exceeded",
      description: "Daily transaction limit breach - Kavya Iyer",
      severity: "critical",
      time: "12 min ago",
      module: "Compliance",
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "Unusual Geographic Activity",
      description: "Login from new country - Rohit Verma",
      severity: "medium",
      time: "28 min ago",
      module: "Security",
      icon: Globe,
    },
    {
      id: 4,
      title: "AI Anomaly Alert",
      description: "Behavioral pattern deviation - Neha Gupta",
      severity: "high",
      time: "1 hour ago",
      module: "AI Detection",
      icon: Brain,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Context Controls */}
        <div className="flex items-center gap-3">
          {/* Region Filter */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-3 h-[46px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-[#2A53A0] dark:hover:border-[#6b93e6] transition-all"
          >
            <Globe className="size-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">All Regions</span>
            <ChevronDown className="size-3 text-gray-400" />
          </motion.button>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1 hidden sm:block" />

          {/* Last Updated */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
             <span className="hidden sm:inline">Updated: Just now</span>
             <motion.button
               whileHover={{ rotate: 180 }}
               transition={{ duration: 0.5 }}
               className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-[#2A53A0] dark:text-[#6b93e6]"
             >
               <Renew className="size-4" />
             </motion.button>
          </div>
        </div>

        {/* Right Side: Date & Export */}
        <div className="flex items-center gap-3">
          {/* Date Range Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDateMenu(!showDateMenu)}
              className="flex items-center gap-2 px-4 h-[46px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-[#2A53A0] dark:hover:border-[#6b93e6] transition-all shadow-sm"
            >
              <Calendar className="size-4 text-[#2A53A0] dark:text-[#6b93e6]" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {dateRange}
              </span>
              <ChevronDown
                className={`size-4 text-gray-500 transition-transform ${
                  showDateMenu ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            {showDateMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-50"
              >
                <div className="py-2">
                  {dateRangeOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDateRange(option);
                        setShowDateMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        dateRange === option
                          ? "bg-[#2A53A0]/10 text-[#2A53A0] dark:bg-[#6b93e6]/10 dark:text-[#6b93e6]"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExport}
            className="flex items-center gap-2 px-4 h-[46px] bg-[#2A53A0] hover:bg-[#1e3a70] dark:bg-[#6b93e6] dark:hover:bg-[#5577cc] text-white rounded-lg transition-all shadow-sm"
          >
            <span className="text-sm">Export</span>
            <Download className="size-4" />
          </motion.button>
        </div>
      </div>

      {/* Enhanced KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          
          const colorMap = {
            0: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", badge: "bg-blue-50 text-blue-700 border-blue-200" },
            1: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
            2: { bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-600 dark:text-indigo-400", badge: "bg-indigo-50 text-indigo-700 border-indigo-200" },
            3: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400", badge: "bg-orange-50 text-orange-700 border-orange-200" },
            4: { bg: "bg-violet-100 dark:bg-violet-900/30", text: "text-violet-600 dark:text-violet-400", badge: "bg-violet-50 text-violet-700 border-violet-200" },
          } as Record<number, { bg: string, text: string, badge: string }>;
          
          const colors = colorMap[index] || colorMap[0];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Icon className={`size-5 ${colors.text}`} />
                  </div>
                  <Badge variant="outline" className={colors.badge}>{kpi.change}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{kpi.value}</h3>
                <p className="text-sm text-gray-500">{kpi.title}</p>
                <p className="text-xs text-gray-400 mt-1">{kpi.subValue}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* AI Insights & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* AI-Powered Anomaly Detection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 h-full bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Brain className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    AI Anomaly Detection
                  </h3>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                </motion.div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={anomalyData}>
                  <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fill: "#9ca3af", fontSize: 11 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: "#9ca3af", fontSize: 11 }}
                  />
                  <Radar
                    name="Detection Score"
                    dataKey="score"
                    stroke="#2A53A0"
                    fill="#2A53A0"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Threshold"
                    dataKey="threshold"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 h-full bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Server className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    System Health
                  </h3>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  All Systems Operational
                </Badge>
              </div>

              <div className="space-y-5">
                {systemHealth.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {metric.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900 dark:text-white">
                          {metric.value}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            metric.status === "excellent"
                              ? "bg-emerald-500"
                              : "bg-[#2A53A0]"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.percentage}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        className={`h-full ${
                          metric.status === "excellent"
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                            : "bg-gradient-to-r from-[#2A53A0] to-[#4A7BD0]"
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Transaction Analytics & Risk Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Transaction Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm h-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    My Case Throughput
                  </h3>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={transactionData}>
                  <defs>
                    <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2A53A0" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#2A53A0" stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="fraudGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="volume" name="Assigned" fill="url(#volumeGradient)" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="fraud" name="Overdue" fill="url(#fraudGradient)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Risk Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm h-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    Risk Distribution
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="flex flex-col justify-center space-y-5">
                  {riskData.map((risk, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: risk.color }}
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {risk.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-900 dark:text-white">
                          {risk.value}%
                        </span>
                      </div>
                      <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${risk.value}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: risk.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activities & Fraud Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Suspicious Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2"
        >
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    My Action Items
                  </h3>
                </div>
                <Badge variant="destructive" className="animate-pulse">
                  {recentActivities.length} Due Soon
                </Badge>
              </div>

              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent dark:hover:from-gray-900 dark:hover:to-transparent transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              activity.risk === "high"
                                ? "bg-red-100 dark:bg-red-950"
                                : "bg-orange-100 dark:bg-orange-950"
                            }`}
                          >
                            <UserCheck
                              className={`size-5 ${
                                activity.risk === "high"
                                  ? "text-red-600 dark:text-red-400"
                                  : "text-orange-600 dark:text-orange-400"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-900 dark:text-white">
                              {activity.user}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {activity.action}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 ml-13">
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="size-3.5 text-gray-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {activity.amount}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="size-3.5 text-gray-500" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                              {activity.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="size-3.5 text-gray-500" />
                            <span className="text-xs text-gray-500">
                              {activity.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={activity.risk === "high" ? "destructive" : "default"}
                          className={
                            activity.risk === "high"
                              ? ""
                              : "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
                          }
                        >
                          {activity.risk.toUpperCase()}
                        </Badge>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight className="size-4 text-gray-500" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Top Fraud Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 h-full bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    Top Fraud Patterns
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {fraudPatterns.map((pattern, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {pattern.pattern}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs ${
                            pattern.trend.startsWith("+")
                              ? "text-red-600"
                              : "text-emerald-600"
                          }`}
                        >
                          {pattern.trend}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(pattern.count / 34) * 100}%` }}
                          transition={{ delay: 0.8 + index * 0.05, duration: 0.6 }}
                          className={`h-full ${
                            pattern.severity === "critical"
                              ? "bg-gradient-to-r from-red-600 to-red-500"
                              : pattern.severity === "high"
                              ? "bg-gradient-to-r from-orange-600 to-orange-500"
                              : "bg-gradient-to-r from-yellow-600 to-yellow-500"
                          }`}
                        />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 w-8">
                        {pattern.count}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Geographic Distribution & Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    Geographic Distribution
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {geographicData.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A53A0] to-[#4A7BD0] flex items-center justify-center">
                          <MapPin className="size-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-900 dark:text-white">
                            {region.region}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {region.transactions.toLocaleString()} transactions
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {region.amount}
                        </p>
                        <Badge
                          variant="outline"
                          className={`mt-1 ${
                            region.risk === "low"
                              ? "border-emerald-300 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400"
                              : region.risk === "medium"
                              ? "border-orange-300 text-orange-700 dark:border-orange-800 dark:text-orange-400"
                              : "border-red-300 text-red-700 dark:border-red-800 dark:text-red-400"
                          }`}
                        >
                          {region.risk}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* AI-Powered Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="size-5 text-[#2A53A0] dark:text-[#6b93e6]" />
                  <h3 className="text-gray-900 dark:text-white">
                    AI-Powered Alerts
                  </h3>
                </div>
                <Badge variant="destructive" className="animate-pulse">
                  {recentAlerts.length} New
                </Badge>
              </div>

              <div className="space-y-3">
                {recentAlerts.map((alert, index) => {
                  const Icon = alert.icon;
                  return (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            alert.severity === "critical"
                              ? "bg-red-100 dark:bg-red-950"
                              : alert.severity === "high"
                              ? "bg-orange-100 dark:bg-orange-950"
                              : "bg-yellow-100 dark:bg-yellow-950"
                          }`}
                        >
                          <Icon
                            className={`size-5 ${
                              alert.severity === "critical"
                                ? "text-red-600 dark:text-red-400"
                                : alert.severity === "high"
                                ? "text-orange-600 dark:text-orange-400"
                                : "text-yellow-600 dark:text-yellow-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm text-gray-900 dark:text-white mb-1">
                            {alert.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                            {alert.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="text-xs border-gray-300 dark:border-gray-700"
                            >
                              {alert.module}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {alert.time}
                            </span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            alert.severity === "critical" || alert.severity === "high"
                              ? "destructive"
                              : "default"
                          }
                          className={
                            alert.severity === "medium"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
                              : ""
                          }
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>


    </motion.div>
  );
}
