import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion } from "motion/react";
import {
  Search,
  User,
  Share2,
  Scan,
  ShieldAlert,
  FileCheck,
  CreditCard,
  Activity,
  Loader2,
  Bell,
  Clock,
  ArrowRight,
  Info,
  Globe,
  Network,
  Scale,
  ScrollText,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Download,
  Printer,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  FileText,
  RotateCw,
  Ban,
  Layers,
  Coins,
  Wallet,
  ArrowUpRight,
  Banknote,
  Landmark,
  Users,
  TrendingUp,
  MapPin,
  AlertOctagon,
  BarChart3,
  ArrowDownLeft,
  Mail,
  FileWarning,
  PieChart,
  ArrowRightLeft,
  ArrowDown,
  ArrowUp,
  XCircle,
  X,
  ExternalLink,
  Siren,
  ShieldCheck,
  AlertCircle,
  UserCheck,
  CalendarClock,
  History,
  LayoutDashboard,
  Phone,
  Briefcase,
  Fingerprint,
  MoreHorizontal
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, Legend, BarChart, Bar, CartesianGrid, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Switch } from "./ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "./ui/utils";

import { ResponsiveAttributes } from "./ui/responsive-attributes";
import { useSortableData } from "../hooks/use-sortable-data";
import { SortableHeader } from "./ui/sortable-header";

interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}

interface Customer360ViewProps {
  breadcrumbs?: any[];
  onBreadcrumbNavigate?: (path: string) => void;
  setBreadcrumbs?: (items: any[]) => void;
}

// --- MOCK DATABASE ---
const mockCustomers = [
  {
    name: "Rajesh Kumar",
    id: "CUST-8829103",
    type: "Individual",
    riskScore: "High",
    riskLevel: 90,
    pepMatch: "YES",
    adverseMedia: "YES",
    cddEddTriggers: "YES",
    dormantAccounts: "YES",
    highRiskTransactions: { count: 3, countries: ["Iran", "North Korea", "Syria"] },
    strSarFiled: "YES",
    ctrFiled: "NO",
    leaRequests: "NO",
    activeAlerts: 4,
    status: "Active",
    kycStatus: "Verified",
    nationality: "Indian",
    dob: "1982-08-15",
    occupation: "Business Owner",
    employer: "Kumar Global Traders",
    phone: "+91 98765 43210",
    email: "rajesh.k@kumarglobal.com",
    address: { line1: "Flat 402, Krishna Heights", city: "Mumbai", zip: "400049" },
    previousNames: "Raj V. Kumar",
    placeOfBirth: "Mumbai, Maharashtra",
    gender: "Male",
    multipleCitizenships: ["United States"],
    residentStatus: "Resident",
    primaryAddress: "Flat 402, Krishna Heights, Bandra West, Mumbai - 400050",
    secondaryAddresses: ["Villa 22, Palm Jumeirah, Dubai, UAE"],
    businessSegment: "Retail Banking",
    customerSegment: ["HNI", "High Risk"],
    onboardingDate: "12 Mar 2018",
    onboardingChannel: "Branch",
    channelUsage: { branch: "15%", digital: "80%", agent: "5%" },
    idInfo: { 
      emiratesId: { type: "Emirates ID", number: "784-1990-1234567-1" },
      passport: { type: "Passport", number: "Z1234567", expiry: "2030-05-20", issuedBy: "Govt of India" }
    },
    fatcaStatus: "Reportable (US Indicia)",
    leaStatus: "Non-Reportable",
    identification: [
      { type: "Emirates ID", number: "784-1990-1234567-1", status: "Verified" }
    ],
    relationships: {
      ubo: [
        { name: "Rajesh Kumar", designation: "Director", nationality: "Indian", residence: "Mumbai", ownership: 55, votingRights: 55 },
        { name: "Suman Kumar", designation: "Shareholder", nationality: "Indian", residence: "Mumbai", ownership: 45, votingRights: 45 }
      ],
      family: [
        { name: "Suman Kumar", relation: "Spouse", dob: "1985-05-12", hasAccount: true, kycStatus: "Verified" },
        { name: "Arjun Kumar", relation: "Son", dob: "2010-08-20", hasAccount: true, kycStatus: "Verified" }
      ],
      associates: [
        { name: "Mehul Choksi", relation: "Business Partner", hasAccount: false, risk: "High" },
        { name: "Global Exports Ltd", relation: "Subsidiary", hasAccount: true, risk: "Medium" }
      ],
      jointHolders: [
        { name: "Suman Kumar", account: "ACC-9921", relation: "Spouse", hasAccount: true }
      ],
      poa: [
        { name: "Vikram Legal Services", authorizedPerson: "Vikram Singh", expiry: "2030-12-31", revocationHistory: "None" }
      ],
      pep: {
        isPep: true,
        details: "Associate of PEP (Business Partner Mehul Choksi is politically connected)"
      }
    },
    screening: {
      overallStatus: "Flagged",
      sanctions: [
        { list: "OFAC Specially Designated Nationals (SDN)", score: 95, date: "2026-01-02", name: "Rajesh Kumar", watchlist: "OFAC SDN", percentage: 95, link: "#" },
        { list: "UN Consolidated List", score: 88, date: "2025-12-15", name: "Raj V. Kumar", watchlist: "UN Sanctions", percentage: 88, link: "#" }
      ],
      pep: { 
        status: "Potential", 
        details: "Associate of PEP",
        matches: [
          { name: "Rajesh Kumar", watchlist: "WorldCheck PEP", percentage: 100, details: "Close associate of regional politician", link: "#" }
        ]
      },
      adverseMedia: [
        { source: "Economic Times", date: "2025-11-20", snippet: "Named in trade violation investigation related to export controls.", name: "Rajesh Kumar", watchlist: "Global Media Check", percentage: 90, link: "#" }
      ],
      watchlistMatches: [
        { list: "Internal High Risk List", percentage: 100, name: "Rajesh Kumar", watchlist: "Internal Blacklist", falsePositive: false, resolution: "Confirmed Match - Enhanced Due Diligence required", link: "#" }
      ],
      history: [
        { date: "2026-01-05", watchlists: "OFAC, UN, EU", caseId: "CS-9921" },
        { date: "2025-12-01", watchlists: "Global PEP, Adverse Media", caseId: "CS-8812" },
        { date: "2025-11-01", watchlists: "All Lists", caseId: "CS-7734" },
        { date: "2025-10-05", watchlists: "OFAC Only", caseId: "CS-6621" },
        { date: "2025-09-01", watchlists: "All Lists", caseId: "CS-5519" }
      ]
    },
    riskProfile: {
      overall: { score: 90, level: "High", lastUpdated: "2026-01-04" },
      geographic: {
        riskLevel: "Medium",
        score: 45,
        residence: { country: "India", fatfBlack: "N", fatfGrey: "N", taxEvasion: "N", otherHighRisk: "N" },
        citizenship: { country: "USA", fatfBlack: "N", fatfGrey: "N", taxEvasion: "N", otherHighRisk: "N" }
      },
      highRiskTxnCountries: [
        { country: "UAE", fatfBlack: "N", fatfGrey: "Y", taxEvasion: "N", otherHighRisk: "N", details: "Frequent transfers" }
      ],
      productChannelRisk: [
         { type: "Product", name: "Savings Max", risk: "Low" },
         { type: "Service", name: "International Wire", risk: "High" },
         { type: "Channel", name: "Mobile App", risk: "Medium" }
      ],
      customerTypeRisk: { type: "HNI Individual", risk: "Medium" },
      occupationRisk: { isHighRisk: "N", value: "Business Owner - Retail" },
      industryRisk: { isHighRisk: "Y", sector: "Import/Export", details: "High value goods trade" },
      behavioral: {
         score: 75,
         level: "High",
         alerts: [
            { name: "Out of peer profile transactions", deviation: 45, details: "Volume 45% higher than peer group avg" },
            { name: "Transactions surge", deviation: 120, details: "120% surge from 6-month historical avg" }
         ]
      },
      relatedPartiesRisk: { score: 65, level: "Medium" },
      history: [
         { date: "2026-01-04", score: 85, level: "High", reason: "Behavioral Alert Triggered" },
         { date: "2025-06-15", score: 45, level: "Medium", reason: "Periodic Review" },
         { date: "2018-03-12", score: 10, level: "Low", reason: "Onboarding" }
      ],
      overrides: [
         { date: "2025-12-20", user: "Risk_Manager_01", justification: "Downgraded due to verified source of funds proof provided by client." }
      ]
    },
    kycProfile: {
      status: "Verified",
      lastReviewDate: "2025-12-15",
      nextReviewDate: "2026-12-15",
      documents: [
        { type: "Passport", id: "Z1234567", status: "Verified", expiry: "2030-05-20" },
        { type: "Utility Bill", id: "UB-9988", status: "Verified", date: "2025-11-01" },
        { type: "Tax Returns", id: "ITR-2025", status: "Verified", date: "2025-10-15" }
      ],
      newProducts: [
        { name: "Forex Card", date: "2025-11-20" }
      ],
      triggers: [
        { type: "High Risk Country", detail: "Transaction with UAE", date: "2026-01-02" },
        { type: "PEP Match", detail: "Potential Associate Match", date: "2025-12-10" }
      ],
      sourceOfFunds: ["Business Profits (Kumar Global Traders)", "Rental Income"],
      sourceOfWealth: ["Inheritance", "Business Accumulation"],
      riskEvolution: [
         { date: "2023", score: 40 },
         { date: "2024", score: 65 },
         { date: "2025", score: 85 }
      ],
      changeLog: [
         { field: "Risk Score", old: "Medium (65)", new: "High (85)", user: "System", date: "2026-01-04" },
         { field: "Residence Address", old: "Mumbai, Bandra", new: "Mumbai, Bandra West", user: "Branch Ops", date: "2025-12-01" }
      ]
    },
    accountsProfile: {
      summary: [
        { id: "ACC-9921", institution: "HDFC Bank", type: "Savings Max", balance: "₹12,45,000", currency: "INR", status: "Active", openDate: "2018-03-12" },
        { id: "ACC-3341", institution: "HDFC Bank", type: "Current Business", balance: "₹45,20,000", currency: "INR", status: "Active", openDate: "2020-06-15" },
        { id: "ACC-8812", institution: "HDFC Bank", type: "Term Deposit", balance: "₹5,00,000", currency: "INR", status: "Closed", openDate: "2019-01-01", closeDate: "2024-01-01" },
        { id: "ACC-1122", institution: "Citi Bank", type: "Foreign Currency", balance: "$12,000", currency: "USD", status: "Dormant", openDate: "2021-05-20" }
      ],
      limits: {
        transaction: "₹50,00,000 / day",
        cash: "₹2,00,000 / day",
        fx: "$50,000 / year"
      },
      products: ["Savings Account", "Current Account", "Trade Finance", "Forex Card", "Online Banking"],
      dormant: [
        { id: "ACC-1122", name: "Foreign Currency USD", period: "8 months" }
      ]
    },
    transactionsProfile: {
      summary: {
        daily: { volume: 15, value: "₹4.5L" },
        monthly: { volume: 450, value: "₹1.2Cr" },
        ytd: { volume: 5200, value: "₹14.5Cr" },
        breakdown: {
           cash: 15,
           nonCash: 85,
           domestic: 60,
           crossBorder: 40
        }
      },
      topCounterparties: [
         { name: "Alpha Trade Corp", count: 125, amount: "₹85L" },
         { name: "Global Logistics", count: 89, amount: "₹45L" },
         { name: "Tech Solutions Inc", count: 65, amount: "₹22L" },
         { name: "Nexus Imports", count: 42, amount: "₹18L" },
         { name: "Solaris Energy", count: 30, amount: "₹12L" }
      ],
      topCountries: [
          { code: "US", name: "USA", amount: "₹4.5Cr", count: 120 },
          { code: "SG", name: "Singapore", amount: "₹2.8Cr", count: 85 },
          { code: "AE", name: "UAE", amount: "₹1.5Cr", count: 45 },
          { code: "GB", name: "UK", amount: "₹95L", count: 30 },
          { code: "DE", name: "Germany", amount: "₹65L", count: 15 }
      ],
      topAlerts: [
         { name: "Structuring", count: 12, severity: "High" },
         { name: "Velocity Check", count: 8, severity: "Medium" },
         { name: "High Value Txn", count: 5, severity: "Medium" },
         { name: "Round Dollar", count: 4, severity: "Low" },
         { name: "Rapid Movement", count: 2, severity: "High" }
      ],
      unusualPatterns: [
          { name: "Out of Income Profile Transactions", triggered: true, alertId: "ALT-INC-01", details: "Txn > 5x declared income" },
          { name: "Out of Peer Profile Transactions", triggered: true, alertId: "ALT-PEER-02", details: "Volume 45% > peer avg" },
          { name: "Remittance destination not matching Nationality", triggered: false, alertId: null, details: "Match confirmed" },
          { name: "Transactions surge from historical 6 month profile", triggered: true, alertId: "ALT-SURGE-03", details: "200% spike in Jan" },
          { name: "One to Many or Many to One funds flow", triggered: false, alertId: null, details: "Normal topology" },
          { name: "Surge in Dormant account transactions", triggered: false, alertId: null, details: "No activity" }
      ],
      trends: {
         surges: "Spike detected (Jan 15-20)",
         outliers: "2 transactions > 3σ",
         peerProfile: "Deviation: +15% vs Peers",
         nationalityMismatch: "None detected"
      },
      highRiskCorridors: {
         detected: true,
         details: "Potential link to Wildlife Trafficking (SE Asia corridor)",
         corridors: ["Golden Triangle", "West Africa"]
      }
    },
    alertsProfile: {
      active: [
         { id: "ALT-901", rule: "High Value Txn", amount: "₹8,50,000", severity: "High", status: "Open", date: "05 Jan 2026", details: "Single txn > threshold" },
         { id: "ALT-882", rule: "Velocity Check", amount: "₹4,20,000", severity: "Medium", status: "In Progress", date: "02 Jan 2026", details: "Multiple txns in 24h" }
      ],
      history: [
         { id: "ALT-705", rule: "Structuring", disposition: "False Positive", rationale: "Business expense verified", date: "15 Dec 2025", status: "Closed", amount: "₹45,000" },
         { id: "ALT-655", rule: "Round Dollar", disposition: "Escalated", rationale: "Suspicious pattern", date: "10 Nov 2025", status: "Filed STR", amount: "₹1,20,000" },
         { id: "ALT-620", rule: "Rapid Movement", disposition: "False Positive", rationale: "Salary disbursement", date: "01 Oct 2025", status: "Closed", amount: "₹2,50,000" },
         { id: "ALT-598", rule: "High Velocity", disposition: "False Positive", rationale: "Holiday season spending", date: "25 Sep 2025", status: "Closed", amount: "₹85,000" },
         { id: "ALT-550", rule: "Structuring", disposition: "Escalated", rationale: "Multiple deposits < 50k", date: "12 Aug 2025", status: "Review", amount: "₹1,80,000" },
         { id: "ALT-432", rule: "Unusual Merchant", disposition: "False Positive", rationale: "Confirmed with customer", date: "05 Jul 2025", status: "Closed", amount: "₹15,000" },
         { id: "ALT-310", rule: "Crypto P2P", disposition: "Escalated", rationale: "High risk counterparty", date: "20 Jun 2025", status: "Filed STR", amount: "₹5,00,000" },
         { id: "ALT-205", rule: "Foreign Transfer", disposition: "False Positive", rationale: "Tuition fees", date: "15 May 2025", status: "Closed", amount: "$12,000" }
      ],
      stats: {
         totalActiveVolume: "₹12,70,000",
         activeCount: 2,
         closedCount: 45,
         falsePositiveRate: 85,
         alertVolumePercentage: 1.2
      },
      rfi: {
         count: 3,
         lastRequest: "2026-01-02",
         status: "Pending Response",
         items: [
            { type: "Source of Funds", date: "02 Jan 2026", status: "Pending" },
            { type: "Invoice Copy", date: "15 Dec 2025", status: "Received" }
         ]
      },
      fundingSources: [
         { type: "Wires", percent: 60, trend: "Stable" },
         { type: "Checks", percent: 30, trend: "Decreasing" },
         { type: "Crypto", percent: 10, trend: "Increasing" }
      ]
    },
    regReportsProfile: {
       jurisdiction: "India",
       strFiled: { isFiled: true, date: "15 Dec 2025", id: "STR-2025-001", status: "Filed", link: "#" },
       ctrFiled: { isFiled: true, date: "Monthly", details: "Regular High Value", link: "#" },
       leaRequests: { hasRequest: true, date: "20 Dec 2025", agency: "Enforcement Directorate", type: "Summons", link: "#" },
       accountFrozen: { isFrozen: true, date: "05 Jan 2026", reason: "Regulatory Order #9921" }
    },
    audit: [
       { id: "LOG-001", category: "Risk", action: "Risk Rating Downgrade", date: "05 Jan 2026 14:30", user: "System (Auto)", approver: "System", details: "Downgraded from High to Medium after clear screening.", changes: { from: "High", to: "Medium" } },
       { id: "LOG-002", category: "KYC", action: "Address Update", date: "04 Jan 2026 09:15", user: "Sarah Jenkins", approver: "Compliance Manager", details: "Updated residential address via proof of residence.", changes: { field: "Address", from: "123 Old St...", to: "456 New St..." } },
       { id: "LOG-003", category: "Screening", action: "Match False Positive", date: "03 Jan 2026 11:20", user: "Mike Ross", approver: "Auto-Approved", details: "Marked potential match 'John D. Doe' as False Positive.", changes: null },
       { id: "LOG-004", category: "Product", action: "Credit Limit Increase", date: "02 Jan 2026 16:45", user: "System", approver: "Risk Team", details: "Credit limit increased based on usage.", changes: { from: "₹50,000", to: "₹75,000" } },
       { id: "LOG-005", category: "KYC", action: "Document Verified", date: "01 Jan 2026 10:00", user: "System", approver: null, details: "Passport verification successful.", changes: null }
    ],
    riskFactors: {
        kyc: [
            { label: "Nationality/ Geographic Risk", high: true },
            { label: "Occupation", high: false },
            { label: "Fatca", high: false }
        ],
        relatedParties: [
            { label: "PEP Match", high: true },
            { label: "Related Party High risk", high: false }
        ],
        sanctionMatch: [
             { label: "PEP Match", high: true },
             { label: "Adverse Match", high: true },
             { label: "Sanction Match", high: false }
        ],
        riskProfile: [
            { label: "Transaction in High-risk Contries", high: true },
            { label: "Industry Risk", high: true },
            { label: "Behaviour Risk", high: true },
            { label: "Overall Risk", high: true },
            { label: "Manual Risk Change", high: false }
        ],
        cddEdd: [
            { label: "CDD/EDD Triggers \"YES\"", high: true },
            { label: "Profile Change \"YES\"", high: false }
        ],
        account: [
            { label: "Dormant", high: false }
        ],
        transactions: [
            { label: "High Risk Countries Alerts", high: true },
            { label: "High Risk Triggers", high: true }
        ],
        lea: [
            { label: "LEA Request \"YES\"", high: false }
        ],
        regulatory: [
            { label: "YES/ CTR", high: false }
        ]
    }
  }
];

export interface Customer360Handle {
  resetView: () => void;
}

export const Customer360View = forwardRef<Customer360Handle, Customer360ViewProps>(({ breadcrumbs, onBreadcrumbNavigate, setBreadcrumbs }, ref) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    resetView: () => {
      setShowDashboard(false);
    }
  }));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToBottom = () => {
     if (scrollRef.current) {
        scrollRef.current.scrollTo({
           top: scrollRef.current.scrollHeight,
           behavior: "smooth"
        });
     }
  };

  const scrollToTop = () => {
      if (scrollRef.current) {
         scrollRef.current.scrollTo({
            top: 0,
            behavior: "smooth"
         });
      }
  };

  const handleScroll = () => {
      if (scrollRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
          // Check if we are near the bottom (e.g., within 50px)
          const isBottom = scrollTop + clientHeight >= scrollHeight - 50;
          setShowScrollToTop(isBottom);
      }
  };
  const [selectedCustomer, setSelectedCustomer] = useState(mockCustomers[0]);
  const { items: sortedUbo, requestSort: sortUbo, sortConfig: uboSortConfig } = useSortableData(selectedCustomer.relationships.ubo || []);
  const { items: sortedFamily, requestSort: sortFamily, sortConfig: familySortConfig } = useSortableData(selectedCustomer.relationships.family || []);
  const { items: sortedAssociates, requestSort: sortAssociates, sortConfig: associatesSortConfig } = useSortableData(selectedCustomer.relationships.associates || []);
  const { items: sortedJointHolders, requestSort: sortJointHolders, sortConfig: jointHoldersSortConfig } = useSortableData(selectedCustomer.relationships.jointHolders || []);
  const { items: sortedPoa, requestSort: sortPoa, sortConfig: poaSortConfig } = useSortableData(selectedCustomer.relationships.poa || []);
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [activeTab, setActiveTab] = useState("overview");
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  const [showLinkAnalysis, setShowLinkAnalysis] = useState(false);
  const [showSearchTips, setShowSearchTips] = useState(true);
  const [showCashChart, setShowCashChart] = useState(false);
  const [showDomesticChart, setShowDomesticChart] = useState(false);
  const [hoveredRiskScore, setHoveredRiskScore] = useState<number | null>(null);

  const lastBreadcrumbState = useRef<string | null>(null);

  useEffect(() => {
    if (setBreadcrumbs) {
      if (showDashboard && selectedCustomer) {
         const stateKey = `dashboard-${selectedCustomer.id}`;
         if (lastBreadcrumbState.current !== stateKey) {
            setBreadcrumbs([
                { label: selectedCustomer.name, path: "customer-detail", isActive: true }
            ]);
            lastBreadcrumbState.current = stateKey;
         }
      } else {
         if (lastBreadcrumbState.current !== "empty") {
             setBreadcrumbs([]);
             lastBreadcrumbState.current = "empty";
         }
      }
    }
  }, [showDashboard, selectedCustomer, setBreadcrumbs]);

  const handleSearch = (customerPreview?: any) => {
    setIsLoading(true);
    setTimeout(() => {
      if (customerPreview && customerPreview.name) {
         // Merge preview data with full mock template
         const fullDetails = {
            ...mockCustomers[0],
            name: customerPreview.name,
            id: customerPreview.id,
            email: customerPreview.email,
            phone: customerPreview.mobile,
            riskScore: customerPreview.risk?.replace(' Risk', '') || 'Low',
            riskLevel: customerPreview.risk?.includes('High') ? 85 : customerPreview.risk?.includes('Medium') ? 45 : 15,
            kycStatus: customerPreview.kyc || 'Verified',
            status: customerPreview.status || 'Active',
            accountsProfile: {
                ...mockCustomers[0].accountsProfile,
                summary: [
                    { ...mockCustomers[0].accountsProfile.summary[0], balance: customerPreview.balance || "₹0" }
                ]
            }
         };
         setSelectedCustomer(fullDetails);
      } else {
         setSelectedCustomer(mockCustomers[0]);
      }
      setIsLoading(false);
      setShowDashboard(true);
    }, 600);
  };

  // const lastScrollTop = useRef(0);

  // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //   const target = e.currentTarget;
  //   const scrollTop = target.scrollTop;
  //   const scrollHeight = target.scrollHeight;
  //   const clientHeight = target.clientHeight;
    
  //   // Calculate if we have enough scrollable content to justify collapsing
  //   // The details panel is approx 250-300px diff. If we collapse, we gain that space.
  //   // If the remaining content is shorter than the viewport, scrollTop forces to 0 -> Loop.
  //   // We only collapse if there's enough content.
  //   const maxScroll = scrollHeight - clientHeight;
  //   // const hasEnoughContent = maxScroll > 350; // Buffer for safety

  //   const isScrollingUp = scrollTop < lastScrollTop.current;
  //   const isScrollingDown = scrollTop > lastScrollTop.current;
    
  //   // Auto-collapse when scrolling down
  //   // We use a buffer of 280px (approx height of details panel) to prevent layout loops
  //   // where collapsing makes the content fit the screen -> scrollTop becomes 0 -> auto-expand triggers.
  //   if (scrollTop > 10 && isDetailsExpanded && isScrollingDown && (scrollHeight - clientHeight > 280)) {
  //     setIsDetailsExpanded(false);
  //   } 
  //   // Auto-expand when scrolling up
  //   else if (isScrollingUp && !isDetailsExpanded) {
  //      setIsDetailsExpanded(true);
  //   }
    
  //   lastScrollTop.current = scrollTop;
  // };

  const calculateAge = (dob: string) => {
    if (!dob) return '';
    return `${new Date().getFullYear() - new Date(dob).getFullYear()} yrs`;
  };

  // Styles
  const cardClass = "rounded-lg border border-gray-200 shadow-sm bg-white overflow-hidden h-full flex flex-col";
  const cardHeaderClass = "bg-gray-50/50 pt-3 !pb-3 px-4 border-b border-gray-100 flex items-center justify-between";
  const cardTitleClass = "text-xs font-bold tracking-wider text-gray-700 flex items-center gap-1.5";
  const labelClass = "text-sm font-normal text-gray-500 tracking-wide whitespace-nowrap shrink-0 w-[130px] flex justify-between";
  const valueClass = "text-sm font-normal text-gray-900 leading-tight truncate";
  const itemClass = "flex items-center gap-3 min-w-0 overflow-hidden h-6"; 

  const getRiskBadgeColor = (level: string, solid = false) => {
      const colors: any = {
          'High': solid ? "bg-red-100 text-red-700" : "bg-red-50 text-red-700 border-red-200",
          'Medium': solid ? "bg-orange-100 text-orange-700" : "bg-orange-50 text-orange-700 border-orange-200",
          'Low': solid ? "bg-green-100 text-green-700" : "bg-green-50 text-green-700 border-green-200",
          'Critical': solid ? "bg-red-600 text-white" : "bg-red-100 text-red-800 border-red-300"
      };
      return colors[level] || "bg-gray-100 text-gray-700";
  };

  const renderRiskFlags = (data: any) => {
      const flags = [];
      if (data.fatfBlack === 'Y') flags.push({ label: 'FATF Black', color: 'bg-gray-900 text-white' });
      if (data.fatfGrey === 'Y') flags.push({ label: 'FATF Grey', color: 'bg-gray-500 text-white' });
      if (data.taxEvasion === 'Y') flags.push({ label: 'Tax', color: 'bg-purple-100 text-purple-700' });
      if (data.otherHighRisk === 'Y') flags.push({ label: 'High Risk', color: 'bg-red-100 text-red-700' });
      
      if (flags.length === 0) return <span className="text-[9px] text-gray-400">-</span>;
      
      return flags.map((f, i) => (
          <Badge key={i} variant="outline" className={cn("text-[8px] h-3.5 px-1 border-0 rounded-sm", f.color)}>{f.label}</Badge>
      ));
  };

  const renderCustomerDetails = () => (
    <div className="bg-white border-b border-gray-200 transition-all duration-300">
       {/* Section Header with Toggle */}
       <div 
          className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50/50"
          onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
       >
          <div className="flex items-center gap-2">
             <div className={cardTitleClass}>
                <User className="size-3.5 text-[#2A53A0]" />
                Additional Details
             </div>
             {!isDetailsExpanded && (
                <div className="flex items-center gap-3 ml-4 text-xs text-gray-500 animate-in fade-in slide-in-from-left-2 overflow-hidden whitespace-nowrap">
                   <span className="hidden md:inline">Residency: {selectedCustomer.residentStatus}</span>
                   <span className="hidden lg:inline text-gray-300">|</span>
                   <span className="hidden lg:inline">Segment: {selectedCustomer.businessSegment}</span>
                   <span className="hidden xl:inline text-gray-300">|</span>
                   <span className="hidden xl:inline">Occupation: {selectedCustomer.occupation}</span>
                   <span className="hidden 2xl:inline text-gray-300">|</span>
                   <span className="hidden 2xl:inline">Employer: {selectedCustomer.employer}</span>
                   <span className="hidden 2xl:inline text-gray-300">|</span>
                   <span className="hidden 2xl:inline">Onboarded: {selectedCustomer.onboardingDate}</span>
                </div>
             )}
          </div>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400">
             {isDetailsExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </Button>
       </div>

       {isDetailsExpanded && (
           <div className="px-4 py-2 animate-in slide-in-from-top-2 duration-200 max-h-[300px] overflow-y-auto">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2 gap-x-4">
                {/* Row 1 */}
                <div className={itemClass} title={selectedCustomer.previousNames || 'N/A'}><div className={labelClass}><span>Prev Names</span><span>:</span></div><div className={valueClass}>{selectedCustomer.previousNames || 'N/A'}</div></div>
                <div className={itemClass} title={selectedCustomer.placeOfBirth}><div className={labelClass}><span>Place of Birth</span><span>:</span></div><div className={valueClass}>{selectedCustomer.placeOfBirth}</div></div>
                <div className={itemClass} title={selectedCustomer.gender}><div className={labelClass}><span>Gender</span><span>:</span></div><div className={valueClass}>{selectedCustomer.gender}</div></div>
                <div className={itemClass} title={selectedCustomer.multipleCitizenships?.join(", ")}><div className={labelClass}><span>Citizenships</span><span>:</span></div><div className={valueClass}>{selectedCustomer.multipleCitizenships?.join(", ") || "None"}</div></div>
                
                {/* Row 2 */}
                <div className={itemClass} title={selectedCustomer.occupation}><div className={labelClass}><span>Occupation</span><span>:</span></div><div className={valueClass}>{selectedCustomer.occupation}</div></div>
                <div className={itemClass} title={selectedCustomer.employer}><div className={labelClass}><span>Employer</span><span>:</span></div><div className={valueClass}>{selectedCustomer.employer}</div></div>
                <div className={itemClass} title={selectedCustomer.businessSegment}><div className={labelClass}><span>Biz Segment</span><span>:</span></div><div className={valueClass}>{selectedCustomer.businessSegment || "N/A"}</div></div>
                <div className={itemClass}><div className={labelClass}><span>Segment</span><span>:</span></div><div className="flex flex-wrap gap-1 min-w-0 overflow-hidden h-5">{selectedCustomer.customerSegment?.map((seg: string) => <Badge key={seg} variant="secondary" className="text-[9px] h-4 px-1 rounded-sm whitespace-nowrap">{seg}</Badge>)}</div></div>
                
                {/* Row 3 */}
                <div className={itemClass} title={selectedCustomer.onboardingDate}><div className={labelClass}><span>Onboarding</span><span>:</span></div><div className={valueClass}>{selectedCustomer.onboardingDate}</div></div>
                <div className={itemClass} title={selectedCustomer.fatcaStatus}><div className={labelClass}><span>FATCA</span><span>:</span></div><div className={valueClass}>{selectedCustomer.fatcaStatus}</div></div>
                <div className={itemClass} title={selectedCustomer.leaStatus}><div className={labelClass}><span>LEA</span><span>:</span></div><div className={valueClass}>{selectedCustomer.leaStatus}</div></div>
                <div className="col-span-1 md:col-span-2 flex items-center gap-3 min-w-0 overflow-hidden h-6">
                    <div className={labelClass}><span>Channel Mix</span><span>:</span></div>
                    <div className={cn(valueClass, "flex items-center gap-3")}>
                        <div className="flex items-center gap-1"><span className="text-gray-500 text-xs">Branch:</span> <span>{selectedCustomer.channelUsage?.branch || "0%"}</span></div>
                        <div className="flex items-center gap-1"><span className="text-gray-500 text-xs">Digital:</span> <span>{selectedCustomer.channelUsage?.digital || "0%"}</span></div>
                        <div className="flex items-center gap-1"><span className="text-gray-500 text-xs">Agent:</span> <span>{selectedCustomer.channelUsage?.agent || "0%"}</span></div>
                    </div>
                </div>

                {/* ID Info - Full Row Wrapper but Grid Internal */}
                <div className="col-span-1 md:col-span-4 mt-2 pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                     <div className={cn(labelClass, "mt-0.5")}><span>ID Info</span><span>:</span></div>
                     <div className="flex flex-wrap gap-3">
                        {Object.entries(selectedCustomer.idInfo || {}).map(([key, val]: [string, any]) => {
                          const typeLower = val.type?.toLowerCase() || '';
                          
                          let bgClass = 'bg-gray-50 border-gray-200';
                          let textClass = 'text-gray-900';
                          let labelClass = 'text-gray-600';

                          if (typeLower.includes('passport')) {
                             bgClass = 'bg-blue-50 border-blue-200';
                             textClass = 'text-blue-700';
                             labelClass = 'text-blue-600/80';
                          } else if (typeLower.includes('emirates')) {
                             bgClass = 'bg-indigo-50 border-indigo-200';
                             textClass = 'text-indigo-700';
                             labelClass = 'text-indigo-600/80';
                          } else if (typeLower.includes('aadhaar') || typeLower.includes('adhar') || typeLower.includes('national')) {
                             bgClass = 'bg-emerald-50 border-emerald-200';
                             textClass = 'text-emerald-700';
                             labelClass = 'text-emerald-600/80';
                          } else if (typeLower.includes('pan') || typeLower.includes('tax')) {
                             bgClass = 'bg-orange-50 border-orange-200';
                             textClass = 'text-orange-700';
                             labelClass = 'text-orange-600/80';
                          } else if (typeLower.includes('driver')) {
                             bgClass = 'bg-purple-50 border-purple-200';
                             textClass = 'text-purple-700';
                             labelClass = 'text-purple-600/80';
                          }
                             
                          return (
                           <div key={key} className={cn("flex items-center gap-2 text-sm px-2 py-0.5 rounded border shadow-sm", bgClass)}>
                              <span className={cn("font-normal text-xs", labelClass)}>{val.type}:</span>
                              <span className={cn("font-mono text-sm font-normal", textClass)}>{val.number}</span>
                              {val.expiry && <span className={cn("text-xs opacity-75", textClass)}>(Exp: {val.expiry})</span>}
                           </div>
                          );
                        })}
                     </div>
                  </div>
                </div>

                {/* Residence Info - Full Row Wrapper but Grid Internal */}
                <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-y-2 gap-x-4 mt-1">
                    <div className={itemClass} title={selectedCustomer.residentStatus}><div className={labelClass}><span>Residency</span><span>:</span></div><div className={valueClass}>{selectedCustomer.residentStatus}</div></div>
                    <div className="col-span-1 md:col-span-3 flex items-center gap-4 overflow-hidden">
                       <div className={cn(labelClass, "mt-0")}><span>Addresses</span><span>:</span></div>
                       <div className="flex flex-row items-center gap-4 min-w-0 w-full">
                          <div className="flex items-center gap-2 min-w-0"><span className="text-[9px] font-bold text-gray-400 tracking-wider shrink-0">Primary:</span><div className={valueClass}>{selectedCustomer.primaryAddress}</div></div>
                          {selectedCustomer.secondaryAddresses && selectedCustomer.secondaryAddresses.length > 0 && (
                              <div className="flex items-center gap-2 min-w-0 border-l border-gray-300 pl-4"><span className="text-[9px] font-bold text-gray-400 tracking-wider shrink-0">Secondary:</span><div className={valueClass}>{selectedCustomer.secondaryAddresses.join(", ")}</div></div>
                          )}
                       </div>
                    </div>
                </div>
             </div>

           </div>
       )}
    </div>
  );

  const renderPlaceholder = (title: string, icon: any) => (
    <div className="flex flex-col items-center justify-center h-[400px] border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 text-gray-400">
       <div className="p-4 bg-white rounded-full shadow-sm mb-4">
         {icon}
       </div>
       <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
       <p className="text-sm">Detailed view content goes here</p>
    </div>
  );

  if (!showDashboard) {
    const searchData = [
       { name: "Rajesh Kumar", id: "CUST-8829103", accountNumber: "ACC-88291030", risk: "High Risk", time: "10 mins ago", initials: "RK", color: "blue", img: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3Njc1NzAwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", mobile: "+91 98765 43210", email: "rajesh.k@gmail.com", accounts: 2, balance: "₹4.5L", status: "Active", kyc: "Verified" },
       { name: "Rajesh Gupta", id: "CUST-8829104", accountNumber: "ACC-88291040", risk: "Low Risk", time: "2 days ago", initials: "RG", color: "green", mobile: "+91 98765 43211", email: "rajesh.gupta@gmail.com", accounts: 1, balance: "₹1.5L", status: "Active", kyc: "Verified" },
       { name: "Rajesh Singh", id: "CUST-8829105", accountNumber: "ACC-88291050", risk: "Medium Risk", time: "1 week ago", initials: "RS", color: "orange", mobile: "+91 98765 43212", email: "r.singh@outlook.com", accounts: 3, balance: "₹8.2L", status: "Active", kyc: "Verified" },
       { name: "Rajesh & Sons Traders", id: "CORP-8829106", accountNumber: "ACC-88291060", risk: "High Risk", time: "yesterday", initials: "RT", color: "blue", mobile: "+91 22 8877 6655", email: "info@rajeshsons.com", accounts: 5, balance: "₹45.5L", status: "Active", kyc: "Pending" },
       { name: "Rahul Verma", id: "CUST-3344556", accountNumber: "ACC-33445560", risk: "Medium Risk", time: "5 hours ago", initials: "RV", color: "orange", mobile: "+91 91234 56789", email: "rahul.v@gmail.com", accounts: 1, balance: "₹2.1L", status: "Active", kyc: "Verified" },
       { name: "Ravi Patel", id: "CUST-9988776", accountNumber: "ACC-99887760", risk: "Low Risk", time: "1 day ago", initials: "RP", color: "green", mobile: "+91 99882 23344", email: "ravi.patel@yahoo.com", accounts: 3, balance: "₹15.5L", status: "Active", kyc: "Verified" },
       { name: "Rachel Green", id: "CUST-5566778", accountNumber: "ACC-55667780", risk: "Low Risk", time: "3 days ago", initials: "RG", color: "purple", mobile: "+91 77665 54433", email: "rachel.g@outlook.com", accounts: 2, balance: "₹5.2L", status: "Active", kyc: "Verified" },
       { name: "Global Trade Corp", id: "CORP-9921102", accountNumber: "ACC-99211020", risk: "Medium Risk", time: "2 hours ago", initials: "GT", color: "purple", mobile: "+91 22 2456 7890", email: "finance@globaltrade.com", accounts: 5, balance: "₹1.2Cr", status: "Active", kyc: "Verified" },
       { name: "Priya Sharma", id: "CUST-7721992", accountNumber: "ACC-77219920", risk: "Low Risk", time: "yesterday", initials: "PS", color: "green", mobile: "+91 99887 76655", email: "priya.s@yahoo.com", accounts: 1, balance: "₹85,000", status: "Dormant", kyc: "Re-KYC Due" },
       { name: "Vikram Singh", id: "CUST-1122334", accountNumber: "ACC-11223340", risk: "Low Risk", time: "2 days ago", initials: "VS", color: "gray", mobile: "+91 88776 65544", email: "vikram.singh@outlook.com", accounts: 3, balance: "₹12.5L", status: "Active", kyc: "Verified" },
       { name: "Sarah Chen", id: "CUST-9988771", accountNumber: "ACC-99887710", risk: "Low Risk", time: "3 days ago", initials: "SC", color: "purple", mobile: "+91 77665 54433", email: "sarah.chen@gmail.com", accounts: 4, balance: "₹32.1L", status: "Active", kyc: "Verified" },
       { name: "TechSoft Solutions", id: "CORP-5544332", accountNumber: "ACC-55443320", risk: "High Risk", time: "1 week ago", initials: "TS", color: "blue", mobile: "+91 22 9988 7766", email: "admin@techsoft.io", accounts: 8, balance: "₹2.5Cr", status: "Active", kyc: "Pending Review" }
    ];

    const filteredResults = searchValue.trim() 
      ? searchData.filter(item => {
          const q = searchValue.toLowerCase().trim();
          const cleanQ = q.replace(/\D/g, '');
          // Smart Search: Check all fields
          return (
             item.name.toLowerCase().includes(q) ||
             item.id.toLowerCase().includes(q) ||
             item.email.toLowerCase().includes(q) ||
             (cleanQ.length > 2 && item.mobile.replace(/\D/g, '').includes(cleanQ)) || // Only search phone if 3+ digits
             (item.accountNumber && item.accountNumber.toLowerCase().includes(q))
          );
        })
      : [];

    const isSearching = searchValue.trim().length > 0;

    return (
       <div className="h-full bg-gray-50/50 flex flex-col overflow-hidden font-sans">
          {/* CENTERED HERO SEARCH (When NOT searching) */}
          {!isSearching && (
             <div className="flex-1 flex flex-col items-center justify-center p-6 -mt-20 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-full max-w-2xl space-y-8">
                   
                   {/* Brand / Header */}
                   <div className="text-center space-y-3">
                      <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm border border-gray-100 mb-2">
                         <Search className="size-8 text-[#2A53A0]" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Customer 360 Lookup</h2>
                      <p className="text-gray-500 text-lg">
                         Search by Name, ID, Phone, or Account Number
                      </p>
                   </div>

                   {/* Google-Style Search Bar */}
                   <div className="relative max-w-xl mx-auto w-full">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <Search className="size-5" />
                       </div>
                       <Input 
                           className="h-14 pl-12 pr-6 rounded-full border border-gray-200 shadow-md text-lg focus-visible:ring-2 focus-visible:ring-[#2A53A0]/20 focus-visible:border-[#2A53A0] transition-all bg-white placeholder:text-gray-400" 
                           placeholder="Search customers..."
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           autoFocus
                       />
                   </div>

                   {/* Quick Access / Recent */}
                   <div className="pt-8 max-w-xl mx-auto w-full">
                       <div className="flex items-center justify-between mb-4 px-2">
                           <h3 className="text-xs font-bold text-gray-500 tracking-wider">Recent Searches</h3>
                           <Button variant="link" size="sm" className="h-auto p-0 text-xs text-blue-600">Clear History</Button>
                       </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {[
                               { name: "Rajesh Kumar", type: "Individual", time: "10 mins ago", id: "CUST-8829103" },
                               { name: "Global Trade Corp", type: "Corporate", time: "2 hours ago", id: "CORP-9921102" }
                           ].map((recent, i) => (
                               <div key={i} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#2A53A0]/30 cursor-pointer transition-all group flex items-center gap-3" onClick={() => { setSearchValue(recent.name); handleSearch(recent); }}>
                                   <div className="p-2 bg-blue-50 rounded-lg text-[#2A53A0] group-hover:bg-blue-100 transition-colors"><History className="size-4"/></div>
                                   <div className="min-w-0">
                                       <div className="font-semibold text-gray-900 text-sm truncate group-hover:text-[#2A53A0]">{recent.name}</div>
                                       <div className="text-[10px] text-gray-500 truncate">{recent.id} • {recent.time}</div>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>

                </div>
             </div>
          )}

          {/* RESULTS VIEW (When searching) */}
          {isSearching && (
             <div className="flex flex-col h-full animate-in fade-in duration-300">
                {/* Compact Top Bar */}
                <div className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm z-10 flex items-center gap-4 shrink-0 sticky top-0">
                    <div className="flex-1 max-w-2xl flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                            <Input 
                                className="h-10 pl-9 pr-9 bg-gray-100/50 border-transparent hover:bg-gray-100 focus:bg-white focus:border-gray-200 focus:shadow-sm transition-all text-sm rounded-full" 
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search customers..."
                                autoFocus
                            />
                            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-gray-900 rounded-full" onClick={() => setSearchValue("")}>
                                <X className="size-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 border-l pl-4 border-gray-200 h-6">
                        <span className="font-medium text-gray-900">{filteredResults.length}</span> results found
                    </div>
                </div>
                
                {/* Results List */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50/50">
                     <div className="max-w-3xl mx-auto space-y-3">
                         {filteredResults.length > 0 ? (
                             filteredResults.map((item, i) => (
                                 <Card key={i} className="cursor-pointer hover:shadow-md hover:border-[#2A53A0]/30 transition-all duration-200 group border-gray-200 overflow-hidden" onClick={() => handleSearch(item)}>
                                    <CardContent className="p-0">
                                       <div className="flex flex-col sm:flex-row">
                                          {/* Left Color Strip */}
                                          <div className={cn("w-1.5 shrink-0 hidden sm:block", item.risk.includes("High") ? "bg-red-500" : item.risk.includes("Medium") ? "bg-orange-500" : "bg-green-500")} />
                                          
                                          <div className="p-4 flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
                                             {/* Avatar & Name */}
                                             <div className="flex items-center gap-3 sm:w-[220px] shrink-0">
                                                <Avatar className="h-10 w-10 border border-gray-100 shrink-0">
                                                   {item.img && <AvatarImage src={item.img} alt={item.name} />}
                                                   <AvatarFallback className={cn(
                                                      item.color === 'blue' ? "bg-blue-50 text-[#2A53A0]" :
                                                      item.color === 'purple' ? "bg-purple-50 text-purple-700" :
                                                      item.color === 'green' ? "bg-green-50 text-green-700" :
                                                      "bg-gray-100 text-gray-600"
                                                   )}>{item.initials}</AvatarFallback>
                                                </Avatar>
                                                <div className="min-w-0">
                                                   <div className="font-bold text-sm text-gray-900 group-hover:text-[#2A53A0] truncate">{item.name}</div>
                                                   <div className="text-xs text-gray-500 font-mono">{item.id}</div>
                                                </div>
                                             </div>

                                             {/* Key Details */}
                                             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
                                                <div>
                                                   <p className="text-[10px] text-gray-400 tracking-wider font-semibold mb-0.5">Mobile</p>
                                                   <p className="text-xs font-medium text-gray-700 truncate">{item.mobile}</p>
                                                </div>
                                                <div>
                                                   <p className="text-[10px] text-gray-400 tracking-wider font-semibold mb-0.5">Balance</p>
                                                   <p className="text-xs font-bold text-gray-900">{item.balance}</p>
                                                </div>
                                                <div className="hidden sm:block">
                                                   <p className="text-[10px] text-gray-400 tracking-wider font-semibold mb-0.5">Accounts</p>
                                                   <p className="text-xs font-medium text-gray-700">{item.accounts}</p>
                                                </div>
                                             </div>

                                             {/* Status Badge */}
                                             <div className="flex items-center justify-end sm:w-[120px] shrink-0 gap-2">
                                                <Badge className={cn("text-[10px] px-2 h-5 font-medium border", item.risk.includes("High") ? "bg-red-50 text-red-700 border-red-200" : item.risk.includes("Medium") ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-green-50 text-green-700 border-green-200")} variant="outline">
                                                   {item.risk}
                                                </Badge>
                                                <ChevronRight className="size-4 text-gray-300 group-hover:text-[#2A53A0]" />
                                             </div>
                                          </div>
                                       </div>
                                    </CardContent>
                                 </Card>
                             ))
                         ) : (
                             <div className="p-12 text-center flex flex-col items-center justify-center text-gray-400 bg-white rounded-lg border border-dashed border-gray-200">
                                <Search className="size-8 mb-3 opacity-20" />
                                <h3 className="text-sm font-semibold text-gray-900">No customers found</h3>
                                <p className="text-xs text-gray-500 mt-1 max-w-[200px]">We couldn't find any results for "{searchValue}". Try a different keyword.</p>
                             </div>
                         )}
                     </div>
                </div>
             </div>
          )}
       </div>
    )
  }

  const TABS = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "relationships", label: "Relationships (UBO)", icon: Network },
    { id: "screening", label: "Screening", icon: Scan },
    { id: "risk", label: "Risk", icon: ShieldAlert },
    { id: "kyc", label: "KYC/CDD", icon: FileCheck },
    { id: "accounts", label: "Accounts", icon: CreditCard },
    { id: "transactions", label: "Transactions", icon: Activity },
    { id: "alerts", label: "Alerts", icon: Bell },
    { id: "reports", label: "Reg Reports", icon: Scale },
    { id: "audit", label: "Audit", icon: ScrollText },
  ];

  const headerAttributes = [
      { id: 'name', content: <h1 className="text-sm font-bold text-gray-900">{selectedCustomer.name}</h1> },
      { id: 'id', content: <span className="font-mono text-gray-500">{selectedCustomer.id}</span> },
      { id: 'type', content: <span className="flex items-center gap-1.5 text-gray-600"><User className="size-3.5 text-gray-400" />&nbsp;{selectedCustomer.type}</span> },
      { id: 'nationality', content: <span className="flex items-center gap-1.5 text-gray-600"><Globe className="size-3.5 text-gray-400" />&nbsp;{selectedCustomer.nationality}</span> },
      { id: 'pep', content: <span className="flex items-center gap-1.5 text-gray-600">PEP Match :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.pepMatch}</span></span> },
      { id: 'media', content: <span className="flex items-center gap-1.5 text-gray-600">Adverse Media :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.adverseMedia}</span></span> },
      { id: 'risk', content: <span className="flex items-center gap-1.5 text-gray-600">Risk Score :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.riskLevel}</span></span> },
      { id: 'cdd', content: <span className="flex items-center gap-1.5 text-gray-600">CDD/EDD :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.cddEddTriggers}</span></span> },
      { id: 'dormant', content: <span className="flex items-center gap-1.5 text-gray-600">Dormant :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.dormantAccounts}</span></span> },
      { id: 'txns', content: (
           <div className="flex items-center gap-1.5 text-gray-600">
               <span className="shrink-0">High Risk Txns :&nbsp;</span>
               <TooltipProvider>
                   <Tooltip>
                       <TooltipTrigger asChild>
                           <span className="font-medium text-red-600 cursor-pointer hover:text-red-700 transition-colors max-w-[150px] truncate inline-block align-bottom">
                               {selectedCustomer.highRiskTransactions?.countries?.join(", ")}
                           </span>
                       </TooltipTrigger>
                       <TooltipContent side="bottom" className="bg-white text-gray-900 border border-gray-200 shadow-md">
                           <p className="font-medium">Countries:</p>
                           <p className="text-sm">{selectedCustomer.highRiskTransactions?.countries?.join(", ")}</p>
                       </TooltipContent>
                   </Tooltip>
               </TooltipProvider>
           </div>
      )},
      { id: 'str', content: <span className="flex items-center gap-1.5 text-gray-600">STR/SAR :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.strSarFiled}</span></span> },
      { id: 'ctr', content: <span className="flex items-center gap-1.5 text-gray-600">CTR :&nbsp;<span className="font-medium text-gray-900">{selectedCustomer.ctrFiled}</span></span> },
      { id: 'lea', content: <span className="flex items-center gap-1.5 text-gray-600">LEA Requests :&nbsp;<span className="font-medium text-gray-900">{selectedCustomer.leaRequests}</span></span> },
      { id: 'alerts', content: <span className="flex items-center gap-1.5 text-gray-600">Active Alerts :&nbsp;<span className="font-medium text-red-600">{selectedCustomer.activeAlerts}</span></span> },
  ];

  const handleBack = () => {
    setShowDashboard(false);
    setSearchValue("");
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 font-sans overflow-hidden">
      {/* Unified Customer Header */}
      <div className="relative bg-white border-b border-gray-200 shadow-sm z-20 flex-shrink-0 transition-all duration-300 mb-2">
         <div className={cn("px-4 py-3 transition-all duration-300", isDetailsExpanded ? "pb-4" : "pb-4")}>
            
            {/* Top Row: Main Identity & Actions */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
               <div className="flex items-center gap-3 flex-1 min-w-0">
                  
                  <div className="relative shrink-0">
                     <Dialog>
                        <DialogTrigger asChild>
                           <Avatar className="h-10 w-10 border border-gray-200 shadow-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                              <AvatarImage src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3Njc1NzAwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt={selectedCustomer.name} />
                              <AvatarFallback className="bg-[#2A53A0] text-white text-xs font-bold rounded-lg">RK</AvatarFallback>
                           </Avatar>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-transparent border-none shadow-none text-white [&>button]:text-white [&>button]:bg-black/20 [&>button]:hover:bg-black/40 [&>button]:rounded-full [&>button]:p-1">
                           <DialogTitle className="sr-only">Customer Profile Picture</DialogTitle>
                           <DialogDescription className="sr-only">Enlarged view of {selectedCustomer.name}'s profile picture</DialogDescription>
                           <div className="flex flex-col items-center">
                              <img 
                                 src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3Njc1NzAwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                                 alt={selectedCustomer.name} 
                                 className="w-full h-auto rounded-lg shadow-2xl border border-white/10" 
                              />
                              <div className="mt-4 text-center bg-black/50 p-2 rounded-lg backdrop-blur-sm">
                                 <p className="text-lg font-bold text-white">{selectedCustomer.name}</p>
                                 <p className="text-sm text-gray-300">{selectedCustomer.id}</p>
                              </div>
                           </div>
                        </DialogContent>
                     </Dialog>
                     <div className={cn("absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full border-[2px] border-white flex items-center justify-center", selectedCustomer.status === 'Active' ? "bg-green-500" : "bg-gray-400")} title={`Status: ${selectedCustomer.status}`}>
                        {selectedCustomer.status === 'Active' && <CheckCircle2 className="h-3 w-3 text-white" strokeWidth={3} />}
                     </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 w-full">
                      <ResponsiveAttributes items={headerAttributes} className="w-full" />
                  </div>
               </div>

               {/* Right Actions */}
               <div className="flex flex-col items-end gap-4">
                    <div className="flex items-center gap-2">
                       <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                              <Button className="flex items-center gap-2 px-4 h-[46px] bg-[#2A53A0] hover:bg-[#1e3a70] text-white rounded-lg transition-all shadow-sm">
                                 <span className="text-sm">Export</span>
                                 <Download className="size-4" />
                              </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-32 p-2 rounded-xl shadow-xl border-gray-100 bg-white">
                              <DropdownMenuItem className="cursor-pointer py-3 px-3 rounded-lg focus:bg-gray-50 text-gray-700 font-medium transition-colors flex items-center gap-1.5">
                                 <FileSpreadsheet className="size-4 text-green-600" /> Excel
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer py-3 px-3 rounded-lg focus:bg-gray-50 text-gray-700 font-medium transition-colors flex items-center gap-1.5">
                                 <FileText className="size-4 text-red-600" /> PDF
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer py-3 px-3 rounded-lg focus:bg-gray-50 text-gray-700 font-medium transition-colors flex items-center gap-1.5">
                                 <Printer className="size-4 text-gray-600" /> Print
                              </DropdownMenuItem>
                          </DropdownMenuContent>
                       </DropdownMenu>
                    </div>
               </div>
            </div>


            {/* Identity Documents Row (Always Visible) */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 animate-in fade-in duration-500">
               {/* Header */}
               <div className="flex items-center gap-2 shrink-0 min-w-[160px]">
                  <h4 className="text-xs font-bold text-gray-700 tracking-wide">Identity Documents</h4>
               </div>

               {/* Documents List */}
               <div className="flex flex-wrap items-center gap-3">
                  {Object.entries(selectedCustomer.idInfo || {}).map(([key, val]: [string, any]) => {
                     const typeLower = val.type?.toLowerCase() || '';
                     let borderClass = 'border-l-slate-400';
                     
                     if (typeLower.includes('passport')) {
                        borderClass = 'border-l-blue-500';
                     } else if (typeLower.includes('emirates')) {
                        borderClass = 'border-l-indigo-500';
                     } else if (typeLower.includes('aadhaar') || typeLower.includes('adhar')) {
                        borderClass = 'border-l-emerald-500';
                     } else if (typeLower.includes('pan') || typeLower.includes('tax')) {
                        borderClass = 'border-l-orange-500';
                     }

                     return (
                        <div key={key} className={cn("flex items-center gap-4 px-3 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all border-l-4 min-w-fit", borderClass)}>
                           <div className="flex items-baseline gap-2">
                               <span className="text-[10px] font-bold text-gray-500 leading-tight">{val.type}:</span>
                               <span className="text-xs font-mono font-semibold text-gray-900 leading-tight">{val.number}</span>
                           </div>
                           {(val.expiry && val.expiry !== 'N/A') && (
                               <div className="flex items-baseline gap-1.5 text-[10px] text-gray-500 whitespace-nowrap">
                                   <span>Exp:</span>
                                   <span className="font-medium text-gray-700">{val.expiry}</span>
                               </div>
                           )}
                           {val.issuedBy && (
                               <div className="flex items-baseline gap-1.5 text-[10px] text-gray-500 whitespace-nowrap">
                                   <span>Issued:</span>
                                   <span className="font-medium text-gray-700">{val.issuedBy}</span>
                               </div>
                           )}
                        </div>
                     );
                  })}
               </div>
            </div>

            {/* Expanded Details Section */}





            

         </div>
      </div>

      {/* 3. Tabs & Content */}
      <div ref={scrollRef} onScroll={handleScroll} className="flex-1 w-full overflow-y-auto no-scrollbar">
         {/* Expanded Details Section - Inside Scrollable Area */}
         {/* Customer Details & Risk Section */}
         {/* Customer Details & Risk Section */}
         <div className="bg-white border-b border-gray-200 pt-2 pb-6 transition-all duration-300">
             <div className="px-6 flex flex-col gap-8">
                 <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                     {/* Demographics Section (4 Cards) */}
                     <div className={cn("grid gap-4", isDetailsExpanded ? "xl:col-span-3 grid-cols-1 md:grid-cols-2" : "xl:col-span-4 grid-cols-2 md:grid-cols-4")}>
                         {/* Card 1: Personal */}
                         <div className={cn("transition-all duration-300", isDetailsExpanded ? "bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-4" : "p-2")}>
                             <h4 className={cn("text-xs font-bold text-gray-700 tracking-wider flex items-center gap-1.5", isDetailsExpanded && "mb-2 pb-2 border-b border-gray-100")}>
                                 <User className="size-3.5 text-[#2A53A0]" /> Personal Details
                             </h4>
                             {isDetailsExpanded && (
                                 <div className="space-y-3 animate-in slide-in-from-top-1 fade-in duration-300">
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Alias Name :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.previousNames || 'N/A'}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Date of Birth :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.dob}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Place of Birth :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.placeOfBirth}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Mobile :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.phone}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Email :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.email}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Gender :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.gender}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Citizenships :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.multipleCitizenships?.join(", ") || "None"}</span>
                                     </div>
                                 </div>
                             )}
                         </div>

                         {/* Card 2: Employment */}
                         <div className={cn("transition-all duration-300", isDetailsExpanded ? "bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-4" : "p-2")}>
                             <h4 className={cn("text-xs font-bold text-gray-700 tracking-wider flex items-center gap-1.5", isDetailsExpanded && "mb-2 pb-2 border-b border-gray-100")}>
                                 <Briefcase className="size-3.5 text-[#2A53A0]" /> Employment & Segment
                             </h4>
                             {isDetailsExpanded && (
                                 <div className="space-y-3 animate-in slide-in-from-top-1 fade-in duration-300">
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Occupation :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.occupation}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Employer :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.employer}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Business Segment :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.businessSegment || "N/A"}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Customer Tags :</span>
                                         <div className="flex flex-wrap gap-1 justify-end">
                                            {selectedCustomer.customerSegment?.map((seg: string) => (
                                               <Badge key={seg} variant="secondary" className="text-[10px] h-5 px-1.5 bg-gray-100 text-gray-600 border border-gray-200 font-medium">{seg}</Badge>
                                            ))}
                                         </div>
                                     </div>
                                 </div>
                             )}
                         </div>

                         {/* Card 3: Onboarding */}
                         <div className={cn("transition-all duration-300", isDetailsExpanded ? "bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-4" : "p-2")}>
                             <h4 className={cn("text-xs font-bold text-gray-700 tracking-wider flex items-center gap-1.5", isDetailsExpanded && "mb-2 pb-2 border-b border-gray-100")}>
                                 <FileCheck className="size-3.5 text-[#2A53A0]" /> Onboarding & KYC
                             </h4>
                             {isDetailsExpanded && (
                                 <div className="space-y-3 animate-in slide-in-from-top-1 fade-in duration-300">
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Onboarding Date :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.onboardingDate}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Onboarding Channel :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">Branch</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">FATCA Status :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.fatcaStatus}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">LEA Status :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.leaStatus}</span>
                                     </div>
                                     <div className="flex items-baseline justify-between gap-4">
                                         <span className="text-sm text-gray-500 font-normal whitespace-nowrap">Resident Status :</span>
                                         <span className="text-sm text-gray-900 font-normal text-right truncate">{selectedCustomer.residentStatus}</span>
                                     </div>
                                 </div>
                             )}
                         </div>

                         {/* Card 4: Address */}
                         <div className={cn("transition-all duration-300", isDetailsExpanded ? "bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-4" : "p-2")}>
                             <h4 className={cn("text-xs font-bold text-gray-700 tracking-wider flex items-center gap-1.5", isDetailsExpanded && "mb-2 pb-2 border-b border-gray-100")}>
                                 <MapPin className="size-3.5 text-[#2A53A0]" /> Contact Addresses
                             </h4>
                             {isDetailsExpanded && (
                                 <div className="space-y-3 animate-in slide-in-from-top-1 fade-in duration-300">
                                     <div className="space-y-1">
                                         <span className="text-sm text-gray-500 font-normal block">Primary Address :</span>
                                         <p className="text-sm text-gray-900 font-normal leading-relaxed">{selectedCustomer.primaryAddress}</p>
                                     </div>
                                     {selectedCustomer.secondaryAddresses && selectedCustomer.secondaryAddresses.length > 0 && (
                                         <div className="space-y-1 pt-2 border-t border-gray-50">
                                             <span className="text-sm text-gray-500 font-normal block">Secondary Address :</span>
                                             <p className="text-sm text-gray-900 font-normal leading-relaxed">{selectedCustomer.secondaryAddresses.join(", ")}</p>
                                         </div>
                                     )}
                                 </div>
                             )}
                         </div>
                     </div>

                     {/* Risk Card */}
                     <div className={cn(isDetailsExpanded ? "xl:col-span-2" : "xl:col-span-1")}>
                         <div className={cn("w-full flex flex-col relative overflow-hidden transition-all duration-300", isDetailsExpanded ? "bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-full min-h-[400px]" : "h-auto p-2")}>
                             {isDetailsExpanded && (
                                 <div className="absolute top-0 right-0 p-4 opacity-5">
                                     <ShieldAlert className="size-32" />
                                 </div>
                             )}
                             
                             <div className={cn("flex items-center justify-between z-10", isDetailsExpanded && "mb-6")}>
                                 <div>
                                     <h4 className="text-base font-bold text-gray-900">Risk Profile</h4>
                                     {isDetailsExpanded && <p className="text-xs text-gray-500">Category-wise risk distribution</p>}
                                 </div>
                                 {isDetailsExpanded && (
                                     <Badge variant="outline" className={cn("px-2 py-1 gap-1", selectedCustomer.riskScore === 'High' ? "bg-red-50 text-red-700 border-red-200" : "bg-green-50 text-green-700 border-green-200")}>
                                         <Activity className="size-3" />
                                         {selectedCustomer.riskScore} Risk
                                     </Badge>
                                 )}
                             </div>

                             {isDetailsExpanded && (
                                 <div className="flex-1 w-full relative min-h-[300px] animate-in slide-in-from-top-1 fade-in duration-300">
                                     <ResponsiveContainer width="100%" height="100%">
                                         <RechartsPieChart><Pie onMouseEnter={(data: any) => setHoveredRiskScore(data.score)} onMouseLeave={() => setHoveredRiskScore(null)} cx="50%" cy="50%" innerRadius={80} outerRadius={120} paddingAngle={2} cornerRadius={4} label={({ name, x, y, cx }) => ( <text x={x} y={y} fill="#374151" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-[10px] font-medium">{name}</text> )} data={[
                                             { name: 'KYC', score: 90, value: 1 },
                                             { name: 'Regulatory', score: 70, value: 1 },
                                             { name: 'Transactions', score: 92, value: 1 },
                                             { name: 'Account', score: 75, value: 1 },
                                             { name: 'CDD/EDD', score: 80, value: 1 },
                                             { name: 'Risk Profile', score: 88, value: 1 },
                                             { name: 'Sanctions', score: 95, value: 1 },
                                             { name: 'Related Parties', score: 85, value: 1 },
                                         ]}>
                                                                                            {[
                                                    { score: 90 }, { score: 70 }, { score: 92 }, { score: 75 },
                                                    { score: 80 }, { score: 88 }, { score: 95 }, { score: 85 }
                                                ].map((entry, index) => (
                                                    <Cell 
                                                        key={`cell-${index}`} 
                                                        fill={entry.score >= 90 ? '#ef4444' : entry.score >= 80 ? '#f97316' : entry.score >= 70 ? '#eab308' : '#22c55e'} 
                                                        stroke="none"
                                                    />
                                                ))}
                                               
                                                  
                                                  
                                               
                                            
                                            
                                            
                                            
                                            
                                            <RechartsTooltip 
                                               cursor={false}
                                               wrapperStyle={{ zIndex: 1000 }}
                                               content={({ active, payload }) => {
                                                   if (active && payload && payload.length) {
                                                       const data = payload[0].payload; const label = data.name; const categoryMap: any = {
                                                            "KYC": ["kyc"],
                                                            "Regulatory": ["regulatory", "lea"],
                                                            "Transactions": ["transactions"],
                                                            "Account": ["account"],
                                                            "CDD/EDD": ["cddEdd"],
                                                            "Risk Profile": ["riskProfile"],
                                                            "Sanctions": ["sanctionMatch"],
                                                            "Related Parties": ["relatedParties"]
                                                       };
                                                       const displayMap: any = {
                                                            kyc: "KYC Risk",
                                                            relatedParties: "Related Parties",
                                                            sanctionMatch: "Sanction Matches",
                                                            riskProfile: "Risk Profile",
                                                            cddEdd: "CDD / EDD",
                                                            account: "Account Status",
                                                            transactions: "Transactions & Alerts",
                                                            lea: "LEA Requests",
                                                            regulatory: "Regulatory Reports"
                                                       };
                                                       
                                                       const relevantKeys = categoryMap[label];
                                                       
                                                       if (!relevantKeys) return null;

                                                       const scoreColor = data.score >= 90 ? "text-red-600" : data.score >= 80 ? "text-orange-500" : data.score >= 70 ? "text-yellow-600" : "text-green-600";
                                                       
                                                       return (
                                                            <div className="bg-white border border-gray-200 shadow-xl rounded-lg p-0 max-w-[320px] overflow-hidden">
                                                                <div className="flex items-center gap-2 p-3 border-b border-gray-100 bg-gray-50/50">
                                                                    <ShieldAlert className={cn("size-4", scoreColor)} />
                                                                    <span className="text-xs font-bold text-gray-900">{label} Details</span>
                                                                </div>
                                                                <ScrollArea className="h-full max-h-[300px]">
                                                                    <div className="p-3 space-y-4">
                                                                        {relevantKeys.map((key: string) => {
                                                                            const items = (selectedCustomer.riskFactors as any)[key];
                                                                            if (!items || items.length === 0) return null;
                                                                            return (
                                                                                <div key={key} className="space-y-1.5">
                                                                                    <div className="text-[10px] font-bold text-gray-500 tracking-wider">{displayMap[key]}</div>
                                                                                    <div className="space-y-1">
                                                                                        {items.map((item: any, idx: number) => (
                                                                                            <div key={idx} className="flex items-start gap-2">
                                                                                                <div className={cn("mt-1.5 size-1.5 rounded-full shrink-0", item.high ? "bg-red-600 shadow-sm shadow-red-200" : "bg-gray-200")} />
                                                                                                <div className="flex-1 min-w-0">
                                                                                                    <span className={cn("text-xs leading-tight block", item.high ? "font-bold text-gray-900" : "text-gray-500")}>
                                                                                                        {item.label}
                                                                                                        {item.value && <span className="ml-1 opacity-75 font-normal">({item.value})</span>}
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </ScrollArea>
                                                            </div>
                                                       );
                                                   }
                                                   return null;
                                               }}
                                            />
                                         </Pie>
                                      </RechartsPieChart>
                                     </ResponsiveContainer>
                                     
                                     {/* Center Score Ring */}
                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
                                         <div className="relative flex flex-col items-center justify-center size-28 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-red-100 z-10 px-2">
                                             <div className="text-center flex flex-col items-center gap-0.5">
                                                 <div className="text-[10px] font-bold text-gray-900 leading-tight w-full truncate" title={selectedCustomer.name}>
                                                     {selectedCustomer.name}
                                                 </div>
                                                 <div className="text-[9px] text-gray-500 font-mono leading-none">
                                                     {selectedCustomer.id}
                                                 </div>
                                                 <div className="flex items-center gap-1 mt-0.5">
                                                    <span className="text-[9px] font-semibold text-gray-400">Risk:</span>
                                                    <span className="text-xl font-black text-red-600 leading-none">{hoveredRiskScore !== null ? hoveredRiskScore : (selectedCustomer.riskLevel || 90)}</span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             )}
                         </div>
                     </div>
                 </div>
             </div>
         </div>

         {/* Show More / Show Less Button */}
         <div className="relative h-0 z-50 flex justify-center w-full mb-8">
            <Button 
               variant="outline" 
               size="sm" 
               onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} 
               className="bg-white text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-full h-7 px-4 shadow-sm border-gray-200 transition-all gap-1 -translate-y-1/2"
            >
               {isDetailsExpanded ? "Show Less" : "Show More"}
               {isDetailsExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
            </Button>
         </div>

         {/* Scroll To Top/Bottom Button */}
         <Button
            variant="secondary"
            size="icon"
            className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 text-gray-600 bg-white"
            onClick={showScrollToTop ? scrollToTop : scrollToBottom}
         >
            {showScrollToTop ? <ArrowUp className="size-5" /> : <ArrowDown className="size-5" />}
         </Button>

         <div className="w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-0 flex flex-col">
              <div className="bg-white border-b border-gray-200 px-4 sticky top-0 z-10 shadow-sm">
                 <ScrollArea className="w-full whitespace-nowrap">
                    <TabsList className="bg-transparent h-11 p-0 w-full justify-start gap-6">
                       {TABS.map((tab) => (
                          <TabsTrigger 
                             key={tab.id} 
                             value={tab.id}
                             className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#2A53A0] data-[state=active]:border-b-2 data-[state=active]:border-t-0 data-[state=active]:border-x-0 data-[state=active]:border-[#2A53A0] rounded-none h-11 px-2 text-sm font-medium text-gray-600 border-b-2 border-t-0 border-x-0 border-transparent transition-all hover:text-[#2A53A0] hover:bg-gray-50 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none flex items-center gap-1.5"
                          >
                             {tab.icon && <tab.icon className="size-3.5 opacity-70" />}
                             {tab.label}
                          </TabsTrigger>
                       ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" className="invisible" />
                 </ScrollArea>
              </div>

              <div className="px-4 pb-4 pt-2 bg-white">
                  {/* Overview Tab */}
                  <TabsContent value="overview" className="mt-0 animate-in fade-in-50 duration-300">
                     <div className="space-y-4">
                        {/* Top Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                           {/* Risk Card */}
                           <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("risk")}>
                              <CardContent className="p-4 flex items-center justify-between">
                                 <div>
                                    <p className="text-xs font-medium text-gray-500">Risk Profile</p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">{selectedCustomer.riskScore}</h3>
                                    <p className="text-xs text-red-600 font-medium mt-1">Score: {selectedCustomer.riskLevel}/100</p>
                                 </div>
                                 <div className="p-2 bg-red-100 rounded-full text-red-600">
                                    <ShieldAlert className="size-5" />
                                 </div>
                              </CardContent>
                           </Card>

                           {/* KYC Card */}
                           <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("kyc")}>
                              <CardContent className="p-4 flex items-center justify-between">
                                 <div>
                                    <p className="text-xs font-medium text-gray-500">KYC Status</p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">{selectedCustomer.kycStatus}</h3>
                                    <p className="text-xs text-gray-500 mt-1">Review: {selectedCustomer.kycProfile.nextReviewDate}</p>
                                 </div>
                                 <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                    <FileCheck className="size-5" />
                                 </div>
                              </CardContent>
                           </Card>

                           {/* Active Alerts */}
                           <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("alerts")}>
                              <CardContent className="p-4 flex items-center justify-between">
                                 <div>
                                    <p className="text-xs font-medium text-gray-500">Active Alerts</p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">{selectedCustomer.alertsProfile.active.filter((a: any) => a.status === 'Open').length}</h3>
                                    <p className="text-xs text-orange-600 font-medium mt-1">Action Required</p>
                                 </div>
                                 <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                                    <Bell className="size-5" />
                                 </div>
                              </CardContent>
                           </Card>

                           {/* Total Accounts */}
                           <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("accounts")}>
                              <CardContent className="p-4 flex items-center justify-between">
                                 <div>
                                    <p className="text-xs font-medium text-gray-500">Total Accounts</p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">{selectedCustomer.accountsProfile.summary.length}</h3>
                                    <p className="text-xs text-green-600 font-medium mt-1">Active</p>
                                 </div>
                                 <div className="p-2 bg-green-100 rounded-full text-green-600">
                                    <CreditCard className="size-5" />
                                 </div>
                              </CardContent>
                           </Card>
                        </div>



                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Relationships Snapshot */}
                             <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("relationships")}>
                                <CardHeader className={cardHeaderClass}>
                                   <CardTitle className={cardTitleClass}><Network className="size-3.5" /> Key Relationships</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                   <div className="divide-y divide-gray-100">
                                      {selectedCustomer.relationships.ubo.slice(0, 3).map((rel: any) => (
                                         <div key={rel.name} className="p-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                               <Avatar className="h-6 w-6"><AvatarFallback className="text-[9px] bg-blue-50 text-blue-700">{rel.name.split(' ').map((n:string)=>n[0]).join('')}</AvatarFallback></Avatar>
                                               <div className="flex flex-col">
                                                  <span className="text-xs font-bold text-gray-700">{rel.name}</span>
                                                  <span className="text-[10px] text-gray-500">{rel.designation || rel.relation}</span>
                                               </div>
                                            </div>
                                            <Badge variant="outline" className="text-[9px] h-5">{rel.ownership}% Own</Badge>
                                         </div>
                                      ))}
                                   </div>
                                </CardContent>
                             </Card>

                            {/* Screening Snapshot */}
                            <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("screening")}>
                                <CardHeader className={cardHeaderClass}>
                                   <CardTitle className={cardTitleClass}><Scan className="size-3.5" /> Screening Matches</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                   {selectedCustomer.screening.sanctions.length > 0 ? (
                                      <div className="divide-y divide-gray-100">
                                         {selectedCustomer.screening.sanctions.slice(0, 3).map((match: any, idx: number) => (
                                            <div key={idx} className="p-3 flex items-center justify-between">
                                               <div className="flex flex-col">
                                                  <span className="text-xs font-bold text-gray-700">{match.name}</span>
                                                  <span className="text-[10px] text-gray-500">{match.list}</span>
                                               </div>
                                               <Badge className="bg-red-50 text-red-700 border-red-100 text-[9px] h-5">{match.score}%</Badge>
                                            </div>
                                         ))}
                                      </div>
                                   ) : (
                                      <div className="p-6 text-center text-xs text-gray-500">
                                         No active screening matches found.
                                      </div>
                                   )}
                                </CardContent>
                             </Card>
                         </div>

                         {/* Transaction & Alerts Summary Section */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                             {/* 1. Transaction Metrics & Top Activity (Combined) */}
                             <Card className={cn(cardClass)}>
                                 <div className="flex-none">
                                    <CardHeader className={cardHeaderClass}>
                                        <CardTitle className={cardTitleClass}><Activity className="size-3.5" /> Transaction Metrics</CardTitle>
                                        <Button variant="link" className="h-auto p-0 text-xs text-blue-600 flex items-center gap-1" onClick={() => setActiveTab("transactions")}>
                                            <BarChart3 className="size-3" /> View Graph
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="p-4 space-y-5">
                                        <div className="grid grid-cols-3 gap-2 text-center">
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 font-bold">Avg Daily</div>
                                                <div className="font-bold text-sm text-gray-900 mt-1">{selectedCustomer.transactionsProfile.summary.daily.volume} / {selectedCustomer.transactionsProfile.summary.daily.value}</div>
                                            </div>
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 font-bold">Avg Monthly</div>
                                                <div className="font-bold text-sm text-gray-900 mt-1">{selectedCustomer.transactionsProfile.summary.monthly.volume} / {selectedCustomer.transactionsProfile.summary.monthly.value}</div>
                                            </div>
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 font-bold">Total YTD</div>
                                                <div className="font-bold text-sm text-gray-900 mt-1">{selectedCustomer.transactionsProfile.summary.ytd.volume} / {selectedCustomer.transactionsProfile.summary.ytd.value}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-xs text-gray-600">
                                                    <span>Cash vs Non-Cash</span>
                                                    <span className="font-medium text-gray-900">{selectedCustomer.transactionsProfile.summary.breakdown.cash}% / {selectedCustomer.transactionsProfile.summary.breakdown.nonCash}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                                    <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.cash}%` }} className="h-full bg-blue-500"></div>
                                                    <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.nonCash}%` }} className="h-full bg-indigo-500"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-xs text-gray-600">
                                                    <span>Domestic vs Cross Border</span>
                                                    <span className="font-medium text-gray-900">{selectedCustomer.transactionsProfile.summary.breakdown.domestic}% / {selectedCustomer.transactionsProfile.summary.breakdown.crossBorder}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                                    <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.domestic}%` }} className="h-full bg-emerald-500"></div>
                                                    <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.crossBorder}%` }} className="h-full bg-amber-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                 </div>
                                 
                                 <Tabs defaultValue="parties" className="flex-1 flex flex-col border-t border-gray-100">
                                     <CardHeader className={cn(cardHeaderClass, "pb-0 border-b-0")}>
                                         <CardTitle className={cardTitleClass}><TrendingUp className="size-3.5" /> Top Activity</CardTitle>
                                         <TabsList className="h-6 p-0 bg-transparent gap-2">
                                             <TabsTrigger value="parties" className="h-6 px-2 text-[10px] data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border border-transparent data-[state=active]:border-blue-200">Parties</TabsTrigger>
                                             <TabsTrigger value="regions" className="h-6 px-2 text-[10px] data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border border-transparent data-[state=active]:border-blue-200">Regions</TabsTrigger>
                                             <TabsTrigger value="alerts" className="h-6 px-2 text-[10px] data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border border-transparent data-[state=active]:border-blue-200">Alerts</TabsTrigger>
                                         </TabsList>
                                     </CardHeader>
                                     <div className="px-0 flex-1 overflow-hidden">
                                        <div className="border-b border-gray-100 mx-4 mb-2"></div>
                                        <TabsContent value="parties" className="mt-0 p-4 pt-0 space-y-2">
                                            {selectedCustomer.transactionsProfile.topCounterparties.map((item, i) => (
                                                <div key={i} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600 truncate max-w-[150px]" title={item.name}>{item.name}</span>
                                                    <span className="font-medium text-gray-900 bg-gray-50 px-1.5 py-0.5 rounded text-xs">{item.count} txns</span>
                                                </div>
                                            ))}
                                        </TabsContent>
                                        <TabsContent value="regions" className="mt-0 p-4 pt-0 space-y-2">
                                            {selectedCustomer.transactionsProfile.topCountries.map((item, i) => (
                                                <div key={i} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600 flex items-center gap-2">
                                                        <span className="text-xs bg-gray-100 w-5 h-3.5 flex items-center justify-center rounded-[1px]">{item.code}</span>
                                                        {item.name}
                                                    </span>
                                                    <span className="font-medium text-gray-900 bg-gray-50 px-1.5 py-0.5 rounded text-xs">{item.count} txns</span>
                                                </div>
                                            ))}
                                        </TabsContent>
                                        <TabsContent value="alerts" className="mt-0 p-4 pt-0 space-y-2">
                                            {selectedCustomer.transactionsProfile.topAlerts.map((item, i) => (
                                                <div key={i} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600 truncate max-w-[150px]" title={item.name}>{item.name}</span>
                                                    <span className="font-medium text-gray-900 bg-gray-50 px-1.5 py-0.5 rounded text-xs">{item.count} hits</span>
                                                </div>
                                            ))}
                                        </TabsContent>
                                     </div>
                                 </Tabs>
                             </Card>

                             {/* 3. Patterns & Risks */}
                             <Card className={cn(cardClass, "md:col-span-2")}>
                                <CardHeader className={cardHeaderClass}>
                                    <CardTitle className={cardTitleClass}><AlertTriangle className="size-3.5" /> Unusual Patterns</CardTitle>
                                    <Button variant="link" className="h-auto p-0 text-xs text-blue-600 flex items-center gap-1" onClick={() => setActiveTab("alerts")}>
                                        <Bell className="size-3" /> View Alerts
                                    </Button>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-gray-50">
                                        {selectedCustomer.transactionsProfile.unusualPatterns.map((item, i) => (
                                            <div key={i} className="p-2 px-3 flex items-start gap-2 hover:bg-gray-50 transition-colors">
                                                <div className={cn("mt-0.5 size-1.5 rounded-full shrink-0", item.triggered ? "bg-red-500" : "bg-green-500")}></div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs font-medium text-gray-700 leading-tight">{item.name}</div>
                                                    {item.triggered && (
                                                        <div className="mt-1 flex items-center justify-between">
                                                            <Badge variant="outline" className="text-[9px] h-4 px-1 bg-red-50 text-red-700 border-red-100">Triggered</Badge>
                                                            <Button variant="link" className="h-auto p-0 text-[10px] text-blue-600 flex items-center gap-0.5" onClick={() => setActiveTab("alerts")}>
                                                                View Alert <ExternalLink className="size-2" />
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        
                                        {/* Corridor Check */}
                                        <div className="p-3 bg-orange-50/50 mt-1">
                                            <div className="flex justify-between items-start">
                                                <div className="text-xs font-medium text-gray-900">High Risk Corridor?</div>
                                                <Badge variant={selectedCustomer.transactionsProfile.highRiskCorridors.detected ? "destructive" : "outline"} className="h-4 text-[10px] px-1.5">
                                                    {selectedCustomer.transactionsProfile.highRiskCorridors.detected ? "YES" : "NO"}
                                                </Badge>
                                            </div>
                                            {selectedCustomer.transactionsProfile.highRiskCorridors.detected && (
                                               <div className="mt-1">
                                                   <p className="text-[10px] text-gray-600 mb-1">{selectedCustomer.transactionsProfile.highRiskCorridors.details}</p>
                                                   <div className="flex gap-1 flex-wrap">
                                                       {selectedCustomer.transactionsProfile.highRiskCorridors.corridors.map(c => (
                                                           <Badge key={c} variant="outline" className="bg-white text-[9px] h-3.5 px-1 border-orange-200 text-orange-800">{c}</Badge>
                                                       ))}
                                                   </div>
                                               </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                             </Card>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {/* Recent Activity / Audit Log Snapshot */}
                           <Card className={cn(cardClass, "md:col-span-2 cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("audit")}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><History className="size-3.5" /> Recent Activity</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                 <div className="divide-y divide-gray-100">
                                    {selectedCustomer.audit.slice(0, 3).map((log: any) => (
                                       <div key={log.id} className="p-3 flex items-center justify-between hover:bg-gray-50">
                                          <div className="flex items-center gap-3">
                                             <div className="p-1.5 rounded-full bg-gray-100 text-gray-600">
                                                {log.category === 'Risk' ? <ShieldAlert className="size-3.5" /> : 
                                                 log.category === 'KYC' ? <FileCheck className="size-3.5" /> :
                                                 log.category === 'Screening' ? <Scan className="size-3.5" /> :
                                                 <Activity className="size-3.5" />}
                                             </div>
                                             <div>
                                                <p className="text-sm font-normal text-gray-700">{log.action}</p>
                                                <p className="text-xs text-gray-500">{log.details}</p>
                                             </div>
                                          </div>
                                          <div className="text-right">
                                             <p className="text-xs font-normal text-gray-900">{log.date.split(' ').slice(0,3).join(' ')}</p>
                                             <p className="text-[10px] text-gray-400">{log.user}</p>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </CardContent>
                           </Card>

                           {/* Reg Reports Status */}
                           <Card className={cn(cardClass, "cursor-pointer hover:shadow-md transition-all")} onClick={() => setActiveTab("reports")}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><Scale className="size-3.5" /> Regulatory Status</CardTitle>
                              </CardHeader>
                              <CardContent className="p-4 space-y-4">
                                 <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">STR Filed</span>
                                    {selectedCustomer.regReportsProfile.strFiled.isFiled ? 
                                       <Badge variant="destructive" className="h-5 text-[10px]">Yes</Badge> : 
                                       <Badge variant="outline" className="h-5 text-[10px]">No</Badge>}
                                 </div>
                                 <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">CTR Filed</span>
                                    {selectedCustomer.regReportsProfile.ctrFiled.isFiled ? 
                                       <Badge className="bg-orange-100 text-orange-700 h-5 text-[10px] hover:bg-orange-200">Yes</Badge> : 
                                       <Badge variant="outline" className="h-5 text-[10px]">No</Badge>}
                                 </div>
                                 <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Acc Frozen</span>
                                    {selectedCustomer.regReportsProfile.accountFrozen.isFrozen ? 
                                       <Badge variant="destructive" className="h-5 text-[10px]">Yes</Badge> : 
                                       <Badge variant="outline" className="h-5 text-[10px] text-green-600 border-green-200 bg-green-50">No</Badge>}
                                 </div>
                              </CardContent>
                           </Card>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="relationships" className="mt-0 animate-in fade-in-50 duration-300">
                     <div className="space-y-3">
                        {/* 1. UBO Details */}
                        <Card className={cardClass}>
                           <CardHeader className={cardHeaderClass}>
                              <CardTitle className={cardTitleClass}><Network className="size-3.5" /> UBO Details</CardTitle>
                              <Button 
                                 variant={showLinkAnalysis ? "secondary" : "outline"}
                                 size="sm" 
                                 className="h-6 text-[10px] gap-1"
                                 onClick={() => setShowLinkAnalysis(!showLinkAnalysis)}
                              >
                                 <Activity className="size-3" /> {showLinkAnalysis ? "Hide Analysis" : "Graphical Link Analysis"}
                              </Button>
                           </CardHeader>
                           <CardContent className="p-3">
                              <div className="flex flex-col lg:flex-row gap-3">
                                 {/* UBO Table */}
                                 <div className={cn("transition-all duration-300", showLinkAnalysis ? "w-full lg:w-1/2" : "w-full")}>
                                    <Table>
                                       <TableHeader>
                                          <TableRow className="bg-gray-50/50">
                                             <TableHead className="h-9 text-xs font-bold"><SortableHeader column="name" label="Name" sortConfig={uboSortConfig} onSort={sortUbo} /></TableHead>
                                             <TableHead className="h-9 text-xs font-bold"><SortableHeader column="designation" label="Designation" sortConfig={uboSortConfig} onSort={sortUbo} /></TableHead>
                                             <TableHead className="h-9 text-xs font-bold"><SortableHeader column="nationality" label="Nationality" sortConfig={uboSortConfig} onSort={sortUbo} /></TableHead>
                                             <TableHead className="h-9 text-xs font-bold"><SortableHeader column="residence" label="Residence" sortConfig={uboSortConfig} onSort={sortUbo} /></TableHead>
                                             <TableHead className="h-9 text-xs font-bold text-right"><SortableHeader column="ownership" label="% Ownership" sortConfig={uboSortConfig} onSort={sortUbo} className="justify-end" /></TableHead>
                                             <TableHead className="h-9 text-xs font-bold text-right"><SortableHeader column="votingRights" label="% Voting" sortConfig={uboSortConfig} onSort={sortUbo} className="justify-end" /></TableHead>
                                          </TableRow>
                                       </TableHeader>
                                       <TableBody>
                                          {sortedUbo.map((ubo, i) => (
                                             <TableRow key={i}>
                                                <TableCell className="font-normal text-sm text-gray-900">{ubo.name}</TableCell>
                                                <TableCell className="text-sm text-gray-600">{ubo.designation}</TableCell>
                                                <TableCell className="text-sm text-gray-600">{ubo.nationality}</TableCell>
                                                <TableCell className="text-sm text-gray-600">{ubo.residence}</TableCell>
                                                <TableCell className="text-sm font-normal text-gray-900 text-right">
                                                   <span className={cn(ubo.ownership > 25 ? "text-red-600" : "text-gray-900")}>{ubo.ownership}%</span>
                                                </TableCell>
                                                <TableCell className="text-sm text-gray-600 text-right">{ubo.votingRights}%</TableCell>
                                             </TableRow>
                                          ))}
                                       </TableBody>
                                    </Table>
                                 </div>

                                 {/* Link Analysis Visualization - Only shows when toggled */}
                                 {showLinkAnalysis && (
                                    <div className="w-full lg:w-1/2 animate-in slide-in-from-right-4 fade-in duration-300 border-l border-gray-100 pl-3">
                                       <div className="w-full h-[250px] bg-gray-50 rounded-lg border border-gray-100 relative flex items-center justify-center overflow-hidden">
                                          <svg className="w-full h-full" viewBox="0 0 600 250">
                                             {/* Lines */}
                                             <line x1="300" y1="125" x2="150" y2="80" stroke="#CBD5E1" strokeWidth="1" />
                                             <line x1="300" y1="125" x2="150" y2="170" stroke="#CBD5E1" strokeWidth="1" />
                                             <line x1="300" y1="125" x2="450" y2="80" stroke="#CBD5E1" strokeWidth="1" />
                                             <line x1="300" y1="125" x2="450" y2="170" stroke="#CBD5E1" strokeWidth="1" />
                                             
                                             {/* Central Node (Customer) */}
                                             <circle cx="300" cy="125" r="25" fill="#2A53A0" opacity="0.1" />
                                             <circle cx="300" cy="125" r="15" fill="#2A53A0" />
                                             <text x="300" y="125" dy=".3em" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Self</text>
                                             
                                             {/* UBO Nodes */}
                                             <g>
                                                <circle cx="150" cy="80" r="18" fill="white" stroke="#2A53A0" strokeWidth="2" />
                                                <text x="150" y="80" dy=".3em" textAnchor="middle" fill="#2A53A0" fontSize="9" fontWeight="medium">Rajesh</text>
                                                <text x="150" y="105" textAnchor="middle" fill="#64748B" fontSize="8">Director</text>
                                             </g>
                                             
                                             <g>
                                                <circle cx="150" cy="170" r="18" fill="white" stroke="#2A53A0" strokeWidth="2" />
                                                <text x="150" y="170" dy=".3em" textAnchor="middle" fill="#2A53A0" fontSize="9" fontWeight="medium">Suman</text>
                                                <text x="150" y="195" textAnchor="middle" fill="#64748B" fontSize="8">Shareholder</text>
                                             </g>
                                             
                                             {/* Related Nodes */}
                                             <g>
                                                <circle cx="450" cy="80" r="18" fill="white" stroke="#10B981" strokeWidth="2" />
                                                <text x="450" y="80" dy=".3em" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="medium">Sub 1</text>
                                                <text x="450" y="105" textAnchor="middle" fill="#64748B" fontSize="8">Subsidiary</text>
                                             </g>
                                             
                                             <g>
                                                <circle cx="450" cy="170" r="18" fill="white" stroke="#EF4444" strokeWidth="2" />
                                                <text x="450" y="170" dy=".3em" textAnchor="middle" fill="#EF4444" fontSize="9" fontWeight="medium">Partner</text>
                                                <text x="450" y="195" textAnchor="middle" fill="#64748B" fontSize="8">Partner</text>
                                             </g>
                                          </svg>
                                          <div className="absolute bottom-2 right-2 flex items-center gap-3 bg-white/90 p-2 rounded-md border border-gray-100 shadow-sm backdrop-blur-sm">
                                             <div className="flex items-center gap-1.5"><div className="size-2.5 rounded-full bg-[#2A53A0]"></div><span className="text-[10px] font-medium text-gray-600">Entity</span></div>
                                             <div className="flex items-center gap-1.5"><div className="size-2.5 rounded-full border-2 border-[#2A53A0]"></div><span className="text-[10px] font-medium text-gray-600">UBO</span></div>
                                             <div className="flex items-center gap-1.5"><div className="size-2.5 rounded-full border-2 border-[#10B981]"></div><span className="text-[10px] font-medium text-gray-600">Related</span></div>
                                             <div className="flex items-center gap-1.5"><div className="size-2.5 rounded-full border-2 border-[#EF4444]"></div><span className="text-[10px] font-medium text-gray-600">Risk</span></div>
                                          </div>
                                       </div>
                                    </div>
                                 )}
                              </div>
                           </CardContent>
                        </Card>

                        {/* 2. Family Members */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><User className="size-3.5" /> Family Members or Linked Customers</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                 <Table>
                                    <TableHeader>
                                       <TableRow className="bg-gray-50/50">
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="name" label="Name" sortConfig={familySortConfig} onSort={sortFamily} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="relation" label="Relationship" sortConfig={familySortConfig} onSort={sortFamily} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="dob" label="DOB" sortConfig={familySortConfig} onSort={sortFamily} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="hasAccount" label="Account Status" sortConfig={familySortConfig} onSort={sortFamily} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="kycStatus" label="KYC Status" sortConfig={familySortConfig} onSort={sortFamily} /></TableHead>
                                       </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                       {sortedFamily.map((fam, i) => (
                                          <TableRow key={i}>
                                             <TableCell className="font-medium text-xs text-[#2A53A0]">{fam.name}</TableCell>
                                             <TableCell className="text-xs text-gray-600">{fam.relation}</TableCell>
                                             <TableCell className="text-xs text-gray-600">{fam.dob}</TableCell>
                                             <TableCell>
                                                {fam.hasAccount ? <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">Has Account</Badge> : <span className="text-[10px] text-gray-400">No Account</span>}
                                             </TableCell>
                                             <TableCell><Badge className="bg-green-100 text-green-700 text-[10px]">{fam.kycStatus}</Badge></TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </CardContent>
                           </Card>

                           {/* 3. Associates / Related Parties */}
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><Share2 className="size-3.5" /> Associates / Related Parties</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                 <Table>
                                    <TableHeader>
                                       <TableRow className="bg-gray-50/50">
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="name" label="Name" sortConfig={associatesSortConfig} onSort={sortAssociates} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="relation" label="Relation" sortConfig={associatesSortConfig} onSort={sortAssociates} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="hasAccount" label="Account Status" sortConfig={associatesSortConfig} onSort={sortAssociates} /></TableHead>
                                          <TableHead className="h-8 text-[10px] font-bold"><SortableHeader column="risk" label="Risk Level" sortConfig={associatesSortConfig} onSort={sortAssociates} /></TableHead>
                                       </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                       {sortedAssociates.map((assoc, i) => (
                                          <TableRow key={i}>
                                             <TableCell className="font-medium text-xs text-gray-900">{assoc.name}</TableCell>
                                             <TableCell className="text-xs text-gray-600">{assoc.relation}</TableCell>
                                             <TableCell>
                                                {assoc.hasAccount ? <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">Has Account</Badge> : <span className="text-[10px] text-gray-400">No Account</span>}
                                             </TableCell>
                                             <TableCell><Badge className={cn("text-[10px]", assoc.risk === 'High' ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700")}>{assoc.risk}</Badge></TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </CardContent>
                           </Card>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* 4. Joint Account Holders */}
                            <Card className={cardClass}>
                               <CardHeader className={cardHeaderClass}>
                                  <CardTitle className={cardTitleClass}><CreditCard className="size-3.5" /> Joint Account Holders</CardTitle>
                               </CardHeader>
                               <CardContent className="p-0">
                                  <Table>
                                     <TableHeader>
                                        <TableRow className="bg-gray-50/50">
                                           <TableHead className="h-9 text-xs font-bold"><SortableHeader column="name" label="Name" sortConfig={jointHoldersSortConfig} onSort={sortJointHolders} /></TableHead>
                                           <TableHead className="h-9 text-xs font-bold"><SortableHeader column="account" label="Account" sortConfig={jointHoldersSortConfig} onSort={sortJointHolders} /></TableHead>
                                           <TableHead className="h-9 text-xs font-bold"><SortableHeader column="relation" label="Relation" sortConfig={jointHoldersSortConfig} onSort={sortJointHolders} /></TableHead>
                                        </TableRow>
                                     </TableHeader>
                                     <TableBody>
                                        {sortedJointHolders.map((jh, i) => (
                                           <TableRow key={i}>
                                              <TableCell className="font-normal text-sm text-[#2A53A0]">{jh.name}</TableCell>
                                              <TableCell className="text-sm font-mono text-gray-600">{jh.account}</TableCell>
                                              <TableCell className="text-sm text-gray-600">{jh.relation}</TableCell>
                                           </TableRow>
                                        ))}
                                     </TableBody>
                                  </Table>
                               </CardContent>
                            </Card>

                            {/* 5. Power of Attorney */}
                            <Card className={cardClass}>
                               <CardHeader className={cardHeaderClass}>
                                  <CardTitle className={cardTitleClass}><ScrollText className="size-3.5" /> Power of Attorney</CardTitle>
                               </CardHeader>
                               <CardContent className="p-0">
                                  <Table>
                                     <TableHeader>
                                        <TableRow className="bg-gray-50/50">
                                           <TableHead className="h-9 text-xs font-bold"><SortableHeader column="name" label="Name" sortConfig={poaSortConfig} onSort={sortPoa} /></TableHead>
                                           <TableHead className="h-9 text-xs font-bold"><SortableHeader column="authorizedPerson" label="Auth Person" sortConfig={poaSortConfig} onSort={sortPoa} /></TableHead>
                                           <TableHead className="h-9 text-xs font-bold"><SortableHeader column="expiry" label="Expiry" sortConfig={poaSortConfig} onSort={sortPoa} /></TableHead>
                                        </TableRow>
                                     </TableHeader>
                                     <TableBody>
                                        {sortedPoa.map((p, i) => (
                                           <TableRow key={i}>
                                              <TableCell className="font-normal text-sm text-gray-900">{p.name}</TableCell>
                                              <TableCell className="text-sm text-gray-600">{p.authorizedPerson}</TableCell>
                                              <TableCell className="text-sm text-gray-600">{p.expiry}</TableCell>
                                           </TableRow>
                                        ))}
                                     </TableBody>
                                  </Table>
                               </CardContent>
                            </Card>
                        </div>

                        {/* 6. PEP Match */}
                        <Card className={cn(cardClass, "border-l-4 border-l-red-500")}>
                           <CardHeader className={cardHeaderClass}>
                              <CardTitle className={cardTitleClass}><AlertTriangle className="size-3.5 text-red-600" /> PEP Match for Related Parties</CardTitle>
                           </CardHeader>
                           <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                 <div className="mt-1">
                                    <Badge className="bg-red-100 text-red-700">PEP MATCH</Badge>
                                 </div>
                                 <div>
                                    <p className="text-sm font-medium text-gray-900">Potential Match Detected</p>
                                    <p className="text-xs text-gray-600 mt-1">{selectedCustomer.relationships.pep.details}</p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </div>
                  </TabsContent>

                  {/* Alerts Tab - Based on Image */}
                  <TabsContent value="alerts" className="mt-0 animate-in fade-in-50 duration-300">
                     <div className="space-y-4">
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                           {/* 1. Active Alerts Stats */}
                           <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                              <CardContent className="p-4 flex flex-col gap-1">
                                 <span className="text-[10px] font-bold text-gray-500">Active Alerts</span>
                                 <div className="flex items-end justify-between">
                                    <div className="flex items-baseline gap-1.5">
                                       <span className="text-2xl font-bold text-gray-900">{selectedCustomer.alertsProfile.stats.activeCount}</span>
                                       <span className="text-xs text-gray-500 font-medium">/ {selectedCustomer.alertsProfile.stats.closedCount} Closed</span>
                                    </div>
                                    <Badge className="bg-red-100 text-red-700 h-5 text-[10px] px-1.5">High Priority</Badge>
                                 </div>
                              </CardContent>
                           </Card>

                           {/* 2. False Positive Rate */}
                           <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                              <CardContent className="p-4 flex flex-col gap-1">
                                 <span className="text-[10px] font-bold text-gray-500">False Positive Rate</span>
                                 <div className="flex items-end justify-between">
                                    <span className="text-2xl font-bold text-gray-900">{selectedCustomer.alertsProfile.stats.falsePositiveRate}%</span>
                                    <span className="text-[10px] text-green-600 font-medium">Alert Quality</span>
                                 </div>
                                 <div className="w-full bg-gray-100 h-1 mt-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full" style={{ width: `${selectedCustomer.alertsProfile.stats.falsePositiveRate}%` }}></div>
                                 </div>
                              </CardContent>
                           </Card>

                           {/* 3. Total Active Volume */}
                           <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                              <CardContent className="p-4 flex flex-col gap-1">
                                 <span className="text-[10px] font-bold text-gray-500">Active Alert Volume</span>
                                 <div className="flex items-end justify-between">
                                    <span className="text-2xl font-bold text-gray-900">{selectedCustomer.alertsProfile.stats.totalActiveVolume}</span>
                                    <span className="text-[10px] text-gray-400">{selectedCustomer.alertsProfile.stats.alertVolumePercentage}% of Total</span>
                                 </div>
                              </CardContent>
                           </Card>

                           {/* 4. RFI Stats */}
                           <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                              <CardContent className="p-4 flex flex-col gap-1">
                                 <span className="text-[10px] font-bold text-gray-500">Internal Requests (RFI)</span>
                                 <div className="flex items-end justify-between">
                                    <span className="text-2xl font-bold text-gray-900">{selectedCustomer.alertsProfile.rfi.count}</span>
                                    <span className="text-[10px] text-orange-600 font-medium">{selectedCustomer.alertsProfile.rfi.status}</span>
                                 </div>
                              </CardContent>
                           </Card>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                           {/* Left Column: Active Alerts & History */}
                           <div className="lg:col-span-2 space-y-4">
                              {/* Active Alerts Table */}
                              <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                                 <CardHeader className={cardHeaderClass}>
                                    <div className="flex justify-between items-center w-full">
                                       <CardTitle className={cardTitleClass}><Bell className="size-3.5" /> Recent Active Alerts</CardTitle>
                                       <Button variant="ghost" size="sm" className="h-6 text-[10px] text-blue-600 hover:text-blue-700 hover:bg-blue-50">View All Transactions <ArrowRight className="ml-1 size-3" /></Button>
                                    </div>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                    <Table>
                                       <TableHeader>
                                          <TableRow className="bg-gray-50/50">
                                             <TableHead className="h-9 text-xs font-bold">Alert ID</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Date</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Rule</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Amount</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Severity</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Status</TableHead>
                                          </TableRow>
                                       </TableHeader>
                                       <TableBody>
                                          {selectedCustomer.alertsProfile.active.map((alert, i) => (
                                             <TableRow key={i} className="hover:bg-gray-50 border-gray-50">
                                                <TableCell className="py-2 text-sm font-mono text-blue-600 font-normal">{alert.id}</TableCell>
                                                <TableCell className="py-2 text-sm text-gray-900">{alert.date}</TableCell>
                                                <TableCell className="py-2">
                                                   <div className="flex flex-col">
                                                      <span className="text-sm font-normal text-gray-900">{alert.rule}</span>
                                                      <span className="text-xs text-gray-500">{alert.details}</span>
                                                   </div>
                                                </TableCell>
                                                <TableCell className="py-2 text-sm font-mono text-gray-900">{alert.amount}</TableCell>
                                                <TableCell className="py-2"><Badge variant="outline" className={cn("text-xs h-5 px-1.5", alert.severity === 'High' ? "bg-red-50 text-red-700 border-red-200" : "bg-orange-50 text-orange-700 border-orange-200")}>{alert.severity}</Badge></TableCell>
                                                <TableCell className="py-2"><Badge className={cn("text-xs h-5 px-1.5", alert.status === 'Open' ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700")}>{alert.status}</Badge></TableCell>
                                             </TableRow>
                                          ))}
                                       </TableBody>
                                    </Table>
                                 </CardContent>
                              </Card>

                              {/* Alert History Table */}
                              <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                                 <CardHeader className={cardHeaderClass}>
                                    <div className="flex justify-between items-center w-full">
                                        <CardTitle className={cardTitleClass}><ScrollText className="size-3.5" /> Alert History & Resolution</CardTitle>
                                        <Button variant="outline" size="sm" className="h-8 gap-2 rounded-md border-gray-300 text-gray-700 bg-white shadow-sm px-3 text-xs">
                                           <Download className="size-3.5" /> Export
                                        </Button>
                                    </div>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                    <ScrollArea className="h-[300px]">
                                       <Table>
                                          <TableHeader>
                                             <TableRow className="bg-gray-50/50">
                                                <TableHead className="h-9 text-xs font-bold">ID</TableHead>
                                                <TableHead className="h-9 text-xs font-bold">Rule</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Disposition</TableHead>
                                             <TableHead className="h-9 text-xs font-bold">Rationale</TableHead>
                                             <TableHead className="h-9 text-xs font-bold text-right">Status</TableHead>
                                          </TableRow>
                                       </TableHeader>
                                       <TableBody>
                                          {selectedCustomer.alertsProfile.history.map((h, i) => (
                                             <TableRow key={i} className="hover:bg-gray-50 border-gray-50">
                                                <TableCell className="py-2 text-sm font-mono text-gray-500">{h.id}</TableCell>
                                                <TableCell className="py-2 text-sm font-normal text-gray-900">{h.rule}</TableCell>
                                                <TableCell className="py-2">
                                                   <Badge variant="outline" className={cn("text-xs h-5 px-1.5", h.disposition === 'False Positive' ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200")}>{h.disposition}</Badge>
                                                </TableCell>
                                                <TableCell className="py-2 text-sm text-gray-600">{h.rationale}</TableCell>
                                                <TableCell className="py-2 text-right"><span className="text-sm font-normal text-gray-900">{h.status}</span></TableCell>
                                             </TableRow>
                                          ))}
                                       </TableBody>
                                    </Table>
                                   </ScrollArea>
                                 </CardContent>
                              </Card>
                           </div>

                           {/* Right Column: Funding Source & RFI Details */}
                           <div className="space-y-4">
                              {/* Funding Source Breakdown */}
                              <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                                 <CardHeader className={cardHeaderClass}>
                                    <div className="flex justify-between items-center w-full">
                                       <CardTitle className={cardTitleClass}><PieChart className="size-3.5" /> Funding Sources</CardTitle>
                                       <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-500 hover:text-gray-900"><ArrowRightLeft className="size-3 mr-1" /> View Flow</Button>
                                    </div>
                                 </CardHeader>
                                 <CardContent className="p-4 space-y-4">
                                    {selectedCustomer.alertsProfile.fundingSources.map((source, i) => (
                                       <div key={i} className="space-y-1.5">
                                          <div className="flex justify-between items-center text-sm">
                                             <span className="font-normal text-gray-700">{source.type}</span>
                                             <span className={cn("text-xs font-normal", source.trend === 'Increasing' ? "text-red-600" : source.trend === 'Decreasing' ? "text-green-600" : "text-gray-500")}>{source.trend}</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                             <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${source.percent}%` }}></div>
                                             </div>
                                             <span className="text-sm font-normal text-gray-900 w-8 text-right">{source.percent}%</span>
                                          </div>
                                       </div>
                                    ))}
                                    <Separator className="my-2" />
                                    <div className="bg-gray-50 p-2 rounded border border-dashed border-gray-200 text-center">
                                       <p className="text-xs text-gray-500">Flow diagram available in full report</p>
                                    </div>
                                 </CardContent>
                              </Card>

                              {/* RFI Details List */}
                              <Card className="rounded-lg border border-gray-200 shadow-sm bg-white">
                                 <CardHeader className={cardHeaderClass}>
                                    <CardTitle className={cardTitleClass}><Mail className="size-3.5" /> RFI Correspondence</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                    <ScrollArea className="h-[200px]">
                                       <div className="p-1">
                                          {selectedCustomer.alertsProfile.rfi.items.map((item, i) => (
                                             <div key={i} className="p-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                                <div className="flex justify-between items-start mb-1">
                                                   <span className="text-sm font-normal text-gray-900">{item.type}</span>
                                                   <span className="text-xs text-gray-500">{item.date}</span>
                                                </div>
                                                <div className="flex justify-between items-center mt-2">
                                                   <Badge variant="secondary" className={cn("text-xs h-5 px-1.5", item.status === 'Pending' ? "bg-orange-50 text-orange-700" : "bg-green-50 text-green-700")}>
                                                      {item.status === 'Pending' ? <FileWarning className="size-2.5 mr-1" /> : <CheckCircle2 className="size-2.5 mr-1" />}
                                                      {item.status}
                                                   </Badge>
                                                   <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-blue-600 hover:text-blue-700">View Email</Button>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </ScrollArea>
                                 </CardContent>
                              </Card>
                           </div>
                        </div>
                     </div>
                  </TabsContent>

                  {/* Screening Tab Content */}
                  <TabsContent value="screening" className="mt-0 animate-in fade-in-50 duration-300">
                      <div className="space-y-3">
                         {/* Overall Status & Actions Header */}
                         <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-4">
                               <div className="flex flex-col">
                                  <span className="text-[10px] font-bold text-gray-500">Overall Status</span>
                                  <Badge className={cn("mt-1", selectedCustomer.screening.overallStatus === 'Flagged' ? "bg-red-100 text-red-700 hover:bg-red-100" : "bg-green-100 text-green-700")}>
                                     {selectedCustomer.screening.overallStatus}
                                  </Badge>
                               </div>
                               <div className="h-8 w-px bg-gray-200"></div>
                               <div className="flex flex-col">
                                  <span className="text-[10px] font-bold text-gray-500">Last Screening</span>
                                  <span className="text-xs font-bold text-gray-900">{selectedCustomer.screening.history[0].date}</span>
                               </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2 mr-4">
                                   <span className="text-[10px] font-medium text-gray-600">Auto-refresh</span>
                                   <Switch id="auto-refresh" defaultChecked className="h-4 w-7" />
                                </div>
                                <Button size="sm" variant="outline" className="h-7 text-xs gap-1">
                                   <RotateCw className="size-3" /> Re-screen
                                </Button>
                            </div>
                         </div>

                         {/* Main Grid */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {/* Sanctions Screening */}
                            <Card className={cardClass}>
                               <CardHeader className={cardHeaderClass}>
                                  <CardTitle className="text-sm font-semibold tracking-wider text-gray-700 flex items-center gap-1.5"><ShieldAlert className="size-3.5" /> Sanctions Screening</CardTitle>
                                  <span className="text-xs text-gray-400">Hits from OFAC/EU/UN</span>
                               </CardHeader>
                               <CardContent className="p-0">
                                  <Table>
                                     <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold">Name</TableHead><TableHead className="h-9 text-xs font-bold">Watchlist</TableHead><TableHead className="h-9 text-xs font-bold">Score</TableHead><TableHead className="h-9 text-xs"></TableHead></TableRow></TableHeader>
                                     <TableBody>
                                        {selectedCustomer.screening.sanctions.map((item, i) => (
                                           <TableRow key={i}>
                                              <TableCell className="text-sm font-medium text-gray-900">{item.name}</TableCell>
                                              <TableCell className="text-sm text-gray-600">{item.watchlist}</TableCell>
                                              <TableCell className="text-sm font-bold text-red-600">{item.percentage}%</TableCell>
                                              <TableCell className="text-right"><Button variant="ghost" size="sm" className="h-6 w-6 p-0"><ArrowRight className="size-3 text-gray-400" /></Button></TableCell>
                                           </TableRow>
                                        ))}
                                     </TableBody>
                                  </Table>
                               </CardContent>
                            </Card>

                            {/* PEP Screening */}
                            <Card className={cardClass}>
                               <CardHeader className={cardHeaderClass}>
                                  <CardTitle className={cardTitleClass}><User className="size-3.5" /> PEP Screening</CardTitle>
                                  <Badge variant="outline" className="ml-auto text-[9px] bg-orange-50 text-orange-700 border-orange-200">{selectedCustomer.screening.pep.status}</Badge>
                               </CardHeader>
                               <CardContent className="p-0">
                                  <Table>
                                     <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold">Name</TableHead><TableHead className="h-9 text-xs font-bold">Watchlist</TableHead><TableHead className="h-9 text-xs font-bold">Details</TableHead><TableHead className="h-9 text-xs"></TableHead></TableRow></TableHeader>
                                     <TableBody>
                                        {selectedCustomer.screening.pep.matches.map((item, i) => (
                                           <TableRow key={i}>
                                              <TableCell className="text-sm font-medium text-gray-900">{item.name}</TableCell>
                                              <TableCell className="text-sm text-gray-600">{item.watchlist}</TableCell>
                                              <TableCell className="text-sm text-gray-600 max-w-[150px] truncate" title={item.details}>{item.details}</TableCell>
                                              <TableCell className="text-right"><Button variant="ghost" size="sm" className="h-6 w-6 p-0"><ArrowRight className="size-3 text-gray-400" /></Button></TableCell>
                                           </TableRow>
                                        ))}
                                     </TableBody>
                                  </Table>
                               </CardContent>
                            </Card>
                            
                            {/* Watchlist Matches */}
                            <Card className={cardClass}>
                               <CardHeader className={cardHeaderClass}>
                                  <CardTitle className={cardTitleClass}><FileCheck className="size-3.5" /> Internal / External Watchlists</CardTitle>
                               </CardHeader>
                               <CardContent className="p-0">
                                   <Table>
                                     <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold">List</TableHead><TableHead className="h-9 text-xs font-bold">Resolution</TableHead><TableHead className="h-9 text-xs font-bold">Match</TableHead><TableHead className="h-9 text-xs"></TableHead></TableRow></TableHeader>
                                     <TableBody>
                                        {selectedCustomer.screening.watchlistMatches.map((item, i) => (
                                           <TableRow key={i}>
                                              <TableCell className="text-sm font-medium text-gray-900">{item.list}</TableCell>
                                              <TableCell className="text-sm text-gray-600 max-w-[150px] truncate" title={item.resolution}>{item.resolution}</TableCell>
                                              <TableCell className="text-sm font-bold text-red-600">{item.percentage}%</TableCell>
                                              <TableCell className="text-right"><Button variant="ghost" size="sm" className="h-6 w-6 p-0"><ArrowRight className="size-3 text-gray-400" /></Button></TableCell>
                                           </TableRow>
                                        ))}
                                     </TableBody>
                                  </Table>
                               </CardContent>
                            </Card>

                            {/* Adverse Media */}
                            <Card className={cardClass}>
                               <CardHeader className={cardHeaderClass}>
                                  <CardTitle className={cardTitleClass}><Globe className="size-3.5" /> Adverse Media</CardTitle>
                               </CardHeader>
                               <CardContent className="p-3">
                                  <div className="space-y-3">
                                      {selectedCustomer.screening.adverseMedia.map((item, i) => (
                                          <div key={i} className="flex gap-3 items-start p-2 bg-gray-50 rounded border border-gray-100">
                                              <div className="bg-white p-1.5 rounded border border-gray-200 shadow-sm shrink-0">
                                                  <Globe className="size-4 text-blue-600" />
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                  <div className="flex justify-between items-start">
                                                      <span className="text-sm font-normal text-gray-900">{item.source}</span>
                                                      <span className="text-xs text-gray-400">{item.date}</span>
                                                  </div>
                                                  <p className="text-sm text-gray-600 mt-1 line-clamp-2" title={item.snippet}>{item.snippet}</p>
                                                  <div className="flex items-center gap-2 mt-2">
                                                      <Badge variant="outline" className="text-xs h-5 bg-red-50 text-red-700 border-red-100">{item.percentage}% Match</Badge>
                                                      <Button variant="link" className="text-xs text-blue-600 h-auto p-0 ml-auto flex items-center gap-1">View Details <ArrowRight className="size-2" /></Button>
                                                  </div>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                               </CardContent>
                            </Card>
                         </div>

                         {/* Screening History */}
                         <Card className={cardClass}>
                             <CardHeader className={cardHeaderClass}>
                                <CardTitle className={cardTitleClass}><Clock className="size-3.5" /> Screening History</CardTitle>
                             </CardHeader>
                             <CardContent className="p-0">
                                 <Table>
                                     <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold">Date</TableHead><TableHead className="h-9 text-xs font-bold">Lists Scanned</TableHead><TableHead className="h-9 text-xs font-bold">Case ID</TableHead><TableHead className="h-9 text-xs font-bold text-right">Action</TableHead></TableRow></TableHeader>
                                     <TableBody>
                                        {selectedCustomer.screening.history.map((item, i) => (
                                           <TableRow key={i}>
                                              <TableCell className="text-sm text-gray-900">{item.date}</TableCell>
                                              <TableCell className="text-sm text-gray-600">{item.watchlists}</TableCell>
                                              <TableCell className="text-sm font-mono text-[#2A53A0] cursor-pointer hover:underline">{item.caseId}</TableCell>
                                              <TableCell className="text-right text-sm text-blue-600 cursor-pointer hover:underline">View Report</TableCell>
                                           </TableRow>
                                        ))}
                                     </TableBody>
                                 </Table>
                             </CardContent>
                         </Card>
                      </div>
                  </TabsContent>

                  {/* Rest of the tabs */}
                  {/* Risk Tab Content */}
                  <TabsContent value="risk" className="mt-0 animate-in fade-in-50 duration-300">
                     <div className="space-y-3">
                         {/* Overall Risk Header */}
                         <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                             <div className="flex items-center gap-4 w-full md:w-auto">
                                 <TooltipProvider>
                                     <Tooltip>
                                         <TooltipTrigger asChild>
                                             <div className="relative size-16 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                                 <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                                     <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                     <path className={cn(selectedCustomer.riskProfile.overall.level === 'High' ? "text-red-600" : "text-orange-500")} strokeDasharray={`${selectedCustomer.riskProfile.overall.score}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                 </svg>
                                                 <span className="absolute text-sm font-bold text-gray-900">{selectedCustomer.riskProfile.overall.score}</span>
                                             </div>
                                         </TooltipTrigger>
                                         <TooltipContent className="bg-white border border-gray-200 shadow-xl rounded-lg p-0 max-w-[320px] max-h-[400px] overflow-hidden" side="right">
                                             <div className="flex items-center gap-2 p-3 border-b border-gray-100 bg-gray-50/50">
                                                 <ShieldAlert className="size-4 text-red-600" />
                                                 <span className="text-xs font-bold text-gray-900">Risk Contributors</span>
                                             </div>
                                             <ScrollArea className="h-full max-h-[300px]">
                                                 <div className="p-3 space-y-4">
                                                     {selectedCustomer.riskFactors && Object.entries({
                                                         kyc: "KYC Risk",
                                                         relatedParties: "Related Parties",
                                                         sanctionMatch: "Sanction Matches",
                                                         riskProfile: "Risk Profile",
                                                         cddEdd: "CDD / EDD",
                                                         account: "Account Status",
                                                         transactions: "Transactions & Alerts",
                                                         lea: "LEA Requests",
                                                         regulatory: "Regulatory Reports"
                                                     }).map(([key, label]) => {
                                                         const items = selectedCustomer.riskFactors[key];
                                                         if (!items || items.length === 0) return null;
                                                         return (
                                                             <div key={key} className="space-y-1.5">
                                                                 <div className="text-[10px] font-bold text-gray-500 tracking-wider">{label}</div>
                                                                 <div className="space-y-1">
                                                                     {items.map((item: any, idx: number) => (
                                                                         <div key={idx} className="flex items-start gap-2">
                                                                             <div className={cn("mt-1.5 size-1.5 rounded-full shrink-0", item.high ? "bg-red-600 shadow-sm shadow-red-200" : "bg-gray-200")} />
                                                                             <div className="flex-1 min-w-0">
                                                                                 <span className={cn("text-xs leading-tight block", item.high ? "font-bold text-gray-900" : "text-gray-500")}>
                                                                                     {item.label}
                                                                                     {item.value && <span className="ml-1 opacity-75 font-normal">({item.value})</span>}
                                                                                 </span>
                                                                             </div>
                                                                         </div>
                                                                     ))}
                                                                 </div>
                                                             </div>
                                                         );
                                                     })}
                                                 </div>
                                             </ScrollArea>
                                         </TooltipContent>
                                     </Tooltip>
                                 </TooltipProvider>
                                 <div className="flex flex-col">
                                     <span className="text-xs uppercase font-bold text-gray-500">Overall Risk Score</span>
                                     <div className="flex items-center gap-2">
                                         <span className={cn("text-lg font-bold", selectedCustomer.riskProfile.overall.level === 'High' ? "text-red-700" : "text-gray-900")}>{selectedCustomer.riskProfile.overall.level} Risk</span>
                                         <Badge variant="outline" className="text-[10px] bg-gray-50 border-gray-200">KYC & TM Consolidated</Badge>
                                     </div>
                                     <Button variant="link" className="h-auto p-0 text-[10px] text-blue-600 justify-start">View Risk Break-up</Button>
                                 </div>
                             </div>
                             
                             {/* Manual Override Info */}
                             {selectedCustomer.riskProfile.overrides.length > 0 && (
                                 <div className="flex items-start gap-3 bg-orange-50 px-3 py-2 rounded border border-orange-100 max-w-md">
                                     <AlertTriangle className="size-4 text-orange-600 shrink-0 mt-0.5" />
                                     <div className="flex flex-col">
                                         <span className="text-[10px] font-bold text-orange-800 uppercase">Manual Override Active</span>
                                         <p className="text-[10px] text-orange-700 line-clamp-2">{selectedCustomer.riskProfile.overrides[0].justification}</p>
                                         <div className="flex items-center gap-2 mt-1">
                                             <span className="text-[9px] text-orange-600 font-medium">By: {selectedCustomer.riskProfile.overrides[0].user}</span>
                                             <span className="text-[9px] text-orange-600">|</span>
                                             <span className="text-[9px] text-orange-600">{selectedCustomer.riskProfile.overrides[0].date}</span>
                                         </div>
                                     </div>
                                 </div>
                             )}
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                             {/* Geographic Risk */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Globe className="size-3.5" /> Geographic Risk</CardTitle>
                                     <Badge className={cn("text-[9px] h-5", selectedCustomer.riskProfile.geographic.riskLevel === 'High' ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700")}>{selectedCustomer.riskProfile.geographic.riskLevel}</Badge>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-medium uppercase">Scope</TableHead><TableHead className="h-9 text-xs font-medium uppercase">Country</TableHead><TableHead className="h-9 text-xs font-medium uppercase">Flags</TableHead></TableRow></TableHeader>
                                         <TableBody>
                                             <TableRow>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-600">Residence</TableCell>
                                                 <TableCell className="py-2 text-sm text-gray-900">{selectedCustomer.riskProfile.geographic.residence.country}</TableCell>
                                                 <TableCell className="py-2"><div className="flex gap-1">{renderRiskFlags(selectedCustomer.riskProfile.geographic.residence)}</div></TableCell>
                                             </TableRow>
                                             <TableRow>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-600">Citizenship</TableCell>
                                                 <TableCell className="py-2 text-sm text-gray-900">{selectedCustomer.riskProfile.geographic.citizenship.country}</TableCell>
                                                 <TableCell className="py-2"><div className="flex gap-1">{renderRiskFlags(selectedCustomer.riskProfile.geographic.citizenship)}</div></TableCell>
                                             </TableRow>
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>

                             {/* High Risk Txn Countries */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><ArrowRight className="size-3.5" /> High Risk Txn Countries</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-medium uppercase">Country</TableHead><TableHead className="h-9 text-xs font-medium uppercase">Details</TableHead><TableHead className="h-9 text-xs font-medium uppercase">Flags</TableHead></TableRow></TableHeader>
                                         <TableBody>
                                             {selectedCustomer.riskProfile.highRiskTxnCountries.map((c, i) => (
                                                 <TableRow key={i}>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-900">{c.country}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600">{c.details}</TableCell>
                                                     <TableCell className="py-2"><div className="flex gap-1">{renderRiskFlags(c)}</div></TableCell>
                                                 </TableRow>
                                             ))}
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>

                             {/* Behavioral Risk */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Activity className="size-3.5" /> Behavioral Risk</CardTitle>
                                     <div className="flex items-center gap-2">
                                         <span className="text-[10px] font-bold text-gray-900">{selectedCustomer.riskProfile.behavioral.score}</span>
                                         <Badge className="bg-red-100 text-red-700 text-[9px] h-5">{selectedCustomer.riskProfile.behavioral.level}</Badge>
                                     </div>
                                 </CardHeader>
                                 <CardContent className="p-3">
                                     <div className="space-y-2">
                                         {selectedCustomer.riskProfile.behavioral.alerts.map((alert, i) => (
                                             <div key={i} className="p-2 bg-red-50/50 rounded border border-red-100">
                                                 <div className="flex justify-between items-start mb-1">
                                                     <span className="text-xs font-bold text-red-900">{alert.name}</span>
                                                     <Badge variant="outline" className="bg-white text-red-600 border-red-200 text-xs h-4">+{alert.deviation}%</Badge>
                                                 </div>
                                                 <p className="text-sm font-normal text-red-800/80 leading-tight">{alert.details}</p>
                                             </div>
                                         ))}
                                     </div>
                                 </CardContent>
                             </Card>
                         </div>

                         {/* Risk Factors Grid */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><ShieldAlert className="size-3.5" /> Risk Factors</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableBody>
                                             <TableRow>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-600 w-1/3">Customer Type</TableCell>
                                                 <TableCell className="py-2 text-sm font-bold text-gray-900">{selectedCustomer.riskProfile.customerTypeRisk.type}</TableCell>
                                                 <TableCell className="py-2 text-right"><Badge variant="outline" className={cn("text-xs h-4", getRiskBadgeColor(selectedCustomer.riskProfile.customerTypeRisk.risk))}>{selectedCustomer.riskProfile.customerTypeRisk.risk}</Badge></TableCell>
                                             </TableRow>
                                             <TableRow>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-600">Occupation</TableCell>
                                                 <TableCell className="py-2 text-sm font-bold text-gray-900">{selectedCustomer.riskProfile.occupationRisk.value}</TableCell>
                                                 <TableCell className="py-2 text-right"><Badge variant="outline" className={cn("text-xs h-4", selectedCustomer.riskProfile.occupationRisk.isHighRisk === 'Y' ? "bg-red-50 text-red-700 border-red-200" : "bg-green-50 text-green-700 border-green-200")}>{selectedCustomer.riskProfile.occupationRisk.isHighRisk === 'Y' ? 'High' : 'Low'}</Badge></TableCell>
                                             </TableRow>
                                             <TableRow>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-600">Industry / Segment</TableCell>
                                                 <TableCell className="py-2 text-sm font-bold text-gray-900">{selectedCustomer.riskProfile.industryRisk.sector} <span className="font-normal text-gray-500">({selectedCustomer.riskProfile.industryRisk.details})</span></TableCell>
                                                 <TableCell className="py-2 text-right"><Badge variant="outline" className={cn("text-xs h-4", selectedCustomer.riskProfile.industryRisk.isHighRisk === 'Y' ? "bg-red-50 text-red-700 border-red-200" : "bg-green-50 text-green-700 border-green-200")}>{selectedCustomer.riskProfile.industryRisk.isHighRisk === 'Y' ? 'High' : 'Low'}</Badge></TableCell>
                                             </TableRow>
                                             <TableRow>
                                                  <TableCell className="py-2 text-sm font-normal text-gray-600">Related Parties</TableCell>
                                                  <TableCell className="py-2 text-sm font-bold text-gray-900">Consolidated Score</TableCell>
                                                  <TableCell className="py-2 text-right"><Badge variant="outline" className={cn("text-xs h-4", getRiskBadgeColor(selectedCustomer.riskProfile.relatedPartiesRisk.level))}>{selectedCustomer.riskProfile.relatedPartiesRisk.level} ({selectedCustomer.riskProfile.relatedPartiesRisk.score})</Badge></TableCell>
                                             </TableRow>
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>

                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><CreditCard className="size-3.5" /> Product & Channel Risk</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-medium uppercase">Category</TableHead><TableHead className="h-9 text-xs font-medium uppercase">Name</TableHead><TableHead className="h-9 text-xs font-medium uppercase text-right">Risk</TableHead></TableRow></TableHeader>
                                         <TableBody>
                                             {selectedCustomer.riskProfile.productChannelRisk.map((item, i) => (
                                                 <TableRow key={i}>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-600">{item.type}</TableCell>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-900">{item.name}</TableCell>
                                                     <TableCell className="py-2 text-right"><Badge variant="outline" className={cn("text-xs h-4", getRiskBadgeColor(item.risk))}>{item.risk}</Badge></TableCell>
                                                 </TableRow>
                                             ))}
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>
                         </div>

                         {/* Risk History */}
                         <Card className={cardClass}>
                             <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><Clock className="size-3.5" /> Risk Rating History</CardTitle>
                             </CardHeader>
                             <CardContent className="p-0">
                                 <Table>
                                     <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold uppercase">Date</TableHead><TableHead className="h-9 text-xs font-bold uppercase">Risk Level</TableHead><TableHead className="h-9 text-xs font-bold uppercase">Score</TableHead><TableHead className="h-9 text-xs font-bold uppercase">Reason</TableHead></TableRow></TableHeader>
                                     <TableBody>
                                         {selectedCustomer.riskProfile.history.map((h, i) => (
                                             <TableRow key={i}>
                                                 <TableCell className="py-2 text-sm text-gray-900">{h.date}</TableCell>
                                                 <TableCell className="py-2"><Badge className={cn("text-xs h-4 w-16 justify-center", getRiskBadgeColor(h.level, true))}>{h.level}</Badge></TableCell>
                                                 <TableCell className="py-2 text-sm font-mono text-gray-600">{h.score}</TableCell>
                                                 <TableCell className="py-2 text-sm text-gray-600">{h.reason}</TableCell>
                                             </TableRow>
                                         ))}
                                     </TableBody>
                                 </Table>
                             </CardContent>
                         </Card>
                     </div>
                  </TabsContent>

                  {/* KYC Tab Content */}
                  <TabsContent value="kyc" className="mt-0 animate-in fade-in-50 duration-300">
                      <div className="space-y-3">
                         {/* Header */}
                         <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                             <div className="flex items-center gap-6">
                                 <div className="flex flex-col gap-1">
                                     <span className="text-xs font-bold uppercase text-gray-500">KYC Status</span>
                                     <Badge className="bg-green-100 text-green-700 w-fit">{selectedCustomer.kycProfile.status}</Badge>
                                 </div>
                                 <div className="h-8 w-px bg-gray-200"></div>
                                 <div className="flex flex-col gap-1">
                                     <span className="text-xs font-bold uppercase text-gray-500">Last Review</span>
                                     <span className="text-sm font-normal text-gray-900">{selectedCustomer.kycProfile.lastReviewDate}</span>
                                 </div>
                                 <div className="h-8 w-px bg-gray-200"></div>
                                 <div className="flex flex-col gap-1">
                                     <span className="text-xs font-bold uppercase text-gray-500">Next Due</span>
                                     <span className="text-sm font-normal text-gray-900">{selectedCustomer.kycProfile.nextReviewDate}</span>
                                 </div>
                             </div>
                             <Button size="sm" className="h-7 text-xs bg-[#2A53A0] hover:bg-[#1e3a70]">
                                 <FileCheck className="size-3 mr-2" /> Start New Review
                             </Button>
                         </div>

                         {/* Grid 1 */}
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                             {/* Documents */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><FileText className="size-3.5" /> Documents Submitted</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold uppercase">Type</TableHead><TableHead className="h-9 text-xs font-bold uppercase">ID No.</TableHead><TableHead className="h-9 text-xs font-bold uppercase text-right">Expiry</TableHead></TableRow></TableHeader>
                                         <TableBody>
                                             {selectedCustomer.kycProfile.documents.map((doc, i) => (
                                                 <TableRow key={i}>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-900">{doc.type}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600 font-mono">{doc.id}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600 text-right">{doc.expiry || doc.date}</TableCell>
                                                 </TableRow>
                                             ))}
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>

                             {/* CDD/EDD Triggers */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><AlertTriangle className="size-3.5" /> CDD/EDD Triggers</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-3 space-y-2">
                                     {selectedCustomer.kycProfile.triggers.map((trigger, i) => (
                                         <div key={i} className="bg-orange-50 border border-orange-100 p-2 rounded">
                                             <div className="flex justify-between items-start">
                                                 <span className="text-sm font-bold text-orange-800">{trigger.type}</span>
                                                 <span className="text-xs text-orange-600">{trigger.date}</span>
                                             </div>
                                             <p className="text-sm text-orange-700 mt-0.5">{trigger.detail}</p>
                                         </div>
                                     ))}
                                 </CardContent>
                             </Card>
                             
                             {/* New Products */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><CreditCard className="size-3.5" /> New Products (6m)</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold uppercase">Product</TableHead><TableHead className="h-9 text-xs font-bold uppercase text-right">Date Taken</TableHead></TableRow></TableHeader>
                                         <TableBody>
                                             {selectedCustomer.kycProfile.newProducts.map((p, i) => (
                                                 <TableRow key={i}>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-900">{p.name}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600 text-right">{p.date}</TableCell>
                                                 </TableRow>
                                             ))}
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>
                         </div>

                         {/* Grid 2 */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                             {/* Source of Funds/Wealth */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Activity className="size-3.5" /> Source of Funds & Wealth</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-3 grid grid-cols-2 gap-4">
                                     <div>
                                         <span className="text-xs font-bold uppercase text-gray-500 block mb-2">Source of Funds</span>
                                         <ul className="list-disc list-inside space-y-1">
                                             {selectedCustomer.kycProfile.sourceOfFunds.map((s, i) => (
                                                 <li key={i} className="text-sm text-gray-700">{s}</li>
                                             ))}
                                         </ul>
                                     </div>
                                     <div className="border-l border-gray-100 pl-4">
                                         <span className="text-xs font-bold uppercase text-gray-500 block mb-2">Source of Wealth</span>
                                         <ul className="list-disc list-inside space-y-1">
                                             {selectedCustomer.kycProfile.sourceOfWealth.map((s, i) => (
                                                 <li key={i} className="text-sm text-gray-700">{s}</li>
                                             ))}
                                         </ul>
                                     </div>
                                 </CardContent>
                             </Card>

                             {/* Risk Evolution Chart */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Activity className="size-3.5" /> KYC Risk Evolution</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-3 h-[150px]">
                                     <ResponsiveContainer width="100%" height="100%">
                                         <LineChart data={selectedCustomer.kycProfile.riskEvolution}>
                                             <XAxis dataKey="date" tick={{fontSize: 10}} tickLine={false} axisLine={false} />
                                             <YAxis tick={{fontSize: 10}} tickLine={false} axisLine={false} domain={[0, 100]} />
                                             <RechartsTooltip contentStyle={{fontSize: '10px', borderRadius: '4px', padding: '4px'}} />
                                             <Line type="monotone" dataKey="score" stroke="#2A53A0" strokeWidth={2} dot={{r: 3}} activeDot={{r: 5}} />
                                         </LineChart>
                                     </ResponsiveContainer>
                                 </CardContent>
                             </Card>
                         </div>

                         {/* Change Log */}
                         <Card className={cardClass}>
                             <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><ScrollText className="size-3.5" /> KYC Change Log</CardTitle>
                             </CardHeader>
                             <CardContent className="p-0">
                                 <Table>
                                     <TableHeader><TableRow className="bg-gray-50/50"><TableHead className="h-9 text-xs font-bold uppercase">Date</TableHead><TableHead className="h-9 text-xs font-bold uppercase">Field Changed</TableHead><TableHead className="h-9 text-xs font-bold uppercase">Old Value</TableHead><TableHead className="h-9 text-xs font-bold uppercase">New Value</TableHead><TableHead className="h-9 text-xs font-bold uppercase">User</TableHead></TableRow></TableHeader>
                                     <TableBody>
                                         {selectedCustomer.kycProfile.changeLog.map((log, i) => (
                                             <TableRow key={i}>
                                                 <TableCell className="py-2 text-sm text-gray-600">{log.date}</TableCell>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-900">{log.field}</TableCell>
                                                 <TableCell className="py-2 text-sm text-gray-500">{log.old}</TableCell>
                                                 <TableCell className="py-2 text-sm font-normal text-gray-900">{log.new}</TableCell>
                                                 <TableCell className="py-2 text-sm text-gray-600">{log.user}</TableCell>
                                             </TableRow>
                                         ))}
                                     </TableBody>
                                 </Table>
                             </CardContent>
                         </Card>
                      </div>
                  </TabsContent>

                  {/* Accounts Tab Content */}
                  <TabsContent value="accounts" className="mt-0 animate-in fade-in-50 duration-300">
                      <div className="space-y-3">
                         {/* Dormant Account Warning */}
                         {selectedCustomer.accountsProfile.dormant.length > 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
                                <Ban className="size-5 text-red-600 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-red-800">Dormant Accounts Detected</h4>
                                    <p className="text-xs text-red-700 mt-1">
                                        The following accounts have been inactive for more than 6 months:
                                        {selectedCustomer.accountsProfile.dormant.map((d, i) => (
                                            <span key={i} className="font-bold ml-1">{d.name} ({d.period})</span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                         )}

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             {/* Account Summary */}
                             <Card className={cn(cardClass, "md:col-span-2")}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Wallet className="size-3.5" /> Account Summary</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-0">
                                     <Table>
                                         <TableHeader>
                                            <TableRow className="bg-gray-50/50">
                                               <TableHead className="h-9 text-xs font-bold uppercase">Institution</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase">Account No</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase">Type</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase">Currency</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase">Status</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase text-right">Balance</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase text-right">Open Date</TableHead>
                                               <TableHead className="h-9 text-xs font-bold uppercase text-right">Close Date</TableHead>
                                            </TableRow>
                                         </TableHeader>
                                         <TableBody>
                                             {selectedCustomer.accountsProfile.summary.map((acc: any, i: number) => (
                                                 <TableRow key={i}>
                                                     <TableCell className="py-2 text-sm font-medium text-gray-900">{acc.institution}</TableCell>
                                                     <TableCell className="py-2 text-sm font-mono text-gray-600">{acc.id}</TableCell>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-900">{acc.type}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600">{acc.currency}</TableCell>
                                                     <TableCell className="py-2"><Badge variant="outline" className={cn("text-xs h-5 px-1", acc.status === 'Active' ? "bg-green-50 text-green-700 border-green-200" : acc.status === 'Dormant' ? "bg-red-50 text-red-700 border-red-200" : "bg-gray-50 text-gray-600 border-gray-200")}>{acc.status}</Badge></TableCell>
                                                     <TableCell className="py-2 text-sm font-normal text-gray-900 text-right">{acc.balance}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600 text-right">{acc.openDate}</TableCell>
                                                     <TableCell className="py-2 text-sm text-gray-600 text-right">{acc.closeDate || '-'}</TableCell>
                                                 </TableRow>
                                             ))}
                                         </TableBody>
                                     </Table>
                                 </CardContent>
                             </Card>

                             {/* Account Limits */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Coins className="size-3.5" /> Account Limits</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-3 space-y-2">
                                     <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                                         <span className="text-sm font-normal text-gray-600">Transaction Limit</span>
                                         <span className="text-sm font-normal text-gray-900">{selectedCustomer.accountsProfile.limits.transaction}</span>
                                     </div>
                                     <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                                         <span className="text-sm font-normal text-gray-600">Cash Withdrawal</span>
                                         <span className="text-sm font-normal text-gray-900">{selectedCustomer.accountsProfile.limits.cash}</span>
                                     </div>
                                     <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                                         <span className="text-sm font-normal text-gray-600">FX Limit</span>
                                         <span className="text-sm font-normal text-gray-900">{selectedCustomer.accountsProfile.limits.fx}</span>
                                     </div>
                                 </CardContent>
                             </Card>

                             {/* Products Taken */}
                             <Card className={cardClass}>
                                 <CardHeader className={cardHeaderClass}>
                                     <CardTitle className={cardTitleClass}><Layers className="size-3.5" /> Products Taken</CardTitle>
                                 </CardHeader>
                                 <CardContent className="p-3">
                                     <div className="flex flex-wrap gap-1.5">
                                         {selectedCustomer.accountsProfile.products.map((p, i) => (
                                             <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 text-xs font-normal">{p}</Badge>
                                         ))}
                                     </div>
                                 </CardContent>
                             </Card>
                         </div>
                      </div>
                  </TabsContent>

                  {/* Transactions Tab Content */}
                  <TabsContent value="transactions" className="mt-0 animate-in fade-in-50 duration-300">
                      <div className="space-y-4">
                        {/* 1. Volumes & Values */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                           <Card className={cardClass}>
                              <CardHeader className="p-3 pb-1"><CardTitle className="text-xs text-gray-500 font-bold uppercase tracking-wider">Avg Daily Volume</CardTitle></CardHeader>
                              <CardContent className="p-3 pt-0">
                                 <div className="text-sm font-normal text-gray-900">{selectedCustomer.transactionsProfile.summary.daily.value}</div>
                                 <div className="text-xs text-gray-500">{selectedCustomer.transactionsProfile.summary.daily.volume} txns</div>
                              </CardContent>
                           </Card>
                           <Card className={cardClass}>
                              <CardHeader className="p-3 pb-1"><CardTitle className="text-xs text-gray-500 font-bold uppercase tracking-wider">Avg Monthly Volume</CardTitle></CardHeader>
                              <CardContent className="p-3 pt-0">
                                 <div className="text-sm font-normal text-gray-900">{selectedCustomer.transactionsProfile.summary.monthly.value}</div>
                                 <div className="text-xs text-gray-500">{selectedCustomer.transactionsProfile.summary.monthly.volume} txns</div>
                              </CardContent>
                           </Card>
                           <Card className={cardClass}>
                              <CardHeader className="p-3 pb-1"><CardTitle className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total YTD Volume</CardTitle></CardHeader>
                              <CardContent className="p-3 pt-0">
                                 <div className="text-sm font-normal text-gray-900">{selectedCustomer.transactionsProfile.summary.ytd.value}</div>
                                 <div className="text-xs text-gray-500">{selectedCustomer.transactionsProfile.summary.ytd.volume} txns</div>
                              </CardContent>
                           </Card>
                        </div>

                        {/* 2. Breakdowns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><PieChart className="size-3.5" /> Cash vs Non-Cash</CardTitle>
                                 <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-5 text-[10px] text-blue-600 gap-1 hover:text-blue-800"
                                    onClick={() => setShowCashChart(!showCashChart)}
                                 >
                                    {showCashChart ? <X className="size-3" /> : <ExternalLink className="size-3" />}
                                    {showCashChart ? "Close" : "Chart"}
                                 </Button>
                              </CardHeader>
                              <CardContent className="p-3">
                                 {showCashChart ? (
                                    <div className="h-[180px] w-full mt-2">
                                       <ResponsiveContainer width="100%" height="100%">
                                          <BarChart data={[
                                             { month: 'Aug', cash: 45, nonCash: 120 },
                                             { month: 'Sep', cash: 52, nonCash: 130 },
                                             { month: 'Oct', cash: 48, nonCash: 145 },
                                             { month: 'Nov', cash: 60, nonCash: 160 },
                                             { month: 'Dec', cash: 55, nonCash: 180 },
                                             { month: 'Jan', cash: 65, nonCash: 210 },
                                          ]} margin={{ top: 5, right: 10, left: -20, bottom: 0 }} barCategoryGap={20}>
                                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                             <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#6b7280'}} />
                                             <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#6b7280'}} />
                                             <RechartsTooltip 
                                                cursor={{ fill: '#f9fafb' }}
                                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                                             />
                                             <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                                             <Bar dataKey="cash" name="Cash" fill="#3b82f6" stackId="a" radius={[0, 0, 0, 0]} />
                                             <Bar dataKey="nonCash" name="Non-Cash" fill="#6366f1" stackId="a" radius={[4, 4, 0, 0]} />
                                          </BarChart>
                                       </ResponsiveContainer>
                                    </div>
                                 ) : (
                                    <div className="space-y-2">
                                       <div className="flex justify-between text-sm"><span className="text-gray-600 font-normal">Breakup %</span><span className="font-bold text-gray-900">{selectedCustomer.transactionsProfile.summary.breakdown.cash}% / {selectedCustomer.transactionsProfile.summary.breakdown.nonCash}%</span></div>
                                       <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                          <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.cash}%` }} className="h-full bg-blue-500"></div>
                                          <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.nonCash}%` }} className="h-full bg-indigo-500"></div>
                                       </div>
                                       <div className="flex justify-between text-[10px] text-gray-500">
                                          <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-blue-500"></div>Cash</div>
                                          <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-indigo-500"></div>Non-Cash</div>
                                       </div>
                                    </div>
                                 )}
                              </CardContent>
                           </Card>

                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><Globe className="size-3.5" /> Domestic vs Cross-Border</CardTitle>
                                 <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-5 text-[10px] text-blue-600 gap-1 hover:text-blue-800"
                                    onClick={() => setShowDomesticChart(!showDomesticChart)}
                                 >
                                    {showDomesticChart ? <X className="size-3" /> : <ExternalLink className="size-3" />}
                                    {showDomesticChart ? "Close" : "Chart"}
                                 </Button>
                              </CardHeader>
                              <CardContent className="p-3">
                                 {showDomesticChart ? (
                                    <div className="h-[180px] w-full mt-2">
                                       <ResponsiveContainer width="100%" height="100%">
                                          <BarChart data={[
                                             { month: 'Aug', domestic: 100, crossBorder: 65 },
                                             { month: 'Sep', domestic: 110, crossBorder: 72 },
                                             { month: 'Oct', domestic: 105, crossBorder: 88 },
                                             { month: 'Nov', domestic: 125, crossBorder: 95 },
                                             { month: 'Dec', domestic: 140, crossBorder: 95 },
                                             { month: 'Jan', domestic: 155, crossBorder: 120 },
                                          ]} margin={{ top: 5, right: 10, left: -20, bottom: 0 }} barCategoryGap={20}>
                                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                             <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#6b7280'}} />
                                             <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#6b7280'}} />
                                             <RechartsTooltip 
                                                cursor={{ fill: '#f9fafb' }}
                                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                                             />
                                             <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                                             <Bar dataKey="domestic" name="Domestic" fill="#10b981" stackId="a" radius={[0, 0, 0, 0]} />
                                             <Bar dataKey="crossBorder" name="Cross-Border" fill="#f59e0b" stackId="a" radius={[4, 4, 0, 0]} />
                                          </BarChart>
                                       </ResponsiveContainer>
                                    </div>
                                 ) : (
                                    <div className="space-y-2">
                                       <div className="flex justify-between text-sm"><span className="text-gray-600 font-normal">Breakup %</span><span className="font-bold text-gray-900">{selectedCustomer.transactionsProfile.summary.breakdown.domestic}% / {selectedCustomer.transactionsProfile.summary.breakdown.crossBorder}%</span></div>
                                       <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                          <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.domestic}%` }} className="h-full bg-emerald-500"></div>
                                          <div style={{ width: `${selectedCustomer.transactionsProfile.summary.breakdown.crossBorder}%` }} className="h-full bg-amber-500"></div>
                                       </div>
                                       <div className="flex justify-between text-[10px] text-gray-500">
                                          <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-emerald-500"></div>Domestic</div>
                                          <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-amber-500"></div>Cross-Border</div>
                                       </div>
                                    </div>
                                 )}
                              </CardContent>
                           </Card>
                        </div>

                        {/* 3. Top 5 Lists */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                           {/* Counterparties */}
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}><CardTitle className={cardTitleClass}><Users className="size-3.5" /> Top 5 Counterparties</CardTitle></CardHeader>
                              <CardContent className="p-0">
                                 <Table>
                                    <TableBody>
                                       {selectedCustomer.transactionsProfile.topCounterparties.slice(0, 5).map((c, i) => (
                                          <TableRow key={i} className="h-8 border-b-0 hover:bg-gray-50">
                                             <TableCell className="py-1 px-3 text-sm font-normal text-gray-700 truncate max-w-[120px]">{c.name}</TableCell>
                                             <TableCell className="py-1 px-3 text-sm font-normal text-right text-gray-500">{c.count} txns</TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </CardContent>
                           </Card>

                           {/* Remittance Countries */}
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}><CardTitle className={cardTitleClass}><Globe className="size-3.5" /> Top 5 Remittance Countries</CardTitle></CardHeader>
                              <CardContent className="p-0">
                                 <Table>
                                    <TableBody>
                                       {selectedCustomer.transactionsProfile.topCountries.slice(0, 5).map((c: any, i: number) => (
                                          <TableRow key={i} className="h-8 border-b-0 hover:bg-gray-50">
                                             <TableCell className="py-1 px-3 text-sm font-normal text-gray-700">{c.name}</TableCell>
                                             <TableCell className="py-1 px-3 text-sm font-normal text-right text-gray-500">{c.count} txns</TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </CardContent>
                           </Card>

                           {/* Alert Scenarios */}
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}><CardTitle className={cardTitleClass}><ShieldAlert className="size-3.5" /> Top 5 Alert Scenarios</CardTitle></CardHeader>
                              <CardContent className="p-0">
                                 <Table>
                                    <TableBody>
                                       {selectedCustomer.transactionsProfile.topAlerts.slice(0, 5).map((a, i) => (
                                          <TableRow key={i} className="h-8 border-b-0 hover:bg-gray-50">
                                             <TableCell className="py-1 px-3 text-sm font-normal text-gray-700 truncate max-w-[150px]">{a.name}</TableCell>
                                             <TableCell className="py-1 px-3 text-sm font-normal text-right text-gray-500">{a.count} hits</TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </CardContent>
                           </Card>
                        </div>

                        {/* 4. Unusual Patterns & Corridor Checks */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <Card className={cardClass}>
                                <CardHeader className={cardHeaderClass}><CardTitle className={cardTitleClass}><Activity className="size-3.5" /> Unusual Patterns</CardTitle></CardHeader>
                                <CardContent className="p-0">
                                    <Table>
                                        <TableBody>
                                            {selectedCustomer.transactionsProfile.unusualPatterns.map((pattern: any, i: number) => (
                                                <TableRow key={i} className="h-8 border-b border-gray-50 hover:bg-gray-50">
                                                    <TableCell className="py-1 px-3 text-sm font-normal text-gray-700 w-[60%]">{pattern.name}</TableCell>
                                                    <TableCell className="py-1 px-3 text-right">
                                                        {pattern.triggered ? (
                                                            <div className="flex items-center justify-end gap-2">
                                                                <Badge variant="outline" className="text-[10px] h-5 bg-red-50 text-red-700 border-red-200">Triggered</Badge>
                                                                <Button variant="ghost" size="sm" className="h-5 px-1.5 text-[10px] text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                                                                    {pattern.alertId} <ExternalLink className="ml-1 size-2.5" />
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <span className="text-[10px] text-gray-400">Normal</span>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>

                            <Card className={cardClass}>
                                <CardHeader className={cardHeaderClass}><CardTitle className={cardTitleClass}><AlertOctagon className="size-3.5" /> High Risk Corridor Checks</CardTitle></CardHeader>
                                <CardContent className="p-4">
                                    <div className="flex items-start gap-4">
                                        <div className={cn("p-2 rounded-full", selectedCustomer.transactionsProfile.highRiskCorridors.detected ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600")}>
                                            <Globe className="size-6" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-bold text-gray-900">High Risk Corridor Detected?</span>
                                                <Badge className={cn("text-xs", selectedCustomer.transactionsProfile.highRiskCorridors.detected ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")}>
                                                    {selectedCustomer.transactionsProfile.highRiskCorridors.detected ? "YES" : "NO"}
                                                </Badge>
                                            </div>
                                            {selectedCustomer.transactionsProfile.highRiskCorridors.detected && (
                                                <div className="bg-red-50 p-3 rounded-md border border-red-100 mt-2">
                                                    <p className="text-xs font-medium text-red-800 uppercase mb-1">Detected Corridors</p>
                                                    <p className="text-sm font-normal text-gray-800 mb-2">{selectedCustomer.transactionsProfile.highRiskCorridors.details}</p>
                                                    <Button variant="outline" size="sm" className="h-7 w-full text-xs border-red-200 text-red-700 hover:bg-red-100 hover:text-red-900">
                                                        View Alert Details <ArrowRight className="ml-1 size-3" />
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                      </div>
                  </TabsContent>

                  {/* Rest of the tabs */}
                  {/* Reg Reports Tab */}
                  <TabsContent value="reports" className="mt-0 animate-in fade-in-50 duration-300">
                     <div className="space-y-4">
                        {/* Account Status Banner - if Frozen */}
                        {selectedCustomer.regReportsProfile.accountFrozen.isFrozen && (
                           <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800">
                              <AlertCircle className="size-4" />
                              <AlertTitle className="ml-2 text-xs font-bold uppercase">Account Frozen</AlertTitle>
                              <AlertDescription className="ml-2 text-xs mt-1">
                                 Frozen on <span className="font-bold">{selectedCustomer.regReportsProfile.accountFrozen.date}</span> due to {selectedCustomer.regReportsProfile.accountFrozen.reason}
                              </AlertDescription>
                           </Alert>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {/* Jurisdiction & General Info */}
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><Globe className="size-3.5" /> Jurisdiction</CardTitle>
                              </CardHeader>
                              <CardContent className="p-4 flex flex-col gap-4">
                                 <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 font-normal">Regulator Jurisdiction</span>
                                    <span className="text-sm font-normal text-gray-900">{selectedCustomer.regReportsProfile.jurisdiction}</span>
                                 </div>
                                 <div className="w-full h-px bg-gray-100"></div>
                                 <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-medium">Reporting Entity</span>
                                    <span className="text-xs font-bold text-gray-900">Retail Banking Div</span>
                                 </div>
                              </CardContent>
                           </Card>

                           {/* Regulatory Filings Status */}
                           <Card className={cardClass}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><FileText className="size-3.5" /> Regulatory Filings</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                 <div className="divide-y divide-gray-100">
                                    {/* STR/SAR */}
                                    <div className="p-3 flex items-center justify-between hover:bg-gray-50">
                                       <div className="flex flex-col gap-0.5">
                                          <span className="text-sm font-normal text-gray-700">STR/SAR Filed</span>
                                          <span className="text-xs text-gray-500">Suspicious Transaction Report</span>
                                       </div>
                                       <div className="flex items-center gap-2">
                                          {selectedCustomer.regReportsProfile.strFiled.isFiled ? (
                                             <>
                                                <div className="flex flex-col items-end">
                                                   <Badge className="bg-red-100 text-red-700 h-4 text-[9px] px-1.5">Yes, Filed</Badge>
                                                   <span className="text-[9px] text-gray-400 mt-0.5">{selectedCustomer.regReportsProfile.strFiled.date}</span>
                                                </div>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-blue-600">
                                                   <ExternalLink className="size-3" />
                                                </Button>
                                             </>
                                          ) : (
                                             <Badge variant="outline" className="text-gray-500 h-4 text-[9px]">No</Badge>
                                          )}
                                       </div>
                                    </div>

                                    {/* CTR */}
                                    <div className="p-3 flex items-center justify-between hover:bg-gray-50">
                                       <div className="flex flex-col gap-0.5">
                                          <span className="text-sm font-normal text-gray-700">CTR Filed</span>
                                          <span className="text-xs text-gray-500">Cash Transaction Report</span>
                                       </div>
                                       <div className="flex items-center gap-2">
                                          {selectedCustomer.regReportsProfile.ctrFiled.isFiled ? (
                                             <>
                                                 <div className="flex flex-col items-end">
                                                   <Badge className="bg-orange-100 text-orange-700 h-4 text-[9px] px-1.5">Yes</Badge>
                                                   <span className="text-[9px] text-gray-400 mt-0.5">{selectedCustomer.regReportsProfile.ctrFiled.date}</span>
                                                </div>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-blue-600">
                                                   <ExternalLink className="size-3" />
                                                </Button>
                                             </>
                                          ) : (
                                             <Badge variant="outline" className="text-gray-500 h-4 text-[9px]">No</Badge>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </CardContent>
                           </Card>

                           {/* LEA Requests */}
                           <Card className={cn(cardClass, "md:col-span-2")}>
                              <CardHeader className={cardHeaderClass}>
                                 <CardTitle className={cardTitleClass}><ShieldAlert className="size-3.5" /> Law Enforcement (LEA) Requests</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                 {selectedCustomer.regReportsProfile.leaRequests.hasRequest ? (
                                    <div className="p-4 bg-red-50/50 flex items-center justify-between">
                                       <div className="flex items-start gap-3">
                                          <div className="mt-1 bg-red-100 p-1.5 rounded-full text-red-600">
                                             <Siren className="size-4" />
                                          </div>
                                          <div className="flex flex-col gap-1">
                                             <span className="text-sm font-bold text-red-900">Active Request: {selectedCustomer.regReportsProfile.leaRequests.agency}</span>
                                             <span className="text-sm text-red-700">{selectedCustomer.regReportsProfile.leaRequests.type} • {selectedCustomer.regReportsProfile.leaRequests.date}</span>
                                          </div>
                                       </div>
                                       <Button size="sm" variant="destructive" className="h-7 text-xs bg-red-600 hover:bg-red-700">View Request</Button>
                                    </div>
                                 ) : (
                                    <div className="p-8 flex flex-col items-center justify-center text-gray-400 gap-2">
                                       <ShieldCheck className="size-8 opacity-20" />
                                       <span className="text-xs">No active LEA requests</span>
                                    </div>
                                 )}
                              </CardContent>
                           </Card>
                        </div>
                     </div>
                  </TabsContent>

                  {/* Audit Tab */}
                  <TabsContent value="audit" className="mt-0 animate-in fade-in-50 duration-300">
                     <Card className={cardClass}>
                        <CardHeader className={cardHeaderClass}>
                           <CardTitle className={cardTitleClass}>
                              <History className="size-3.5" /> Customer Lifecycle Audit Log
                           </CardTitle>
                           <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                              <Download className="size-3" /> Export Log
                           </Button>
                        </CardHeader>
                        <CardContent className="p-0">
                           <div className="divide-y divide-gray-100">
                              {selectedCustomer.audit.map((log: any) => (
                                 <div key={log.id} className="p-4 flex gap-4 hover:bg-gray-50/50 transition-colors">
                                    <div className="shrink-0 mt-1">
                                       {log.category === 'Risk' && <div className="p-1.5 rounded-full bg-red-100 text-red-600"><ShieldAlert className="size-4" /></div>}
                                       {log.category === 'KYC' && <div className="p-1.5 rounded-full bg-blue-100 text-blue-600"><FileCheck className="size-4" /></div>}
                                       {log.category === 'Screening' && <div className="p-1.5 rounded-full bg-orange-100 text-orange-600"><Scan className="size-4" /></div>}
                                       {log.category === 'Product' && <div className="p-1.5 rounded-full bg-purple-100 text-purple-600"><CreditCard className="size-4" /></div>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                       <div className="flex items-start justify-between">
                                          <div className="flex flex-col gap-0.5">
                                             <span className="text-sm font-normal text-gray-900">{log.action}</span>
                                             <span className="text-sm text-gray-500">{log.details}</span>
                                          </div>
                                          <div className="text-right shrink-0">
                                             <div className="text-sm font-normal text-gray-900">{log.date.split(' ').slice(0, 3).join(' ')}</div>
                                             <div className="text-xs text-gray-400">{log.date.split(' ')[3]}</div>
                                          </div>
                                       </div>
                                       
                                       {log.changes && (
                                          <div className="mt-2 bg-gray-50 border border-gray-100 rounded-md p-2 text-sm">
                                             <div className="flex items-center gap-2 text-gray-600">
                                                <span className="font-normal text-gray-700 uppercase tracking-wider text-xs">Change:</span>
                                                {log.changes.field && <span className="font-semibold">{log.changes.field}:</span>}
                                                <span className="line-through text-red-400">{log.changes.from}</span>
                                                <ArrowRight className="size-3 text-gray-400" />
                                                <span className="text-green-600 font-normal">{log.changes.to}</span>
                                             </div>
                                          </div>
                                       )}

                                       <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                                          <div className="flex items-center gap-1.5">
                                             <User className="size-3 text-gray-400" />
                                             <span>User: <span className="font-normal text-gray-700">{log.user}</span></span>
                                          </div>
                                          {log.approver && (
                                             <div className="flex items-center gap-1.5">
                                                <UserCheck className="size-3 text-gray-400" />
                                                <span>Approved by: <span className="font-normal text-gray-700">{log.approver}</span></span>
                                             </div>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  </TabsContent>
              </div>
            </Tabs>
         </div>
      </div>
    </div>
  );
});
Customer360View.displayName = "Customer360View";
