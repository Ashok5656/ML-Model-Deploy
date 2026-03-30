import * as React from "react";
import { useState } from "react";
import { 
  Identification, 
  Filter as FilterIcon, 
  Add, 
  ChevronUp, 
  ChevronDown, 
  ArrowsVertical as Sort,
  Edit as EditIcon, 
  TrashCan, 
  Search, 
  Calendar,
  Close,
  ChevronLeft,
  ChevronRight,
  User,
  Portfolio,
  Events,
  CheckmarkFilled
} from "@carbon/icons-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShimmerButton } from "./ui/shimmer-button";
import { Input } from "./ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { cn } from "./ui/utils";
import { motion, AnimatePresence } from "motion/react";

// Mock data based on screenshot
const initialMockData = [
  { id: "412587963514", tag: "Whitelist", type: "Customer", startDate: "27-05-2025 14:30:50", endDate: "28-05-2025 14:30:50" },
  { id: "102938475615", tag: "Blacklist", type: "Account", startDate: "20-05-2025 14:30:50", endDate: "21-05-2025 14:30:50" },
  { id: "876543210987", tag: "Close Monitoring", type: "Non-Customer", startDate: "15-05-2025 14:30:50", endDate: "16-05-2025 14:30:50" },
  { id: "567890123456", tag: "Whitelist", type: "Customer", startDate: "14-05-2025 14:30:50", endDate: "15-05-2025 14:30:50" },
  { id: "901234567890", tag: "Blacklist", type: "Account", startDate: "09-05-2025 14:30:50", endDate: "10-05-2025 14:30:50" },
  { id: "234567890123", tag: "Close Monitoring", type: "Non-Customer", startDate: "28-04-2025 14:30:50", endDate: "29-04-2025 14:30:50" },
  { id: "987654321012", tag: "Whitelist", type: "Customer", startDate: "27-04-2025 14:30:50", endDate: "28-04-2025 14:30:50" },
  { id: "293847561023", tag: "Blacklist", type: "Account", startDate: "20-04-2025 14:30:50", endDate: "21-04-2025 14:30:50" },
  { id: "345678901234", tag: "Close Monitoring", type: "Non-Customer", startDate: "15-04-2025 14:30:50", endDate: "16-04-2025 14:30:50" },
  { id: "789012345678", tag: "Whitelist", type: "Customer", startDate: "14-04-2025 14:30:50", endDate: "15-04-2025 14:30:50" },
  { id: "012345678901", tag: "Blacklist", type: "Account", startDate: "09-04-2025 14:30:50", endDate: "10-04-2025 14:30:50" },
  { id: "456789012345", tag: "Close Monitoring", type: "Non-Customer", startDate: "28-03-2025 14:30:50", endDate: "29-03-2025 14:30:50" },
  { id: "678901234567", tag: "Whitelist", type: "Customer", startDate: "15-04-2025 14:30:50", endDate: "15-04-2025 14:30:50" },
  { id: "890123456789", tag: "Blacklist", type: "Account", startDate: "14-04-2025 14:30:50", endDate: "10-04-2025 14:30:50" },
  { id: "321654987000", tag: "Close Monitoring", type: "Account", startDate: "09-04-2025 14:30:50", endDate: "29-03-2025 14:30:50" },
];

const pendingMockData = [
  { id: "123456789012", tag: "Whitelist", type: "Customer", startDate: "20-02-2026 10:00:00", endDate: "20-02-2027 10:00:00" },
  { id: "987654321098", tag: "Blacklist", type: "Account", startDate: "19-02-2026 11:30:45", endDate: "19-02-2027 11:30:45" },
  { id: "555666777888", tag: "Close Monitoring", type: "Non-Customer", startDate: "18-02-2026 09:15:20", endDate: "18-02-2027 09:15:20" },
];

export function EntityTagging() {
  const [data, setData] = useState(initialMockData);
  const [pendingData, setPendingData] = useState(pendingMockData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [entityToDelete, setEntityToDelete] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMode, setSuccessMode] = useState<"create" | "update" | "verify" | "reject" | "delete" | null>(null);
  const [activeTab, setActiveTab] = useState("active");
  
  // Filter/Search form state
  const [filterId, setFilterId] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [filterFromDate, setFilterFromDate] = useState("");
  const [filterToDate, setFilterToDate] = useState("");
  
  // Search button enable logic: at least one field must be filled
  const isSearchEnabled = filterId.trim() !== "" || filterType !== "" || filterTag !== "" || filterFromDate !== "" || filterToDate !== "";

  // Pending Filter/Search form state
  const [pendingFilterId, setPendingFilterId] = useState("");
  const [pendingFilterType, setPendingFilterType] = useState("");
  const [pendingFilterTag, setPendingFilterTag] = useState("");
  const [pendingFilterFromDate, setPendingFilterFromDate] = useState("");
  const [pendingFilterToDate, setPendingFilterToDate] = useState("");
  
  const isPendingSearchEnabled = pendingFilterId.trim() !== "" || pendingFilterType !== "" || pendingFilterTag !== "" || pendingFilterFromDate !== "" || pendingFilterToDate !== "";

  // Entity Form states
  const [newEntity, setNewEntity] = useState({
    id: "",
    type: "",
    tag: "",
    fromDate: "",
    toDate: ""
  });

  const [editingEntity, setEditingEntity] = useState({
    id: "",
    type: "",
    tag: "",
    fromDate: "",
    toDate: "",
    originalId: "" // To track which one we are editing
  });

  const [verifyingEntity, setVerifyingEntity] = useState({
    id: "",
    type: "",
    tag: "",
    fromDate: "",
    toDate: ""
  });
  const [verifyComment, setVerifyComment] = useState("");

  const handleAddEntity = () => {
    if (!newEntity.id || !newEntity.type || !newEntity.tag) return;
    
    setIsUpdating(true);
    
    setTimeout(() => {
      const entity = {
        id: newEntity.id,
        tag: newEntity.tag,
        type: newEntity.type,
        startDate: newEntity.fromDate || "20-02-2026 14:30:50",
        endDate: newEntity.toDate || "20-02-2027 14:30:50"
      };
      
      // Add to pending instead of active
      setPendingData([entity, ...pendingData]);
      setNewEntity({ id: "", type: "", tag: "", fromDate: "", toDate: "" });
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("create");
    }, 1500);
  };

  const handleEditEntity = () => {
    if (!editingEntity.id || !editingEntity.type || !editingEntity.tag) return;
    
    setIsUpdating(true);
    
    // Simulate loading for 1.5 seconds
    setTimeout(() => {
      // Find the entity being edited
      const originalEntity = data.find(item => item.id === editingEntity.originalId);
      
      if (originalEntity) {
        // Create the new pending entity
        const updatedEntity = { 
          ...originalEntity, 
          id: editingEntity.id, 
          type: editingEntity.type, 
          tag: editingEntity.tag,
          startDate: editingEntity.fromDate,
          endDate: editingEntity.toDate
        };
        
        // Remove from active data and add to pending
        setData(data.filter(item => item.id !== editingEntity.originalId));
        setPendingData([updatedEntity, ...pendingData]);
      }
      
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("update");
    }, 1500);
  };

  const handleVerifyEntity = () => {
    setIsUpdating(true);
    
    setTimeout(() => {
      // Logic: move from pending to active
      const entityToMove = pendingData.find(item => item.id === verifyingEntity.id);
      if (entityToMove) {
        setData([{
          ...entityToMove,
          tag: verifyingEntity.tag, // Update if changed during verification
          type: verifyingEntity.type,
          startDate: verifyingEntity.fromDate,
          endDate: verifyingEntity.toDate
        }, ...data]);
        setPendingData(pendingData.filter(item => item.id !== verifyingEntity.id));
      }
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("verify");
    }, 1500);
  };

  const handleRejectEntity = () => {
    setIsUpdating(true);
    
    setTimeout(() => {
      // Logic for rejection: just remove from pending
      setPendingData(pendingData.filter(item => item.id !== verifyingEntity.id));
      
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("reject"); 
    }, 1500);
  };

  const openEditModal = (entity: any) => {
    setIsUpdating(false);
    setIsSuccess(false);
    setSuccessMode(null);
    setEditingEntity({
      id: entity.id,
      type: entity.type.toUpperCase(),
      tag: entity.tag,
      fromDate: entity.startDate,
      toDate: entity.endDate,
      originalId: entity.id
    });
    setIsEditModalOpen(true);
  };

  const openVerifyModal = (entity: any) => {
    setIsUpdating(false);
    setIsSuccess(false);
    setSuccessMode(null);
    setVerifyComment("");
    setVerifyingEntity({
      id: entity.id,
      type: entity.type,
      tag: entity.tag,
      fromDate: entity.startDate,
      toDate: entity.endDate
    });
    setIsVerifyModalOpen(true);
  };

  const openDeleteModal = (entity: any) => {
    setEntityToDelete(entity);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteEntity = () => {
    if (!entityToDelete) return;
    // Remove from both to be safe
    setPendingData(pendingData.filter(item => item.id !== entityToDelete.id));
    setData(data.filter(item => item.id !== entityToDelete.id));
    setIsSuccess(true);
    setSuccessMode("delete");
  };

  const openAddModal = () => {
    setIsUpdating(false);
    setIsSuccess(false);
    setSuccessMode(null);
    setNewEntity({ id: "", type: "", tag: "", fromDate: "", toDate: "" });
    setIsAddModalOpen(true);
  };

  const handleContinue = () => {
    setIsSuccess(false);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const SuccessView = ({ onContinue }: { onContinue: () => void }) => {
    let title = "Created";
    let actionText = "Created";
    let subText = "Successfully and Sent for Approval";

    if (successMode === "update") {
      title = "Updated";
      actionText = "Updated";
    } else if (successMode === "verify") {
      title = "Approved";
      actionText = "Approved";
      subText = "Successfully";
    } else if (successMode === "reject") {
      title = "Rejected";
      actionText = "Rejected";
      subText = "Successfully";
    } else if (successMode === "delete") {
      title = "Deleted";
      actionText = "Deleted";
      subText = "Successfully";
    }

    const isDelete = successMode === "delete";
    const brandColor = isDelete ? "#ff4057" : "#2A53A0";

    const checkmarkPath = "M27.2253 12.5395L25.7022 10.9731C25.6712 10.9399 25.6336 10.9136 25.5919 10.8957C25.5502 10.8778 25.5052 10.8688 25.4598 10.8692C25.4142 10.868 25.369 10.8766 25.3271 10.8946C25.2853 10.9125 25.2478 10.9393 25.2173 10.9731L14.6596 21.6088L10.8176 17.7668C10.7864 17.7339 10.7488 17.7078 10.7071 17.6899C10.6654 17.672 10.6206 17.6628 10.5752 17.6628C10.5298 17.6628 10.485 17.672 10.4433 17.6899C10.4016 17.7078 10.364 17.7339 10.3328 17.7668L8.79236 19.3072C8.75944 19.3393 8.73328 19.3777 8.71542 19.4201C8.69756 19.4625 8.68836 19.508 8.68836 19.554C8.68836 19.6 8.69756 19.6455 8.71542 19.6879C8.73328 19.7302 8.75944 19.7686 8.79236 19.8007L13.6387 24.6471C13.9012 24.9341 14.2631 25.1105 14.6509 25.1406C15.0309 25.1074 15.3867 24.94 15.6545 24.6683H15.6671L27.2379 13.033C27.2969 12.9636 27.3283 12.8749 27.3259 12.7839C27.3236 12.6928 27.2878 12.6058 27.2253 12.5395Z";
    const circlePath = "M18 2.42277C21.602 2.42496 25.0919 3.67589 27.875 5.96246C30.6582 8.24904 32.5626 11.4298 33.2637 14.9629C33.9648 18.496 33.4193 22.163 31.7201 25.339C30.0209 28.515 27.2731 31.0038 23.9449 32.3812C20.6167 33.7586 16.9138 33.9395 13.4671 32.8931C10.0205 31.8467 7.04318 29.6377 5.04247 26.6425C3.04176 23.6472 2.14138 20.0509 2.49471 16.4663C2.84804 12.8817 4.43323 9.53039 6.98024 6.98338C8.42406 5.53205 10.1415 4.38164 12.0331 3.59879C13.9247 2.81594 15.9528 2.41622 18 2.42277ZM18 1.54947e-07C14.4399 1.54947e-07 10.9598 1.05568 7.99974 3.03355C5.03966 5.01141 2.73255 7.82263 1.37018 11.1117C0.00779901 14.4008 -0.348661 18.02 0.345873 21.5116C1.04041 25.0033 2.75474 28.2106 5.27208 30.7279C7.78943 33.2453 10.9967 34.9596 14.4884 35.6541C17.98 36.3487 21.5992 35.9922 24.8883 34.6298C28.1774 33.2674 30.9886 30.9603 32.9665 28.0003C34.9443 25.0402 36 21.5601 36 18C36.0003 15.6361 35.5349 13.2953 34.6305 11.1113C33.726 8.92733 32.4001 6.9429 30.7286 5.27139C29.0571 3.59987 27.0727 2.27401 24.8887 1.36954C22.7047 0.465062 20.3639 -0.000310018 18 1.54947e-07Z";

    return (
      <div className="flex flex-col items-center justify-center h-full bg-white rounded-[8px] overflow-hidden relative">
        <DialogTitle className="sr-only">Success: {title}</DialogTitle>
        <div className="flex-1 flex flex-col items-center pt-[34.4px] w-full">
          <div className="w-[36px] h-[36px] mb-[16px] flex items-center justify-center shrink-0">
            {isDelete ? (
              <svg width="36" height="40" viewBox="0 0 36.872 40.634" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9.02802H35.372" stroke="#FF4057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.172 9.02802V5.27802C13.172 4.08454 13.6461 2.93995 14.4899 2.09604C15.3339 1.25213 16.4784 0.778015 17.672 0.778015H19.172C20.3655 0.778015 21.51 1.25213 22.3539 2.09604C23.1979 2.93995 23.672 4.08454 23.672 5.27802V9.02802M31.622 9.02802V35.278C31.622 36.4715 31.1479 37.6161 30.304 38.46C29.46 39.3039 28.3155 39.778 27.122 39.778H9.67197C8.47849 39.778 7.3339 39.3039 6.48999 38.46C5.64608 37.6161 5.17197 36.4715 5.17197 35.278V9.02802" stroke="#FF4057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.672 18.437V29.727" stroke="#FF4057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.1992 18.437V29.727" stroke="#FF4057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={checkmarkPath} fill={brandColor} />
                <path d={circlePath} fill={brandColor} />
              </svg>
            )}
          </div>
          <p style={{ color: brandColor }} className="text-[18px] font-medium font-['Inter',sans-serif] mb-[12px] text-center">{title}</p>
          <div className="text-center px-[20px] space-y-[4px]">
            <p className="text-[#767676] text-[16px] font-normal font-['Inter',sans-serif] leading-[1.2]">
              Entity Tag {actionText}
            </p>
            <p className="text-[#767676] text-[16px] font-normal font-['Inter',sans-serif] leading-[1.2]">
              {subText}
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: brandColor }} className="h-[64px] w-full hover:opacity-90 transition-colors flex items-center justify-center mt-auto cursor-pointer">
          <button 
            onClick={onContinue}
            className="w-full h-full text-white text-[16px] font-normal font-['Inter',sans-serif] cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    );
  };

  const getTagBadge = (tag: string) => {
    switch (tag) {
      case "Whitelist":
        return <Badge className="bg-[#E6F4EA] text-[#1E8E3E] hover:bg-[#D4E9D9] border-none rounded-md font-normal px-2.5 h-[28px] flex items-center text-[16px]">Whitelist</Badge>;
      case "Blacklist":
        return <Badge className="bg-[#FCE8E6] text-[#D93025] hover:bg-[#FAD2CF] border-none rounded-md font-normal px-2.5 h-[28px] flex items-center text-[16px]">Blacklist</Badge>;
      case "Close Monitoring":
        return <Badge className="bg-[#FFF7E1] text-[#F9AB00] hover:bg-[#FEF1D1] border-none rounded-md font-normal px-2.5 h-[28px] flex items-center text-[16px]">Close Monitoring</Badge>;
      default:
        return <Badge variant="outline" className="h-[28px] flex items-center text-[16px] font-normal">{tag}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    const iconClass = "size-3.5 mr-1.5";
    switch (type) {
      case "Customer":
        return (
          <Badge className="bg-[#F3E8FD] text-[#A855F7] hover:bg-[#EBDCFB] border-none rounded-md font-normal px-2.5 h-[28px] flex items-center text-[16px]">
            <User className={iconClass} />
            Customer
          </Badge>
        );
      case "Account":
        return (
          <Badge className="bg-[#EAF2FF] text-[#2A53A0] hover:bg-[#D9E6FF] border-none rounded-md font-normal px-2.5 h-[28px] flex items-center text-[16px]">
            <Portfolio className={iconClass} />
            Account
          </Badge>
        );
      case "Non-Customer":
        return (
          <Badge className="bg-[#F1F3F4] text-[#5F6368] hover:bg-[#E8EAED] border-none rounded-md font-normal px-2.5 h-[28px] flex items-center text-[16px]">
            <Events className={iconClass} />
            Non-Customer
          </Badge>
        );
      default:
        return <Badge variant="outline" className="h-[28px] flex items-center text-[16px] font-normal">{type}</Badge>;
    }
  };

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 font-sans">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0 gap-0">
        <div className="border-b border-slate-200 dark:border-slate-800 h-[48px] flex items-center shrink-0 bg-white dark:bg-slate-950 px-4">
          <TabsList className="bg-transparent h-full p-0 w-full flex">
            <TabsTrigger 
              value="active" 
              className="flex-1 h-full bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-[#2A53A0] data-[state=active]:text-[#2A53A0] dark:data-[state=active]:text-blue-400 rounded-none border-b-[3px] border-transparent text-[#767676] font-normal data-[state=active]:font-medium transition-all text-[15px] shadow-none data-[state=active]:shadow-none border-x-0 border-t-0"
            >
              Active Entity Tags
            </TabsTrigger>
            <TabsTrigger 
              value="pending" 
              className="flex-1 h-full bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-[#2A53A0] data-[state=active]:text-[#2A53A0] dark:data-[state=active]:text-blue-400 rounded-none border-b-[3px] border-transparent text-[#767676] font-normal data-[state=active]:font-medium transition-all text-[15px] shadow-none data-[state=active]:shadow-none border-x-0 border-t-0"
            >
              Pending For Approval
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="active" className="p-4 flex-1 flex flex-col min-h-0 overflow-hidden mt-0 data-[state=inactive]:hidden">
          {/* Title and Action Buttons */}
          <div className="flex items-center justify-between shrink-0 px-1 mb-4">
            <h2 className="text-[21px] font-medium text-slate-800 dark:text-slate-100 tracking-tight">Entity Tagging List</h2>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={toggleFilter}
                className={cn(
                  "h-[46px] px-6 rounded-[8px] border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[14px] font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all",
                  isFilterOpen && "bg-slate-100 dark:bg-slate-800"
                )}
              >
                Filter <FilterIcon className="ml-2 size-4" />
              </Button>
              
              <ShimmerButton onClick={openAddModal} className="h-[46px] px-6 rounded-[8px] bg-[#2A53A0] text-white text-[14px] font-medium">
                Add Now <Add className="size-4 ml-1.5" />
              </ShimmerButton>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2 min-h-0">
            {/* Search Feature Section (Toggled by Filter) */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                  animate={{ height: "auto", opacity: 1, marginBottom: 12 }}
                  exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                  className="overflow-hidden shrink-0"
                >
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[8px] p-6 shadow-sm relative">
                    <button 
                      onClick={toggleFilter} 
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <Close className="size-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                      <div className="space-y-1.5">
                        <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">Entity ID</Label>
                        <Input 
                          placeholder="Enter Entity ID" 
                          value={filterId}
                          onChange={(e) => setFilterId(e.target.value)}
                          className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 h-[46px] rounded-[8px] text-[16px] px-4"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">Type</Label>
                        <Select value={filterType} onValueChange={setFilterType}>
                          <SelectTrigger className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 !h-[46px] rounded-[8px] text-[16px] text-slate-500 px-4">
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent className="rounded-[8px] border-[#C6C6C6]">
                            <SelectItem value="Customer">Customer</SelectItem>
                            <SelectItem value="Account">Account</SelectItem>
                            <SelectItem value="Non-Customer">Non-Customer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">Tag</Label>
                        <Select value={filterTag} onValueChange={setFilterTag}>
                          <SelectTrigger className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 !h-[46px] rounded-[8px] text-[16px] text-slate-500 px-4">
                            <SelectValue placeholder="Select Tag" />
                          </SelectTrigger>
                          <SelectContent className="rounded-[8px] border-[#C6C6C6]">
                            <SelectItem value="Whitelist">Whitelist</SelectItem>
                            <SelectItem value="Blacklist">Blacklist</SelectItem>
                            <SelectItem value="Close Monitoring">Close Monitoring</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">From Date</Label>
                        <div className="relative">
                          <Input 
                            placeholder="YYYY-MM-DD" 
                            value={filterFromDate}
                            onChange={(e) => setFilterFromDate(e.target.value)}
                            className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 h-[46px] rounded-[8px] pr-10 text-[16px] px-4" 
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">To Date</Label>
                        <div className="relative">
                          <Input 
                            placeholder="YYYY-MM-DD" 
                            value={filterToDate}
                            onChange={(e) => setFilterToDate(e.target.value)}
                            className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 h-[46px] rounded-[8px] pr-10 text-[16px] px-4" 
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <Button 
                        disabled={!isSearchEnabled}
                        className="h-[46px] w-full rounded-[8px] bg-[#2A53A0] hover:bg-[#1e3d7a] text-white text-[16px] font-medium disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all"
                      >
                        Search <Search className="ml-2 size-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Carbon Style Data Table */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-[8px] overflow-hidden flex-1 flex flex-col min-h-0 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex-1 overflow-auto no-scrollbar">
              <Table>
                <TableHeader className="bg-[#F0F0F0] dark:bg-[#262626] sticky top-0 z-10 h-[48px]">
                  <TableRow className="hover:bg-transparent border-b border-slate-300 dark:border-slate-700 h-full">
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-[16px] border-r border-slate-300/50 dark:border-slate-700/50 h-[48px] bg-[#F0F0F0] dark:bg-[#262626]">
                      <div className="flex items-center gap-1 group px-1">
                        Entity ID 
                        <Sort className="size-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-[16px] border-r border-slate-300/50 dark:border-slate-700/50 h-[48px] bg-[#F0F0F0] dark:bg-[#262626]">
                      <div className="flex items-center gap-1 group px-1">
                        Entity Tag
                        <Sort className="size-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-[16px] border-r border-slate-300/50 dark:border-slate-700/50 h-[48px] bg-[#F0F0F0] dark:bg-[#262626]">
                      <div className="flex items-center gap-1 group px-1">
                        Type
                        <Sort className="size-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-[16px] border-r border-slate-300/50 dark:border-slate-700/50 h-[48px] bg-[#F0F0F0] dark:bg-[#262626]">
                      <div className="flex items-center gap-1 group px-1">
                        Start Date
                        <Sort className="size-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-[16px] border-r border-slate-300/50 dark:border-slate-700/50 h-[48px] bg-[#F0F0F0] dark:bg-[#262626]">
                      <div className="flex items-center gap-1 group px-1">
                        End Date
                        <Sort className="size-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-center text-[16px] h-[48px] bg-[#F0F0F0] dark:bg-[#262626]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row, idx) => (
                    <TableRow key={idx} className="border-b border-slate-200 dark:border-slate-800/80 hover:bg-[#F4F4F4] dark:hover:bg-[#353535] transition-colors h-[46px]">
                      <TableCell className="text-[#161616] dark:text-[#C6C6C6] py-0 px-3 font-normal text-[16px] h-[46px]">{row.id}</TableCell>
                      <TableCell className="py-0 px-3 h-[46px]">{getTagBadge(row.tag)}</TableCell>
                      <TableCell className="py-0 px-3 h-[46px]">{getTypeBadge(row.type)}</TableCell>
                      <TableCell className="py-0 px-3 text-[#161616] dark:text-[#C6C6C6] text-[16px] h-[46px]">{row.startDate}</TableCell>
                      <TableCell className="py-0 px-3 text-[#161616] dark:text-[#C6C6C6] text-[16px] h-[46px]">{row.endDate}</TableCell>
                      <TableCell className="py-0 px-3 h-[46px]">
                        <div className="flex items-center justify-center gap-3">
                          <button 
                            onClick={() => openEditModal(row)}
                            className="size-[28px] rounded-[6px] bg-[#EAF2FF] text-[#2A53A0] hover:bg-[#D9E6FF] flex items-center justify-center transition-all"
                          >
                            <EditIcon className="size-4" />
                          </button>
                          <button 
                            onClick={() => openDeleteModal(row)}
                            className="size-[28px] rounded-[6px] bg-[#FCE8E6] text-[#D93025] hover:bg-[#FAD2CF] flex items-center justify-center transition-all"
                          >
                            <TrashCan className="size-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination for Active */}
            <div className="h-[48px] bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 overflow-hidden">
              <div className="flex items-center h-full">
                <div className="flex items-center px-4 h-full border-r border-slate-200 dark:border-slate-800">
                  <span className="text-[14px] font-normal text-[#333333] dark:text-slate-300 mr-2">Items per page:</span>
                  <Select defaultValue="15">
                    <SelectTrigger className="w-[60px] h-full border-none bg-transparent hover:bg-[#E5E5E5] dark:hover:bg-slate-800 rounded-none px-2 focus:ring-0 text-[16px] text-[#161616] dark:text-white font-normal shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="px-4 flex items-center h-full">
                  <span className="text-[16px] font-normal text-[#161616] dark:text-white">1–15</span>
                  <span className="text-[16px] font-normal text-[#525252] dark:text-slate-400 mx-1">of</span>
                  <span className="text-[16px] font-normal text-[#161616] dark:text-white mr-1">15</span>
                  <span className="text-[16px] font-normal text-[#525252] dark:text-slate-400">items</span>
                </div>
              </div>
              <div className="flex items-center h-full">
                <div className="flex items-center h-full border-l border-slate-200 dark:border-slate-800 px-4">
                  <Select defaultValue="1">
                    <SelectTrigger className="w-[60px] h-full border-none bg-transparent hover:bg-[#E5E5E5] dark:hover:bg-slate-800 rounded-none px-2 focus:ring-0 text-[16px] text-[#161616] dark:text-white font-normal shadow-none gap-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-[16px] font-normal text-[#525252] dark:text-slate-400 ml-2 whitespace-nowrap">of 1 pages</span>
                </div>
                <div className="flex items-center h-full border-l border-slate-200 dark:border-slate-800">
                  <button disabled className="w-[48px] h-full flex items-center justify-center hover:bg-[#E5E5E5] dark:hover:bg-slate-800 disabled:opacity-25 text-[#161616] dark:text-white transition-colors cursor-pointer">
                    <ChevronLeft className="size-5" />
                  </button>
                  <div className="w-px h-full bg-slate-200 dark:bg-slate-800" />
                  <button disabled className="w-[48px] h-full flex items-center justify-center hover:bg-[#E5E5E5] dark:hover:bg-slate-800 disabled:opacity-25 text-[#161616] dark:text-white transition-colors cursor-pointer">
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="pending" className="p-4 flex-1 flex flex-col min-h-0 overflow-hidden mt-0 data-[state=inactive]:hidden">
        {/* Title and Filter Button */}
        <div className="flex items-center justify-between shrink-0 px-1 mb-4">
          <h2 className="text-[21px] font-medium text-slate-800 dark:text-slate-100 tracking-tight">Pending For Approval</h2>
          <Button 
            variant="outline" 
            onClick={toggleFilter}
            className={cn(
              "h-[46px] px-6 rounded-[8px] border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[14px] font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all",
              isFilterOpen && "bg-slate-100 dark:bg-slate-800"
            )}
          >
            Filter <FilterIcon className="ml-2 size-4" />
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {/* Search Feature Section Pending (Toggled by Filter) */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                animate={{ height: "auto", opacity: 1, marginBottom: 12 }}
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                className="overflow-hidden shrink-0"
              >
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[8px] p-6 shadow-sm relative">
                  <button 
                    onClick={toggleFilter} 
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <Close className="size-4" />
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                    <div className="space-y-1.5">
                      <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">Entity ID</Label>
                      <Input 
                        placeholder="Enter Entity ID" 
                        value={pendingFilterId}
                        onChange={(e) => setPendingFilterId(e.target.value)}
                        className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 h-[46px] rounded-[8px] text-[16px] px-4"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">Type</Label>
                      <Select value={pendingFilterType} onValueChange={setPendingFilterType}>
                        <SelectTrigger className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 !h-[46px] rounded-[8px] text-[16px] text-slate-500 px-4">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-[8px] border-[#C6C6C6]">
                          <SelectItem value="Customer">Customer</SelectItem>
                          <SelectItem value="Account">Account</SelectItem>
                          <SelectItem value="Non-Customer">Non-Customer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">Tag</Label>
                      <Select value={pendingFilterTag} onValueChange={setPendingFilterTag}>
                        <SelectTrigger className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 !h-[46px] rounded-[8px] text-[16px] text-slate-500 px-4">
                          <SelectValue placeholder="Select Tag" />
                        </SelectTrigger>
                        <SelectContent className="rounded-[8px] border-[#C6C6C6]">
                          <SelectItem value="Whitelist">Whitelist</SelectItem>
                          <SelectItem value="Blacklist">Blacklist</SelectItem>
                          <SelectItem value="Close Monitoring">Close Monitoring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">From Date</Label>
                      <div className="relative">
                        <Input 
                          placeholder="YYYY-MM-DD" 
                          value={pendingFilterFromDate}
                          onChange={(e) => setPendingFilterFromDate(e.target.value)}
                          className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 h-[46px] rounded-[8px] pr-10 text-[16px] px-4" 
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[14px] font-medium text-[#161616] dark:text-slate-300">To Date</Label>
                      <div className="relative">
                        <Input 
                          placeholder="YYYY-MM-DD" 
                          value={pendingFilterToDate}
                          onChange={(e) => setPendingFilterToDate(e.target.value)}
                          className="bg-white dark:bg-slate-800 border-[#C6C6C6] dark:border-slate-700 h-[46px] rounded-[8px] pr-10 text-[16px] px-4" 
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <Button 
                      disabled={!isPendingSearchEnabled}
                      className="h-[46px] w-full rounded-[8px] bg-[#2A53A0] hover:bg-[#1e3d7a] text-white text-[16px] font-medium disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all"
                    >
                      Search <Search className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pending Table */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-[8px] overflow-hidden flex-1 flex flex-col min-h-0 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex-1 overflow-auto no-scrollbar">
              <Table>
                <TableHeader className="bg-[#F0F0F0] dark:bg-[#262626] sticky top-0 z-10 h-[48px]">
                  <TableRow className="hover:bg-transparent border-b border-slate-300 dark:border-slate-700 h-full">
                    <TableHead className="py-0 text-[#2A53A0] font-medium text-[16px] border-r border-slate-300/50 h-[48px] bg-[#F0F0F0]">Entity ID</TableHead>
                    <TableHead className="py-0 text-[#2A53A0] font-medium text-[16px] border-r border-slate-300/50 h-[48px] bg-[#F0F0F0]">Entity Tag</TableHead>
                    <TableHead className="py-0 text-[#2A53A0] font-medium text-[16px] border-r border-slate-300/50 h-[48px] bg-[#F0F0F0]">Type</TableHead>
                    <TableHead className="py-0 text-[#2A53A0] font-medium text-[16px] border-r border-slate-300/50 h-[48px] bg-[#F0F0F0]">Start Date</TableHead>
                    <TableHead className="py-0 text-[#2A53A0] font-medium text-[16px] border-r border-slate-300/50 h-[48px] bg-[#F0F0F0]">End Date</TableHead>
                    <TableHead className="py-0 text-[#2A53A0] font-medium text-center text-[16px] h-[48px] bg-[#F0F0F0]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingData.map((row, idx) => (
                    <TableRow key={idx} className="border-b border-slate-200 hover:bg-[#F4F4F4] transition-colors h-[46px]">
                      <TableCell className="text-[#161616] py-0 px-3 font-normal text-[16px] h-[46px]">{row.id}</TableCell>
                      <TableCell className="py-0 px-3 h-[46px]">{getTagBadge(row.tag)}</TableCell>
                      <TableCell className="py-0 px-3 h-[46px]">{getTypeBadge(row.type)}</TableCell>
                      <TableCell className="py-0 px-3 text-[#161616] text-[16px] h-[46px]">{row.startDate}</TableCell>
                      <TableCell className="py-0 px-3 text-[#161616] text-[16px] h-[46px]">{row.endDate}</TableCell>
                      <TableCell className="py-0 px-3 h-[46px]">
                        <div className="flex items-center justify-center gap-3">
                          <button 
                            onClick={() => openVerifyModal(row)}
                            className="size-[28px] rounded-[6px] bg-[#F6F2FF] text-[#8A3FFC] hover:bg-[#EBE0FF] flex items-center justify-center transition-all group"
                          >
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L4 5V11C4 16.06 7.41 20.74 12 22C16.59 20.74 20 16.06 20 11V5L12 2Z" fill="currentColor" />
                              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => openDeleteModal(row)}
                            className="size-[28px] rounded-[6px] bg-[#FCE8E6] text-[#D93025] hover:bg-[#FAD2CF] flex items-center justify-center transition-all"
                          >
                            <TrashCan className="size-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Pagination Pending */}
            <div className="h-[48px] bg-white border-t border-slate-200 flex items-center justify-between shrink-0 overflow-hidden">
               <div className="px-4 flex items-center h-full"><span className="text-[14px] font-normal text-[#333333] mr-2">Items per page: 15</span></div>
               <div className="flex items-center h-full">
                 <div className="px-4 border-l border-slate-200 h-full flex items-center"><span className="text-[16px]">1-{pendingData.length} of {pendingData.length} items</span></div>
                 <div className="flex items-center h-full border-l border-slate-200">
                    <button disabled className="w-[48px] h-full flex items-center justify-center disabled:opacity-25"><ChevronLeft/></button>
                    <button disabled className="w-[48px] h-full flex items-center justify-center disabled:opacity-25"><ChevronRight/></button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </TabsContent>
      </Tabs>

      {/* Dialogs at the end - Always accessible regardless of active tab */}
      
      {/* Add Dialog - Enhanced with Loader and Correct Icons */}
      <Dialog open={isAddModalOpen} onOpenChange={(open) => { if (!isUpdating) { setIsAddModalOpen(open); if (!open) setIsSuccess(false); } }}>
        <DialogContent className={cn(
          "p-0 overflow-hidden border-[#C6C6C6] shadow-2xl rounded-[8px] flex flex-col bg-white border [&>button]:hidden transition-all duration-300",
          isSuccess ? "w-[360px] h-[260px]" : "max-w-[820px] h-[600px]"
        )}>
          {isSuccess ? (
            <SuccessView onContinue={() => { setIsAddModalOpen(false); setIsSuccess(false); setActiveTab("pending"); }} />
          ) : (
            <>
              <DialogHeader className="bg-[#2A53A0] h-[64px] px-[30px] flex flex-row items-center justify-between shrink-0 space-y-0 relative">
                <DialogTitle className="text-[21px] font-normal text-white font-['Inter',sans-serif]">Add Entity Tag</DialogTitle>
                {!isUpdating && (
                  <button onClick={() => setIsAddModalOpen(false)} className="absolute right-[20px] top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 transition-colors rounded-full flex items-center justify-center transition-all">
                    <Close className="size-[20px] text-white" />
                  </button>
                )}
                <DialogDescription className="sr-only">Add new entity tag.</DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto p-[24px] space-y-[20px]">
                <div className="space-y-[8px] px-[10px]"><Label className="text-[16px] font-normal text-[#333]">Entity ID</Label><Input placeholder="Enter Entity ID" value={newEntity.id} onChange={(e) => setNewEntity({...newEntity, id: e.target.value})} disabled={isUpdating} className="!h-[46px] border-[#BDBDBD] rounded-[8px] text-[16px] bg-white"/></div>
                <div className="space-y-[8px] px-[10px]"><Label className="text-[16px] font-normal text-[#333]">Entity Type</Label><Select value={newEntity.type} onValueChange={(val) => setNewEntity({...newEntity, type: val})} disabled={isUpdating}><SelectTrigger className="!h-[46px] border-[#C6C6C6] rounded-[8px] text-[16px] bg-white"><SelectValue placeholder="Select Entity Type" /></SelectTrigger><SelectContent><SelectItem value="Customer">Customer</SelectItem><SelectItem value="Account">Account</SelectItem></SelectContent></Select></div>
                <div className="space-y-[8px] px-[10px]"><Label className="text-[16px] font-normal text-[#333]">Entity Tag</Label><Select value={newEntity.tag} onValueChange={(val) => setNewEntity({...newEntity, tag: val})} disabled={isUpdating}><SelectTrigger className="!h-[46px] border-[#C6C6C6] rounded-[8px] text-[16px] bg-white"><SelectValue placeholder="Select Entity Tag" /></SelectTrigger><SelectContent><SelectItem value="Whitelist">Whitelist</SelectItem><SelectItem value="Blacklist">Blacklist</SelectItem></SelectContent></Select></div>
                <div className="flex gap-[16px] px-[10px]">
                  <div className="flex-1 space-y-[8px]">
                    <Label className="text-[16px] font-normal text-[#333]">From Date</Label>
                    <div className="relative">
                      <Input placeholder="DD-MM-YYYY" value={newEntity.fromDate} onChange={(e) => setNewEntity({...newEntity, fromDate: e.target.value})} disabled={isUpdating} className="!h-[46px] border-[#BDBDBD] rounded-[8px] bg-white pr-[40px]"/>
                      <Calendar className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[18px] text-[#767676]" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-[8px]">
                    <Label className="text-[16px] font-normal text-[#333]">To Date</Label>
                    <div className="relative">
                      <Input placeholder="DD-MM-YYYY" value={newEntity.toDate} onChange={(e) => setNewEntity({...newEntity, toDate: e.target.value})} disabled={isUpdating} className="!h-[46px] border-[#BDBDBD] rounded-[8px] bg-white pr-[40px]"/>
                      <Calendar className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[18px] text-[#767676]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[64px] shrink-0 flex border-t border-[#C6C6C6] overflow-hidden rounded-b-[8px] bg-[#F4F4F4] gap-3">
                {isUpdating ? (
                  <>
                    <div className="flex-1 flex items-center justify-center bg-[#F4F4F4]">
                      <button disabled className="text-[#2A53A0] text-[16px] font-medium font-['Inter',sans-serif]">Cancel</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-3 bg-[#F4F4F4]">
                      <div className="relative size-[16px]">
                        <div className="absolute inset-0 border-[2px] border-[#C6C6C6] rounded-full" />
                        <div className="absolute inset-0 border-[2px] border-transparent border-t-[#2A53A0] rounded-full animate-spin" />
                      </div>
                      <span className="text-[#525252] text-[16px] font-normal font-['Inter',sans-serif] tracking-[0.16px]">Please wait it's Loading</span>
                    </div>
                  </>
                ) : (
                  <>
                    <button onClick={() => setIsAddModalOpen(false)} className="flex-1 bg-[#F4F4F4] hover:bg-[#E5E5E5] transition-colors text-[#2A53A0] text-[16px] font-medium font-['Inter',sans-serif]">Cancel</button>
                    <button onClick={handleAddEntity} className="flex-1 bg-[#2A53A0] hover:bg-[#1e3d7a] transition-colors text-white text-[16px] font-normal font-['Inter',sans-serif] flex items-center justify-center gap-3">Create <Add className="size-[16px]" /></button>
                  </>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog - Enhanced with Loader and Correct Icons */}
      <Dialog open={isEditModalOpen} onOpenChange={(open) => { if (!isUpdating) { setIsEditModalOpen(open); if (!open) setIsSuccess(false); } }}>
        <DialogContent className={cn(
          "p-0 overflow-hidden border-[#C6C6C6] shadow-2xl rounded-[8px] flex flex-col bg-white border [&>button]:hidden transition-all duration-300",
          isSuccess ? "w-[360px] h-[260px]" : "max-w-[820px] h-[600px]"
        )}>
          {isSuccess ? (
            <SuccessView onContinue={() => { setIsEditModalOpen(false); setIsSuccess(false); setActiveTab("pending"); }} />
          ) : (
            <>
              <DialogHeader className="bg-[#2A53A0] h-[64px] px-[30px] flex flex-row items-center justify-between shrink-0 space-y-0 relative">
                <DialogTitle className="text-[21px] font-normal text-white font-['Inter',sans-serif]">Edit Entity Tag</DialogTitle>
                {!isUpdating && (
                  <button onClick={() => setIsEditModalOpen(false)} className="absolute right-[20px] top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 transition-colors rounded-full flex items-center justify-center transition-all">
                    <Close className="size-[20px] text-white" />
                  </button>
                )}
                <DialogDescription className="sr-only">Edit entity tag.</DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto p-[24px] space-y-[20px]">
                <div className="space-y-[8px] px-[10px]"><Label className="text-[16px] font-normal text-[#333]">Entity ID</Label><Input value={editingEntity.id} onChange={(e) => setEditingEntity({...editingEntity, id: e.target.value})} disabled={isUpdating} className="!h-[46px] border-[#BDBDBD] rounded-[8px] text-[16px] bg-white"/></div>
                <div className="space-y-[8px] px-[10px]"><Label className="text-[16px] font-normal text-[#333]">Entity Type</Label><Select value={editingEntity.type} onValueChange={(val) => setEditingEntity({...editingEntity, type: val})} disabled={isUpdating}><SelectTrigger className="!h-[46px] border-[#C6C6C6] rounded-[8px] text-[16px] bg-white"><SelectValue placeholder="Select Entity Type" /></SelectTrigger><SelectContent><SelectItem value="CUSTOMER">CUSTOMER</SelectItem><SelectItem value="ACCOUNT">ACCOUNT</SelectItem></SelectContent></Select></div>
                <div className="space-y-[8px] px-[10px]"><Label className="text-[16px] font-normal text-[#333]">Entity Tag</Label><Select value={editingEntity.tag} onValueChange={(val) => setEditingEntity({...editingEntity, tag: val})} disabled={isUpdating}><SelectTrigger className="!h-[46px] border-[#C6C6C6] rounded-[8px] text-[16px] bg-white"><SelectValue placeholder="Select Entity Tag" /></SelectTrigger><SelectContent><SelectItem value="Whitelist">Whitelist</SelectItem><SelectItem value="Blacklist">Blacklist</SelectItem></SelectContent></Select></div>
                <div className="flex gap-[16px] px-[10px]">
                  <div className="flex-1 space-y-[8px]">
                    <Label className="text-[16px] font-normal text-[#333]">From Date</Label>
                    <div className="relative">
                      <Input value={editingEntity.fromDate} onChange={(e) => setEditingEntity({...editingEntity, fromDate: e.target.value})} disabled={isUpdating} className="!h-[46px] border-[#BDBDBD] rounded-[8px] bg-white pr-[40px]"/>
                      <Calendar className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[18px] text-[#767676]" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-[8px]">
                    <Label className="text-[16px] font-normal text-[#333]">To Date</Label>
                    <div className="relative">
                      <Input value={editingEntity.toDate} onChange={(e) => setEditingEntity({...editingEntity, toDate: e.target.value})} disabled={isUpdating} className="!h-[46px] border-[#BDBDBD] rounded-[8px] bg-white pr-[40px]"/>
                      <Calendar className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[18px] text-[#767676]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[64px] shrink-0 flex border-t border-[#C6C6C6] overflow-hidden rounded-b-[8px] bg-[#F4F4F4] gap-3">
                {isUpdating ? (
                  <>
                    <div className="flex-1 flex items-center justify-center bg-[#F4F4F4]">
                      <button disabled className="text-[#2A53A0] text-[16px] font-medium font-['Inter',sans-serif]">Cancel</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-3 bg-[#F4F4F4]">
                      <div className="relative size-[16px]">
                        <div className="absolute inset-0 border-[2px] border-[#C6C6C6] rounded-full" />
                        <div className="absolute inset-0 border-[2px] border-transparent border-t-[#2A53A0] rounded-full animate-spin" />
                      </div>
                      <span className="text-[#525252] text-[16px] font-normal font-['Inter',sans-serif] tracking-[0.16px]">Please wait it's Loading</span>
                    </div>
                  </>
                ) : (
                  <>
                    <button onClick={() => setIsEditModalOpen(false)} className="flex-1 bg-[#F4F4F4] hover:bg-[#E5E5E5] transition-colors text-[#2A53A0] text-[16px] font-medium font-['Inter',sans-serif]">Cancel</button>
                    <button onClick={handleEditEntity} className="flex-1 bg-[#2A53A0] hover:bg-[#1e3d7a] transition-colors text-white text-[16px] font-normal font-['Inter',sans-serif] flex items-center justify-center gap-3">Update <CheckmarkFilled className="size-[16px]" /></button>
                  </>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Verify / Approve Dialog - Maximum Width, Single Row Metadata, No Scrollbar */}
      <Dialog open={isVerifyModalOpen} onOpenChange={(open) => { if (!isUpdating) { setIsVerifyModalOpen(open); if (!open) setVerifyComment(""); } }}>
        <DialogContent className={cn(
          "p-0 overflow-hidden border-[#C6C6C6] shadow-2xl rounded-[8px] flex flex-col bg-white border [&>button]:hidden transition-all duration-300",
          isSuccess ? "w-[360px] h-[260px]" : "max-w-[1240px] w-[96vw]"
        )}>
          {isSuccess ? (
            <SuccessView onContinue={() => {
              setIsVerifyModalOpen(false);
              setIsSuccess(false);
              if (successMode === "verify") {
                setActiveTab("active");
              } else {
                setActiveTab("pending");
              }
            }} />
          ) : (
            <>
              <DialogHeader className="bg-[#2A53A0] h-[64px] px-[30px] flex flex-row items-center justify-between shrink-0 space-y-0 relative">
                <DialogTitle className="text-[21px] font-normal text-white font-['Inter',sans-serif]">Approve Entity Tag</DialogTitle>
                {!isUpdating && (
                  <button onClick={() => setIsVerifyModalOpen(false)} className="absolute right-[20px] top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 transition-colors rounded-full flex items-center justify-center transition-all">
                    <Close className="size-[20px] text-white" />
                  </button>
                )}
                <DialogDescription className="sr-only">Approve entity tag request.</DialogDescription>
              </DialogHeader>

              <div className="p-[40px] pb-[20px] space-y-[40px] flex-1 overflow-visible">
                {/* Meta Data Details - Minimalist 2-Column Grid */}
                <div className="space-y-[16px] border-b border-[#F4F4F4] pb-[20px]">
                  {/* Pair 1: ID & Type */}
                  <div className="space-y-[4px]">
                    <div className="grid grid-cols-2 gap-[32px]">
                      <span className="text-[#767676] text-[14px] font-normal font-['Inter',sans-serif]">Entity ID</span>
                      <span className="text-[#767676] text-[14px] font-normal font-['Inter',sans-serif]">Entity Type</span>
                    </div>
                    <div className="grid grid-cols-2 gap-[32px]">
                      <span className="text-[#161616] text-[16px] font-semibold font-['Inter',sans-serif] break-all">{verifyingEntity.id}</span>
                      <span className="text-[#161616] text-[16px] font-semibold font-['Inter',sans-serif] uppercase">{verifyingEntity.type}</span>
                    </div>
                  </div>

                  {/* Pair 2: Tag & Start Date */}
                  <div className="space-y-[4px]">
                    <div className="grid grid-cols-2 gap-[32px]">
                      <span className="text-[#767676] text-[14px] font-normal font-['Inter',sans-serif]">Entity Tag</span>
                      <span className="text-[#767676] text-[14px] font-normal font-['Inter',sans-serif]">Start Date</span>
                    </div>
                    <div className="grid grid-cols-2 gap-[32px]">
                      <div className="flex items-center">
                        {getTagBadge(verifyingEntity.tag)}
                      </div>
                      <span className="text-[#161616] text-[16px] font-semibold font-['Inter',sans-serif]">{verifyingEntity.fromDate}</span>
                    </div>
                  </div>

                  {/* Pair 3: End Date */}
                  <div className="space-y-[4px]">
                    <div className="grid grid-cols-2 gap-[32px]">
                      <span className="text-[#767676] text-[14px] font-normal font-['Inter',sans-serif]">End Date</span>
                      <span className="invisible">Placeholder</span>
                    </div>
                    <div className="grid grid-cols-2 gap-[32px]">
                      <span className="text-[#161616] text-[16px] font-semibold font-['Inter',sans-serif]">{verifyingEntity.toDate}</span>
                      <span className="invisible">Placeholder</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-[12px]">
                  <Label className="text-[16px] font-normal text-[#333] font-['Inter',sans-serif]">
                    Comment<span className="text-[#DD170E] ml-1">*</span>
                  </Label>
                  <textarea 
                    className="w-full h-[120px] p-[16px] border border-[#C6C6C6] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-[#2A53A0] text-[16px] text-[#161616] placeholder:text-[#707070] font-['Inter',sans-serif] resize-none"
                    placeholder="Enter comment here"
                    value={verifyComment}
                    disabled={isUpdating}
                    onChange={(e) => setVerifyComment(e.target.value)}
                  />
                </div>
              </div>

              {/* Action Footer - Compact and Aligned */}
              <div className="h-[64px] border-t border-[#C6C6C6] flex shrink-0 bg-[#F4F4F4] relative gap-3">
                {isUpdating ? (
                  <>
                    <div className="flex-1 flex items-center justify-center bg-[#F4F4F4]">
                      <button disabled className="text-[#2A53A0] text-[16px] font-normal font-['Inter',sans-serif]">Cancel</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-3 bg-[#F4F4F4]">
                      <div className="relative size-[16px]">
                        <div className="absolute inset-0 border-[2px] border-[#C6C6C6] rounded-full" />
                        <div className="absolute inset-0 border-[2px] border-transparent border-t-[#2A53A0] rounded-full animate-spin" />
                      </div>
                      <span className="text-[#525252] text-[16px] font-normal font-['Inter',sans-serif] tracking-[0.16px]">Please wait it's Loading</span>
                    </div>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setIsVerifyModalOpen(false)}
                      className="flex-1 bg-white hover:bg-[#F4F4F4] transition-colors text-[#2A53A0] text-[16px] font-normal font-['Inter',sans-serif] tracking-[0.16px]"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleRejectEntity}
                      disabled={!verifyComment}
                      className="flex-1 bg-white hover:bg-red-50 transition-colors text-[#FF4057] text-[16px] font-normal font-['Inter',sans-serif] flex items-center justify-center gap-3 tracking-[0.16px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Reject <Close className="size-[16px]" />
                    </button>
                    <button 
                      onClick={handleVerifyEntity}
                      disabled={!verifyComment}
                      className="flex-[1.2] bg-[#2A53A0] hover:bg-[#1e3d7a] transition-colors text-white text-[16px] font-normal font-['Inter',sans-serif] flex items-center justify-center gap-3 tracking-[0.16px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Accept <CheckmarkFilled className="size-[16px]" />
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteModalOpen} onOpenChange={(open) => { setIsDeleteModalOpen(open); if (!open) { setIsSuccess(false); setEntityToDelete(null); } }}>
        <DialogContent className="w-[360px] h-[260px] p-0 overflow-hidden border-none shadow-2xl rounded-[8px] bg-white [&>button]:hidden flex flex-col">
          {isSuccess ? (
            <SuccessView onContinue={() => { setIsDeleteModalOpen(false); setIsSuccess(false); setEntityToDelete(null); }} />
          ) : (
            <>
              <DialogTitle className="sr-only">Confirm Deletion</DialogTitle>
              <div className="flex-1 flex flex-col items-center justify-center pt-[20px] pb-[10px]">
                {/* Info Icon (matching Figma) */}
                <div className="size-[36px] mb-[16px]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="14" stroke="#FF4057" strokeWidth="2.6" />
                    <path d="M18 10V12.5" stroke="#FF4057" strokeWidth="2.6" strokeLinecap="round" />
                    <path d="M18 16.5V26" stroke="#FF4057" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </div>
                
                <p className="text-[#ff4057] text-[16px] font-medium font-['Inter',sans-serif] mb-[8px] text-center">Are you sure</p>
                
                <div className="text-center px-[20px]">
                  <p className="text-[#767676] text-[16px] font-normal font-['Inter',sans-serif] leading-[1.4]">
                    Do you want to Delete <br /> Entity Tag
                  </p>
                </div>
              </div>
              
              <div className="flex h-[64px] border-t border-[#f1f1f1] bg-[#F4F4F4] gap-3">
                <button 
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="flex-1 bg-white hover:bg-[#e8e8e8] transition-colors text-[#ff4057] text-[16px] font-normal font-['Inter',sans-serif] tracking-[0.16px]"
                >
                  No, Cancel
                </button>
                <button 
                  onClick={handleDeleteEntity}
                  className="flex-1 bg-[#ff4057] hover:bg-[#e0384c] transition-colors text-white text-[16px] font-normal font-['Inter',sans-serif]"
                >
                  Yes, Delete
                </button>
              </div>
            </>
          )}
          <DialogDescription className="sr-only">Confirm entity tag deletion.</DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
