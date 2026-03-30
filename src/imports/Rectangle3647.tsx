import svgPaths from "./svg-pj4p2acp3i";

function EntityCreatedSuccessfullyAwaitingApprovals() {
  return (
    <div
      className="absolute contents inset-[45.3%_12.78%_32.56%_13.88%]"
      data-name="Entity Created Successfully!
“Awaiting Approvals”"
    >
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[45.3%_12.78%_32.56%_13.88%] leading-[1.8] not-italic text-[#767676] text-[16px] text-center whitespace-nowrap">
        <p className="mb-0">Entity Tag Created</p>
        <p>Successfully and Sent for Approval</p>
      </div>
    </div>
  );
}

function IconIonicIosCheckmarkCircleOutline() {
  return (
    <div className="absolute inset-[13.21%_45.85%_73.05%_44.15%]" data-name="Icon ionic-ios-checkmark-circle-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon ionic-ios-checkmark-circle-outline">
          <path d={svgPaths.p1ef9ea00} fill="var(--fill-0, #2A53A0)" id="Path 83228" />
          <path d={svgPaths.p3ad3b700} fill="var(--fill-0, #2A53A0)" id="Path 83229" />
        </g>
      </svg>
    </div>
  );
}

function BluePrimaryButton() {
  return (
    <div className="absolute contents inset-[81.11%_23.19%_9.73%_70.97%]" data-name="Blue Primary Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[81.11%_23.19%_9.73%_70.97%] leading-[normal] not-italic text-[16px] text-white whitespace-nowrap">Ok</p>
    </div>
  );
}

function ButtonPrimary() {
  return <div className="absolute h-[60px] left-0 rounded-bl-[8px] rounded-br-[8px] top-[202px] w-[360px]" data-name="Button Primary" />;
}

export default function Rectangle() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[0_0_0.6%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 260.434">
          <path d={svgPaths.p3845500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.19%_0.14%_0.79%_0.14%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[31.73%_41.11%_59.87%_39.44%] leading-[normal] not-italic text-[#2a53a0] text-[18px] whitespace-nowrap">Created</p>
      <EntityCreatedSuccessfullyAwaitingApprovals />
      <IconIonicIosCheckmarkCircleOutline />
      <BluePrimaryButton />
      <ButtonPrimary />
      <div className="absolute bg-[#2a53a0] content-stretch flex gap-[8px] items-center justify-center left-0 overflow-clip p-[16px] rounded-bl-[10px] rounded-br-[10px] top-[207px] w-[360px]" data-name="Button Primary">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Continue</p>
      </div>
    </div>
  );
}