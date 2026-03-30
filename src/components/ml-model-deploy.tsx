import * as React from "react";
import { useState, useRef } from "react";
import {
  Cognitive,
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
  Events,
  SettingsAdjust,
  Draggable,
  CloudUpload,
  DataBase,
} from "@carbon/icons-react";
import FileUploader, { type FileUploaderHandle } from "@carbon/react/es/components/FileUploader/FileUploader";
import "../styles/carbon-upload.css";
import { SnowflakeLoader } from "./ui/snowflake-loader";
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
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { cn } from "./ui/utils";
import { motion, AnimatePresence } from "motion/react";

// Mock data for ML models based on reference image
const initialMockData = [
  { 
    eventName: "EFM Alerts", 
    entityType: "Alert", 
    modelType: "Alert", 
    modelName: "Alert Model", 
    modelDescription: "Predictive model for detecting alerts like false positive alerts", 
    modelAlgorithm: "Gradient boosted Trees", 
    modelFilename: "generalized_alert_model.pmml", 
    genuineRange: "0 - 50", 
    fraudRange: "> 50", 
    modelVersion: "1.0.0", 
    uploadedDate: "25/04/2025, 12:22:15", 
    lastActivatedDate: "25/06/2025, 12:22:15", 
    lastDeactivatedDate: "N/A", 
    currentStatus: "Active" 
  },
  { 
    eventName: "Cards", 
    entityType: "Card", 
    modelType: "Event", 
    modelName: "Cards Model", 
    modelDescription: "Predictive model for detecting fraudulent account transactions", 
    modelAlgorithm: "Gradient boosted Trees", 
    modelFilename: "cards.pmml", 
    genuineRange: "0 - 50", 
    fraudRange: "> 50", 
    modelVersion: "1.0.0", 
    uploadedDate: "25/04/2025, 12:19:25", 
    lastActivatedDate: "05/08/2025, 16:38:22", 
    lastDeactivatedDate: "N/A", 
    currentStatus: "Active" 
  },
  { 
    eventName: "", 
    entityType: "N/A", 
    modelType: "", 
    modelName: "Model Selection for Alerts", 
    modelDescription: "Rule system for alert model selection", 
    modelAlgorithm: "", 
    modelFilename: "getAlRModels.pmml", 
    genuineRange: "", 
    fraudRange: "", 
    modelVersion: "1.0.0", 
    uploadedDate: "25/04/2025, 12:18:02", 
    lastActivatedDate: "25/06/2025, 12:18:06", 
    lastDeactivatedDate: "25/07/2025, 12:24:44", 
    currentStatus: "Deactive" 
  },
  { 
    eventName: "", 
    entityType: "N/A", 
    modelType: "", 
    modelName: "Model Selection for Events", 
    modelDescription: "Rule system for event model selection", 
    modelAlgorithm: "", 
    modelFilename: "getEvtModels.pmml", 
    genuineRange: "", 
    fraudRange: "", 
    modelVersion: "1.0.0", 
    uploadedDate: "25/04/2025, 12:18:15", 
    lastActivatedDate: "25/06/2025, 12:19:15", 
    lastDeactivatedDate: "27/06/2025, 11:21:49", 
    currentStatus: "Deactive" 
  },
  { 
    eventName: "Core Banking", 
    entityType: "Account", 
    modelType: "Event", 
    modelName: "Account Transaction Model", 
    modelDescription: "Predictive model for detecting fraudulent account transactions", 
    modelAlgorithm: "Gradient boosted Trees", 
    modelFilename: "account_bizusermL1P1..", 
    genuineRange: "0 - 50", 
    fraudRange: ">50", 
    modelVersion: "1.0.0", 
    uploadedDate: "28/06/2025, 12:29:14", 
    lastActivatedDate: "26/06/2025, 16:29:14", 
    lastDeactivatedDate: "25/07/2025, 12:28:52", 
    currentStatus: "Deactive" 
  },
  {
    eventName: "UPI Events",
    entityType: "Account",
    modelType: "Event",
    modelName: "UPI Model",
    modelDescription: "Predictive model for detecting fraudulent UPI transactions",
    modelAlgorithm: "Gradient boosted Trees",
    modelFilename: "UPI.pmml",
    genuineRange: "0 - 50",
    fraudRange: "> 50",
    modelVersion: "1.0.0",
    uploadedDate: "25/04/2025, 12:22:55",
    lastActivatedDate: "25/06/2025, 16:22:55",
    lastDeactivatedDate: "16/07/2025, 17:03:21",
    currentStatus: "Deactive"
  },
  {
    eventName: "NEFT Transactions",
    entityType: "Account",
    modelType: "Event",
    modelName: "NEFT Fraud Model",
    modelDescription: "Predictive model for detecting fraudulent NEFT transactions",
    modelAlgorithm: "Random Forest",
    modelFilename: "neft_fraud_model.pmml",
    genuineRange: "0 - 45",
    fraudRange: "> 45",
    modelVersion: "2.1.0",
    uploadedDate: "10/05/2025, 09:15:30",
    lastActivatedDate: "12/05/2025, 10:00:00",
    lastDeactivatedDate: "N/A",
    currentStatus: "Active"
  },
  {
    eventName: "RTGS Transfers",
    entityType: "Account",
    modelType: "Event",
    modelName: "RTGS Risk Model",
    modelDescription: "Predictive model for high-value RTGS transfer risk scoring",
    modelAlgorithm: "XGBoost",
    modelFilename: "rtgs_risk_model.pmml",
    genuineRange: "0 - 40",
    fraudRange: "> 40",
    modelVersion: "1.5.0",
    uploadedDate: "15/05/2025, 11:30:00",
    lastActivatedDate: "17/05/2025, 08:45:00",
    lastDeactivatedDate: "N/A",
    currentStatus: "Active"
  },
  {
    eventName: "Mobile Banking",
    entityType: "Customer",
    modelType: "Event",
    modelName: "Mobile Fraud Detection",
    modelDescription: "Detects anomalous mobile banking login and transaction patterns",
    modelAlgorithm: "Neural Network",
    modelFilename: "mobile_fraud_detection.pmml",
    genuineRange: "0 - 55",
    fraudRange: "> 55",
    modelVersion: "3.0.0",
    uploadedDate: "20/05/2025, 14:00:00",
    lastActivatedDate: "22/05/2025, 09:30:00",
    lastDeactivatedDate: "10/07/2025, 14:00:00",
    currentStatus: "Deactive"
  },
  {
    eventName: "Internet Banking",
    entityType: "Customer",
    modelType: "Event",
    modelName: "IB Session Risk Model",
    modelDescription: "Real-time session risk scoring for internet banking users",
    modelAlgorithm: "Logistic Regression",
    modelFilename: "ib_session_risk.pmml",
    genuineRange: "0 - 60",
    fraudRange: "> 60",
    modelVersion: "1.2.0",
    uploadedDate: "05/06/2025, 16:45:00",
    lastActivatedDate: "07/06/2025, 10:15:00",
    lastDeactivatedDate: "N/A",
    currentStatus: "Active"
  },
  {
    eventName: "Wallet Transactions",
    entityType: "Account",
    modelType: "Event",
    modelName: "Wallet Anomaly Model",
    modelDescription: "Identifies anomalous wallet top-up and transfer patterns",
    modelAlgorithm: "Isolation Forest",
    modelFilename: "wallet_anomaly.pmml",
    genuineRange: "0 - 50",
    fraudRange: "> 50",
    modelVersion: "1.0.1",
    uploadedDate: "18/06/2025, 13:20:00",
    lastActivatedDate: "20/06/2025, 11:00:00",
    lastDeactivatedDate: "N/A",
    currentStatus: "Active"
  },
];

interface ColDef { key: string; label: string; visible: boolean; }

const DEFAULT_COLUMNS: ColDef[] = [
  { key: "eventName",           label: "Event Name",            visible: true },
  { key: "entityType",          label: "Entity Type",           visible: true },
  { key: "modelType",           label: "Model Type",            visible: true },
  { key: "modelName",           label: "Model Name",            visible: true },
  { key: "modelDescription",    label: "Model Description",     visible: true },
  { key: "modelAlgorithm",      label: "Model Algorithm",       visible: true },
  { key: "modelFilename",       label: "Model Filename",        visible: true },
  { key: "genuineRange",        label: "Genuine Range",         visible: false },
  { key: "fraudRange",          label: "Fraud Range",           visible: false },
  { key: "modelVersion",        label: "Model Version",         visible: false },
  { key: "uploadedDate",        label: "Uploaded Date",         visible: false },
  { key: "lastActivatedDate",   label: "Last Activated Date",   visible: false },
  { key: "lastDeactivatedDate", label: "Last Deactivated Date", visible: false },
  { key: "currentStatus",       label: "Current Status",        visible: false },
];

export function MLModelDeploy() {
  const [data, setData] = useState(initialMockData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [uploadStep, setUploadStep] = useState<"select" | "form">("form");
  const [uploadModelType, setUploadModelType] = useState("Event");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [uploadModelName, setUploadModelName] = useState("");
  const [uploadVersion, setUploadVersion] = useState("");
  const fileUploaderRef = useRef<FileUploaderHandle>(null);
  // Column settings
  const [columns, setColumns] = useState<ColDef[]>(DEFAULT_COLUMNS);
  const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(false);
  const [tempColumns, setTempColumns] = useState<ColDef[]>(DEFAULT_COLUMNS);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modelToDelete, setModelToDelete] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMode, setSuccessMode] = useState<"create" | "update" | "delete" | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeploySuccess, setIsDeploySuccess] = useState(false);
  
  // Filter/Search form state
  const [filterId, setFilterId] = useState("");
  const [filterModelName, setFilterModelName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterFromDate, setFilterFromDate] = useState("");
  const [filterToDate, setFilterToDate] = useState("");
  
  // Search button enable logic: at least one field must be filled
  const isSearchEnabled = filterId.trim() !== "" || filterModelName.trim() !== "" || filterStatus !== "" || filterFromDate !== "" || filterToDate !== "";

  // Model Form states
  const [newModel, setNewModel] = useState({
    id: "",
    modelName: "",
    version: "",
    status: "",
    accuracy: ""
  });

  const [editingModel, setEditingModel] = useState({
    id: "",
    modelName: "",
    version: "",
    status: "",
    accuracy: "",
    originalId: "" // To track which one we are editing
  });

  const handleAddModel = () => {
    if (!newModel.id || !newModel.modelName || !newModel.version || !newModel.status) return;
    
    setIsUpdating(true);
    
    setTimeout(() => {
      const model = {
        id: newModel.id,
        modelName: newModel.modelName,
        version: newModel.version,
        status: newModel.status,
        deployedDate: new Date().toLocaleString("en-GB", { 
          day: "2-digit", 
          month: "2-digit", 
          year: "numeric", 
          hour: "2-digit", 
          minute: "2-digit", 
          second: "2-digit",
          hour12: false
        }).replace(",", ""),
        accuracy: newModel.accuracy || "N/A"
      };
      
      setData([model, ...data]);
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("create");
      
      setTimeout(() => {
        setIsAddModalOpen(false);
        setIsSuccess(false);
        setSuccessMode(null);
        setNewModel({ id: "", modelName: "", version: "", status: "", accuracy: "" });
      }, 1500);
    }, 1500);
  };

  const simulateUpload = (file: File) => {
    setUploadFile(file);
    setUploadProgress(0);
    setIsFileUploading(true);
    let pct = 0;
    const interval = setInterval(() => {
      pct += Math.floor(Math.random() * 15) + 5;
      if (pct >= 100) {
        pct = 100;
        clearInterval(interval);
        setIsFileUploading(false);
      }
      setUploadProgress(pct);
    }, 150);
  };

  const resetUploadDialog = () => {
    setUploadStep("form");
    setUploadModelType("Event");
    setUploadFile(null);
    setUploadProgress(0);
    setIsFileUploading(false);
    setUploadModelName("");
    setUploadVersion("");
    fileUploaderRef.current?.clearFiles();
  };

  const handleUploadModel = () => {
    if (!uploadFile) return;
    const derivedName = uploadFile.name.replace(/\.[^/.]+$/, "");
    // Close upload dialog immediately, show standalone loader
    setIsAddModalOpen(false);
    resetUploadDialog();
    setIsDeploying(true);
    setTimeout(() => {
      const model = {
        eventName: derivedName,
        entityType: uploadModelType,
        modelType: uploadModelType,
        modelName: derivedName,
        modelDescription: `${uploadModelType} model uploaded via file`,
        modelAlgorithm: "",
        modelFilename: uploadFile.name,
        genuineRange: "",
        fraudRange: "",
        modelVersion: "1.0.0",
        uploadedDate: new Date().toLocaleString("en-GB", {
          day: "2-digit", month: "2-digit", year: "numeric",
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
        }).replace(",", ""),
        lastActivatedDate: "N/A",
        lastDeactivatedDate: "N/A",
        currentStatus: "Active",
      };
      setData([model, ...data]);
      setIsDeploying(false);
      setIsDeploySuccess(true);
    }, 2000);
  };

  const handleDeployContinue = () => {
    setIsDeploySuccess(false);
  };

  const handleEditClick = (model: any) => {
    setEditingModel({
      id: model.id,
      modelName: model.modelName,
      version: model.version,
      status: model.status,
      accuracy: model.accuracy,
      originalId: model.id
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateModel = () => {
    if (!editingModel.id || !editingModel.modelName || !editingModel.version || !editingModel.status) return;
    
    setIsUpdating(true);
    
    setTimeout(() => {
      setData(data.map(model => 
        model.id === editingModel.originalId 
          ? { 
              ...model, 
              id: editingModel.id,
              modelName: editingModel.modelName,
              version: editingModel.version,
              status: editingModel.status,
              accuracy: editingModel.accuracy
            }
          : model
      ));
      
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("update");
      
      setTimeout(() => {
        setIsEditModalOpen(false);
        setIsSuccess(false);
        setSuccessMode(null);
        setEditingModel({ id: "", modelName: "", version: "", status: "", accuracy: "", originalId: "" });
      }, 1500);
    }, 1500);
  };

  const handleDeleteClick = (model: any) => {
    setModelToDelete(model);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModel = () => {
    if (!modelToDelete) return;
    
    setIsUpdating(true);
    
    setTimeout(() => {
      setData(data.filter(model => model.id !== modelToDelete.id));
      setIsUpdating(false);
      setIsSuccess(true);
      setSuccessMode("delete");
      
      setTimeout(() => {
        setIsDeleteModalOpen(false);
        setIsSuccess(false);
        setSuccessMode(null);
        setModelToDelete(null);
      }, 1500);
    }, 1500);
  };

  const handleClearFilters = () => {
    setFilterId("");
    setFilterModelName("");
    setFilterStatus("");
    setFilterFromDate("");
    setFilterToDate("");
  };

  const handleToggleStatus = (model: any) => {
    setData(data.map(item =>
      item.modelName === model.modelName
        ? { ...item, currentStatus: item.currentStatus === "Active" ? "Deactive" : "Active" }
        : item
    ));
  };

  const openColumnSettings = () => {
    setTempColumns([...columns]);
    setIsColumnSettingsOpen(true);
  };

  const handleColDragStart = (index: number) => setDragIndex(index);
  const handleColDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === index) return;
    const next = [...tempColumns];
    const [moved] = next.splice(dragIndex, 1);
    next.splice(index, 0, moved);
    setTempColumns(next);
    setDragIndex(index);
  };
  const handleColDrop = () => setDragIndex(null);

  const applyColumnSettings = () => {
    setColumns([...tempColumns]);
    setIsColumnSettingsOpen(false);
  };

  const visibleColumns = columns.filter(c => c.visible);

  const getCellContent = (model: any, key: string) => {
    if (key === "currentStatus") {
      return (
        <Badge className={cn(
          "rounded-md font-normal px-2.5 h-[28px] flex items-center text-[14px] w-fit",
          model.currentStatus === "Active" && "bg-[#E6F4EA] text-[#1E8E3E] hover:bg-[#D4E9D9]",
          model.currentStatus === "Deactive" && "bg-[#F1F3F4] text-[#5F6368] hover:bg-[#E8EAED]"
        )}>
          {model.currentStatus}
        </Badge>
      );
    }
    return (model as any)[key] || "—";
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 font-sans">

      {/* ── Deploy loading overlay ── */}
      {isDeploying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30">
          <SnowflakeLoader message="Deploying model..." />
        </div>
      )}

      {/* ── Deploy success dialog ── */}
      {isDeploySuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30">
          <div
            style={{ width: 360, height: 262, minWidth: 360, maxWidth: 360, minHeight: 262, maxHeight: 262 }}
            className="bg-white rounded-[16px] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Body */}
            <div className="flex flex-col items-center justify-center flex-1 px-8 gap-4">
              {/* Circle checkmark */}
              <div className="w-[36px] h-[36px] rounded-full border-[3px] border-[#2A53A0] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#2A53A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Text */}
              <p className="text-[20px] font-semibold text-[#2A53A0]">Success</p>
              <p className="text-[14px] text-[#525252] text-center leading-snug">
                ML Model file Uploaded<br />Successfully
              </p>
            </div>
            {/* Continue button */}
            <button
              onClick={handleDeployContinue}
              className="w-full h-[52px] bg-[#2A53A0] hover:bg-[#1e3a70] text-white text-[15px] font-medium transition-colors shrink-0"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Title and Action Buttons */}
        <div className="flex items-center justify-between shrink-0 px-1 mb-4">
          <h2 className="text-[21px] font-medium text-slate-800 dark:text-slate-100 tracking-tight">ML Model List</h2>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={openColumnSettings}
              className="h-[46px] px-6 rounded-[8px] border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[14px] font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Column Settings <SettingsAdjust className="ml-2 size-4" />
            </Button>
            <Dialog open={isAddModalOpen} onOpenChange={(open) => {
              setIsAddModalOpen(open);
              if (!open) resetUploadDialog();
            }}>
              <DialogTrigger asChild>
                <ShimmerButton className="h-[46px] px-6 rounded-[8px] text-white text-[14px] font-medium">
                  Upload Model <CloudUpload className="size-4 ml-1.5" />
                </ShimmerButton>
              </DialogTrigger>
              <DialogContent className="!flex !flex-col p-0 gap-0 overflow-hidden rounded-[8px] border-0 shadow-xl !max-w-[1200px] !w-[1200px] !h-[750px] [&>button:last-child]:text-white [&>button:last-child]:top-4 [&>button:last-child]:right-4">
                <DialogDescription className="sr-only">Upload a new ML model</DialogDescription>

                {/* Header */}
                <div className="bg-[#2A53A0] px-6 flex items-center h-[64px] pr-16 shrink-0">
                  <DialogTitle className="text-white text-[16px] font-medium leading-none">
                    Upload Model
                  </DialogTitle>
                </div>

                {/* Upload form */}
                {uploadStep === "form" && (
                  <div className="p-6 bg-white flex-1 flex flex-col gap-5 overflow-auto min-h-0">

                    {/* Model Type — radio buttons */}
                    <div>
                      <p className="text-[14px] font-medium text-[#161616] mb-3">
                        Model Type<span className="text-red-500">*</span>
                      </p>
                      <div className="flex items-center gap-6">
                        {(["Event", "Alert", "Mule"] as const).map((type) => (
                          <label
                            key={type}
                            className="flex items-center gap-2 cursor-pointer select-none group"
                          >
                            <input
                              type="radio"
                              name="uploadModelType"
                              value={type}
                              checked={uploadModelType === type}
                              onChange={() => setUploadModelType(type)}
                              className="hidden"
                            />
                            <div className={cn(
                              "w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                              uploadModelType === type
                                ? "border-[#2A53A0]"
                                : "border-[#C6C6C6] group-hover:border-[#2A53A0]"
                            )}>
                              {uploadModelType === type && (
                                <div className="w-[8px] h-[8px] rounded-full bg-[#2A53A0]" />
                              )}
                            </div>
                            <span className={cn(
                              "text-[14px] transition-colors",
                              uploadModelType === type
                                ? "font-medium text-[#161616]"
                                : "text-[#525252] group-hover:text-[#161616]"
                            )}>
                              {type}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Upload Model File — two-panel layout */}
                    <div>
                      <p className="text-[14px] font-medium text-[#161616] mb-2">
                        Upload Model File<span className="text-red-500">*</span>
                      </p>

                      <div className="border border-[#E0E0E0] rounded-[10px] flex overflow-hidden" style={{ minHeight: 120 }}>

                        {/* Left panel — description + button */}
                        <div className="flex flex-col items-center justify-center gap-3 px-6 py-5 bg-white border-r border-[#E0E0E0]" style={{ width: '45%' }}>
                          <p className="text-[13px] text-[#525252] leading-snug text-center">
                            Max file size is 10MB. Supported file types are .ZIP Only
                          </p>
                          <button
                            onClick={() => document.getElementById("upload-file-input")?.click()}
                            className="flex items-center gap-2 px-4 h-[40px] rounded-[6px] bg-[#2A53A0] hover:bg-[#1e3a70] text-white text-[13px] font-medium transition-colors"
                          >
                            Upload Files
                            <CloudUpload size={16} />
                          </button>
                          <input
                            id="upload-file-input"
                            type="file"
                            accept=".zip"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) simulateUpload(f);
                              e.target.value = "";
                            }}
                          />
                        </div>

                        {/* Right panel — file state */}
                        <div className="flex-1 relative bg-white">
                          {uploadFile ? (
                            <>
                              {/* X button */}
                              <button
                                onClick={() => { setUploadFile(null); setUploadProgress(0); setIsFileUploading(false); fileUploaderRef.current?.clearFiles(); }}
                                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-[#525252] hover:text-[#161616] transition-colors z-10"
                              >
                                <Close size={16} />
                              </button>
                              {/* Centered file info */}
                              <div className="absolute inset-0 bottom-[4px] flex items-center px-6 gap-4">
                                <div className="w-10 h-10 rounded-[8px] bg-[#EDF2FF] flex items-center justify-center shrink-0">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#2A53A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="14,2 14,8 20,8" stroke="#2A53A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="8" y1="13" x2="16" y2="13" stroke="#2A53A0" strokeWidth="1.5" strokeLinecap="round"/>
                                    <line x1="8" y1="17" x2="13" y2="17" stroke="#2A53A0" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </div>
                                <div className="min-w-0">
                                  <p className="text-[14px] font-semibold text-[#161616] truncate">{uploadFile.name}</p>
                                  <p className="text-[12px] text-[#525252] mt-0.5">
                                    {uploadFile.size > 1024 * 1024
                                      ? `${(uploadFile.size / (1024 * 1024)).toFixed(1)} MB`
                                      : `${(uploadFile.size / 1024).toFixed(0)} KB`}
                                    {isFileUploading && <span className="ml-2 text-[#2A53A0]">Uploading… {uploadProgress}%</span>}
                                    {!isFileUploading && uploadProgress === 100 && <span className="ml-2 text-green-600">Complete</span>}
                                  </p>
                                </div>
                              </div>
                              {/* Full-width progress bar at bottom */}
                              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#E0E0E0] overflow-hidden">
                                <div
                                  className="h-full bg-[#2A53A0] transition-all duration-150"
                                  style={{ width: `${uploadProgress}%` }}
                                />
                              </div>
                            </>
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                              <p className="text-[15px] font-semibold text-[#161616]">No file chosen</p>
                              <p className="text-[13px] text-[#525252]">
                                Accepts only{" "}
                                <span className="text-[#2A53A0] font-medium">.zip</span>{" "}
                                files up to{" "}
                                <span className="text-[#2A53A0] font-medium">10MB</span>
                              </p>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* Summary Section — shown only after upload completes */}
                    <div className="flex-1 flex flex-col min-h-0">
                      <p className="text-[14px] font-medium text-[#161616] mb-3">Summary</p>
                      <div className="border border-[#E0E0E0] rounded-[10px] overflow-hidden flex-1 flex flex-col min-h-0">
                        {uploadProgress === 100 ? (
                          <div className="flex-1 overflow-auto">
                            {/* Table Header */}
                            <div className="grid grid-cols-5 bg-[#F0F4FF] border-b border-[#E0E0E0]">
                              {["PMML Name", "Model Name", "Model Type", "Model Version", "Event Name"].map((col) => (
                                <div key={col} className="px-4 h-[44px] flex items-center">
                                  <span className="text-[13px] font-semibold text-[#2A53A0]">{col}</span>
                                </div>
                              ))}
                            </div>
                            {/* Table Rows */}
                            {[
                              { pmml: "Sample_ML_Model_01", model: "05Aug Model", type: uploadModelType || "Event", version: "1.0.0", event: "Credit Card Fraud Detection" },
                              { pmml: "Sample_ML_Model_02", model: "05Jul Model",  type: uploadModelType || "Event", version: "1.0.0", event: "Debit Card Fraud Detection"  },
                              { pmml: "Sample_ML_Model_03", model: "05Jun Model",  type: uploadModelType || "Event", version: "1.0.0", event: "Credit Card Limit Detection" },
                              { pmml: "Sample_ML_Model_04", model: "05May Model",  type: uploadModelType || "Event", version: "1.0.0", event: "Debit Card Limit Detection"  },
                            ].map((row, i) => (
                              <div key={i} className="grid grid-cols-5 border-b border-[#E0E0E0] last:border-b-0 hover:bg-[#F9FAFF] transition-colors">
                                <div className="px-4 h-[46px] flex items-center"><span className="text-[13px] text-[#161616]">{row.pmml}</span></div>
                                <div className="px-4 h-[46px] flex items-center"><span className="text-[13px] text-[#161616]">{row.model}</span></div>
                                <div className="px-4 h-[46px] flex items-center"><span className="text-[13px] text-[#161616]">{row.type}</span></div>
                                <div className="px-4 h-[46px] flex items-center"><span className="text-[13px] text-[#161616]">{row.version}</span></div>
                                <div className="px-4 h-[46px] flex items-center"><span className="text-[13px] text-[#161616]">{row.event}</span></div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex-1 flex flex-col items-center justify-center gap-2">
                            <p className="text-[15px] font-semibold text-[#161616]">
                              {isFileUploading ? "Processing file…" : "Data not available"}
                            </p>
                            <p className="text-[13px] text-[#525252]">
                              {isFileUploading ? "Summary will appear once upload is complete." : "Please upload required file for getting result!"}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}


                {/* Footer — only on form step */}
                {uploadStep === "form" && (
                  <div className="bg-[#F4F4F4] h-[64px] shrink-0 flex items-stretch border-t border-[#E0E0E0] mt-auto">
                    <button
                      onClick={() => { setIsAddModalOpen(false); resetUploadDialog(); }}
                      className="flex-1 text-[14px] font-medium text-[#161616] hover:bg-[#E5E5E5] border-r border-[#E0E0E0] rounded-bl-[8px] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => { setUploadStep("select"); setUploadFile(null); setUploadProgress(0); setIsFileUploading(false); }}
                      disabled={!uploadFile}
                      className="flex-1 text-[14px] font-medium text-[#2A53A0] hover:bg-[#E5E5EF] border-r border-[#E0E0E0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleUploadModel}
                      disabled={!uploadFile || isFileUploading || uploadProgress < 100}
                      className="flex-1 text-[14px] font-medium text-white bg-[#2A53A0] hover:bg-[#1e3a70] disabled:opacity-50 disabled:cursor-not-allowed rounded-br-[8px] transition-colors"
                    >
                      Deploy Model
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 min-h-0">


          {/* Carbon Style Data Table */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-[8px] overflow-hidden flex-1 flex flex-col min-h-0 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex-1 table-scroll">
              <Table className="min-w-max">
                <TableHeader className="bg-[#F0F0F0] dark:bg-[#262626] sticky top-0 z-10 h-[48px]">
                  <TableRow className="hover:bg-transparent border-b border-slate-300 dark:border-slate-700 h-full">
                    {visibleColumns.map((col, idx) => (
                      <TableHead
                        key={col.key}
                        className={cn(
                          "py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-[16px] border-r border-slate-300/50 dark:border-slate-700/50 h-[48px] bg-[#F0F0F0] dark:bg-[#262626]",
                          idx === 0 && "sticky left-0 z-20"
                        )}
                      >
                        <div className="flex items-center gap-1 group px-1">
                          {col.label}
                          <Sort className="size-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                        </div>
                      </TableHead>
                    ))}
                    <TableHead className="py-0 text-[#2A53A0] dark:text-[#4A7BD0] font-medium text-center text-[16px] h-[48px] bg-[#F0F0F0] dark:bg-[#262626] sticky right-0 z-20 border-l border-slate-300/50 dark:border-slate-700/50">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentData.map((model, index) => (
                    <TableRow key={index} className="group border-b border-slate-200 dark:border-slate-800/80 hover:bg-[#F4F4F4] dark:hover:bg-[#353535] transition-colors h-[46px]">
                      {visibleColumns.map((col, idx) => (
                        <TableCell
                          key={col.key}
                          className={cn(
                            "text-[#161616] dark:text-[#C6C6C6] py-0 px-3 font-normal text-[16px] h-[46px]",
                            idx === 0 && "sticky left-0 z-10 bg-white dark:bg-slate-900 group-hover:bg-[#F4F4F4] dark:group-hover:bg-[#353535] border-r border-slate-200/80 dark:border-slate-700/50 transition-colors"
                          )}
                        >
                          {getCellContent(model, col.key)}
                        </TableCell>
                      ))}
                      <TableCell className="py-0 px-3 h-[46px] sticky right-0 z-10 bg-white dark:bg-slate-900 group-hover:bg-[#F4F4F4] dark:group-hover:bg-[#353535] border-l border-slate-200/80 dark:border-slate-700/50 transition-colors">
                        <div className="flex items-center justify-center gap-3">
                          <Switch
                            checked={model.currentStatus === "Active"}
                            onCheckedChange={() => handleToggleStatus(model)}
                            className="data-[state=checked]:bg-[#2A53A0] data-[state=unchecked]:bg-[#D1D5DB]"
                          />
                          <button
                            onClick={() => handleDeleteClick(model)}
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

            {/* Carbon Pagination */}
            <div className="h-[48px] bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 overflow-hidden">
              <div className="flex items-center h-full">
                <div className="flex items-center px-4 h-full border-r border-slate-200 dark:border-slate-800">
                  <span className="text-[14px] font-normal text-[#333333] dark:text-slate-300 mr-2">Items per page:</span>
                  <Select defaultValue="10">
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
                  <span className="text-[16px] font-normal text-[#161616] dark:text-white">{startIndex + 1}–{Math.min(endIndex, data.length)}</span>
                  <span className="text-[16px] font-normal text-[#525252] dark:text-slate-400 mx-1">of</span>
                  <span className="text-[16px] font-normal text-[#161616] dark:text-white mr-1">{data.length}</span>
                  <span className="text-[16px] font-normal text-[#525252] dark:text-slate-400">items</span>
                </div>
              </div>
              <div className="flex items-center h-full">
                <div className="flex items-center h-full border-l border-slate-200 dark:border-slate-800 px-4">
                  <Select value={String(currentPage)} onValueChange={(v) => setCurrentPage(Number(v))}>
                    <SelectTrigger className="w-[60px] h-full border-none bg-transparent hover:bg-[#E5E5E5] dark:hover:bg-slate-800 rounded-none px-2 focus:ring-0 text-[16px] text-[#161616] dark:text-white font-normal shadow-none gap-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>{i + 1}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-[16px] font-normal text-[#525252] dark:text-slate-400 ml-2 whitespace-nowrap">of {totalPages} pages</span>
                </div>
                <div className="flex items-center h-full border-l border-slate-200 dark:border-slate-800">
                  <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="w-[48px] h-full flex items-center justify-center hover:bg-[#E5E5E5] dark:hover:bg-slate-800 disabled:opacity-25 text-[#161616] dark:text-white transition-colors cursor-pointer">
                    <ChevronLeft className="size-5" />
                  </button>
                  <div className="w-px h-full bg-slate-200 dark:bg-slate-800" />
                  <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="w-[48px] h-full flex items-center justify-center hover:bg-[#E5E5E5] dark:hover:bg-slate-800 disabled:opacity-25 text-[#161616] dark:text-white transition-colors cursor-pointer">
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Model Dialog */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-[18px] font-semibold text-slate-900 dark:text-white">
              Edit ML Model
            </DialogTitle>
            <DialogDescription className="sr-only">
              Edit ML model deployment details
            </DialogDescription>
          </DialogHeader>

          {!isUpdating && !isSuccess && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-model-id" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Model ID <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="edit-model-id"
                  value={editingModel.id}
                  onChange={(e) => setEditingModel({...editingModel, id: e.target.value})}
                  placeholder="Enter model ID"
                  className="h-[46px] rounded-[8px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-model-name" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Model Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="edit-model-name"
                  value={editingModel.modelName}
                  onChange={(e) => setEditingModel({...editingModel, modelName: e.target.value})}
                  placeholder="Enter model name"
                  className="h-[46px] rounded-[8px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-version" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Version <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="edit-version"
                  value={editingModel.version}
                  onChange={(e) => setEditingModel({...editingModel, version: e.target.value})}
                  placeholder="e.g., 1.0.0"
                  className="h-[46px] rounded-[8px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-status" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Status <span className="text-red-500">*</span>
                </Label>
                <Select value={editingModel.status} onValueChange={(value) => setEditingModel({...editingModel, status: value})}>
                  <SelectTrigger className="h-[46px] rounded-[8px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Testing">Testing</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="edit-accuracy" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Accuracy (%)
                </Label>
                <Input
                  id="edit-accuracy"
                  value={editingModel.accuracy}
                  onChange={(e) => setEditingModel({...editingModel, accuracy: e.target.value})}
                  placeholder="e.g., 95.5%"
                  className="h-[46px] rounded-[8px]"
                />
              </div>
            </div>
          )}

          {isUpdating && (
            <div className="py-8 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-4 border-[#2A53A0] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400">Updating model...</p>
            </div>
          )}

          {isSuccess && (
            <div className="py-8 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Events size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <p className="text-[14px] font-medium text-green-600 dark:text-green-400">Model updated successfully!</p>
            </div>
          )}

          {!isUpdating && !isSuccess && (
            <DialogFooter className="flex-row gap-0 p-0 mt-2">
              <div className="flex w-full border-t border-slate-200 dark:border-slate-700">
                <Button
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setEditingModel({ id: "", modelName: "", version: "", status: "", accuracy: "", originalId: "" });
                  }}
                  className="flex-1 h-[46px] rounded-none rounded-bl-[8px] bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 font-medium"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdateModel}
                  disabled={!editingModel.id || !editingModel.modelName || !editingModel.version || !editingModel.status}
                  className="flex-1 h-[46px] rounded-none rounded-br-[8px] bg-[#2A53A0] hover:bg-[#1e3a70] text-white disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Update Model
                </Button>
              </div>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      {/* Column Settings Dialog - Carbon DS Style */}
      <Dialog open={isColumnSettingsOpen} onOpenChange={setIsColumnSettingsOpen}>
        <DialogContent className="max-w-[480px] p-0 gap-0 overflow-hidden rounded-[8px] border-0 shadow-xl [&>button:last-child]:text-white [&>button:last-child]:top-4 [&>button:last-child]:right-4">
          <DialogDescription className="sr-only">
            Configure visible columns and their display order
          </DialogDescription>
          {/* Dark Carbon header */}
          <div className="bg-[#2A53A0] px-4 flex items-center h-[64px] pr-16">
            <DialogTitle className="text-white text-[16px] font-medium leading-none">
              Column Settings
            </DialogTitle>
          </div>
          {/* Scrollable column list */}
          <div className="bg-white max-h-[400px] overflow-y-auto">
            {tempColumns.map((col, idx) => (
              <div
                key={col.key}
                draggable
                onDragStart={() => handleColDragStart(idx)}
                onDragOver={(e) => handleColDragOver(e, idx)}
                onDrop={handleColDrop}
                className={cn(
                  "flex items-center gap-3 h-[48px] px-4 border-b border-[#E0E0E0] cursor-grab active:cursor-grabbing select-none transition-colors",
                  dragIndex === idx ? "bg-[#E8F0FE] opacity-60" : "hover:bg-[#F4F4F4]"
                )}
              >
                <Draggable className="size-4 text-[#8D8D8D] shrink-0" />
                <Checkbox
                  id={`col-vis-${col.key}`}
                  checked={col.visible}
                  onCheckedChange={(checked) =>
                    setTempColumns(tempColumns.map(c =>
                      c.key === col.key ? { ...c, visible: !!checked } : c
                    ))
                  }
                  className="data-[state=checked]:bg-[#2A53A0] data-[state=checked]:border-[#2A53A0]"
                />
                <label
                  htmlFor={`col-vis-${col.key}`}
                  className="text-[#161616] text-[14px] cursor-pointer flex-1"
                >
                  {col.label}
                </label>
              </div>
            ))}
          </div>
          {/* Carbon DS footer */}
          <div className="bg-[#F4F4F4] h-[64px] flex items-stretch border-t border-[#E0E0E0]">
            <button
              onClick={() => setIsColumnSettingsOpen(false)}
              className="flex-1 text-[14px] font-medium text-[#161616] hover:bg-[#E5E5E5] border-r border-[#E0E0E0] rounded-bl-[8px] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setTempColumns([...DEFAULT_COLUMNS])}
              className="flex-1 text-[14px] font-medium text-[#2A53A0] hover:bg-[#E5E5E5] border-r border-[#E0E0E0] transition-colors"
            >
              Reset to Default
            </button>
            <button
              onClick={applyColumnSettings}
              className="flex-1 text-[14px] font-medium text-white bg-[#2A53A0] hover:bg-[#1e3a70] rounded-br-[8px] transition-colors"
            >
              Apply
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-[18px] font-semibold text-slate-900 dark:text-white">
              Delete ML Model
            </DialogTitle>
            <DialogDescription className="sr-only">
              Confirm deletion of ML model
            </DialogDescription>
          </DialogHeader>

          {!isUpdating && !isSuccess && (
            <div className="py-4">
              <p className="text-[14px] text-slate-600 dark:text-slate-400">
                Are you sure you want to delete model <span className="font-semibold text-slate-900 dark:text-white">{modelToDelete?.modelName}</span> (ID: {modelToDelete?.id})?
              </p>
              <p className="text-[13px] text-red-600 dark:text-red-400 mt-2">
                This action cannot be undone.
              </p>
            </div>
          )}

          {isUpdating && (
            <div className="py-8 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-4 border-[#2A53A0] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400">Deleting model...</p>
            </div>
          )}

          {isSuccess && (
            <div className="py-8 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Events size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <p className="text-[14px] font-medium text-green-600 dark:text-green-400">Model deleted successfully!</p>
            </div>
          )}

          {!isUpdating && !isSuccess && (
            <DialogFooter className="flex-row gap-0 p-0 mt-2">
              <div className="flex w-full border-t border-slate-200 dark:border-slate-700">
                <Button
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                    setModelToDelete(null);
                  }}
                  className="flex-1 h-[46px] rounded-none rounded-bl-[8px] bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 font-medium"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteModel}
                  className="flex-1 h-[46px] rounded-none rounded-br-[8px] bg-red-600 hover:bg-red-700 text-white font-medium"
                >
                  Delete
                </Button>
              </div>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}