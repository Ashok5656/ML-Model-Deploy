import svgPaths from "./svg-hy9prae3bc";

function LabelTitle() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Label  + Title">
      <div className="content-stretch flex flex-col gap-[4px] items-start pr-[76px] relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[21px] text-white w-full">Approve Entity Tag</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close--large">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb53ab00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center p-[16px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#2a53a0] left-0 right-0 rounded-tl-[8px] rounded-tr-[8px] top-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start px-[30px] py-[16px] relative w-full">
        <LabelTitle />
        <div className="absolute content-stretch flex flex-col h-[64px] items-center justify-center overflow-clip right-0 top-0 w-[48px]" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <ButtonContent />
        </div>
      </div>
    </div>
  );
}

function LabelTitle1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Label  + Title">
      <div className="content-stretch flex flex-col gap-[4px] items-start pr-[76px] relative w-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#161616] text-[20px] w-full">Approve Entity Tag</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close--large">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb53ab00} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center p-[16px] relative w-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function HeaderSpacer() {
  return (
    <div className="opacity-0 relative shrink-0 w-full" data-name="Header spacer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <LabelTitle1 />
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[48px]" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <ButtonContent1 />
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-[64px] min-h-px min-w-px mix-blend-multiply z-[5]" data-name="Spacer" />;
}

function ButtonContent2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap z-[2]">Reject</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap z-[2]">Accept</p>
        </div>
      </div>
    </div>
  );
}

function ProgressIndicatorDescription() {
  return (
    <div className="h-[172.002px] relative shrink-0 w-full" data-name="Progress indicator + Description">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-[0.001px] opacity-0 shrink-0 w-full" data-name="Zero-height spacer" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] relative w-full">
        <ProgressIndicatorDescription />
      </div>
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function EpCheck() {
  return (
    <div className="absolute left-[716px] size-[16px] top-[462px]" data-name="ep:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ep:check">
          <path d={svgPaths.p152d6c00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.2" />
        </g>
      </svg>
    </div>
  );
}

function IconamoonCloseLight() {
  return (
    <div className="absolute left-[438px] size-[20px] top-[459px]" data-name="iconamoon:close-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconamoon:close-light">
          <path d={svgPaths.p5a32700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 not-italic place-items-start relative row-1 text-[16px] whitespace-nowrap">
      <p className="col-1 leading-[1.4] ml-0 mt-0 relative row-1 text-[#767676]">Entity ID</p>
      <p className="col-1 leading-[18px] ml-[117px] mt-0 relative row-1 text-[#161616] tracking-[0.16px]">523690174625</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group />
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group6 />
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[92px] mt-px relative row-1 text-[#767676] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[29px] top-[89px] w-[268px]">
      <Group16 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[17.6%_40.49%_78%_49.15%]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.6%_40.49%_78%_49.15%] leading-[1.4] not-italic text-[#767676] text-[16px] whitespace-nowrap">Entity Type</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[17.6%_24.39%_78%_49.15%]">
      <Group1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.6%_24.39%_78%_64.63%] leading-[1.4] not-italic text-[#333] text-[16px] whitespace-nowrap">CUSTOMER</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[17.6%_24.39%_78%_49.15%]">
      <Group5 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[17.6%_24.39%_78%_49.15%]">
      <Group9 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[17.6%_24.39%_78%_49.15%]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[17.8%_37.32%_78.4%_62.2%] leading-[normal] text-[#767676] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
      <Group13 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[36%_88.05%_59.6%_3.54%]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36%_88.05%_59.6%_3.54%] leading-[1.4] not-italic text-[#767676] text-[16px] whitespace-nowrap">End Date</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[36%_62.44%_59.6%_3.54%]">
      <Group2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36%_62.44%_59.6%_17.93%] leading-[1.4] not-italic text-[#333] text-[16px] whitespace-nowrap">27-12-2025 14:30:50</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[36%_62.44%_59.6%_3.54%]">
      <Group7 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[36%_62.44%_59.6%_3.54%]">
      <Group10 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[36%_62.44%_59.6%_3.54%]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[36.2%_84.76%_60%_14.76%] leading-[normal] text-[#767676] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
      <Group14 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[27%_87.2%_68.6%_3.54%]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[27%_87.2%_68.6%_3.54%] leading-[1.4] not-italic text-[#767676] text-[16px] whitespace-nowrap">Entity Tag</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[27%_72.93%_68.6%_3.54%]">
      <Group3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[27%_72.93%_68.6%_17.93%] leading-[1.4] not-italic text-[#333] text-[16px] whitespace-nowrap">White List</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[27%_72.93%_68.6%_3.54%]">
      <Group8 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[27%_72.93%_68.6%_3.54%]">
      <Group11 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[27%_72.93%_68.6%_3.54%]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[27.2%_84.76%_69%_14.76%] leading-[normal] text-[#767676] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
      <Group15 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[29px] top-[88px]">
      <Frame />
      <Group17 />
      <Group20 />
      <Group18 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal inset-[26.4%_15%_69%_49.27%] leading-[1.4] not-italic text-[16px] whitespace-nowrap">
      <p className="absolute inset-[26.6%_41.22%_69%_49.27%] text-[#767676]">Start Date</p>
      <p className="absolute inset-[26.4%_15%_69.2%_65.12%] text-[#333]">27-05-2025 14:30:50</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[26.4%_15%_69%_49.27%]">
      <Group4 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[26.4%_15%_69%_49.27%]">
      <Group12 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[26.6%_37.32%_69.6%_62.2%] leading-[normal] text-[#767676] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white border border-[#c6c6c6] border-solid col-1 h-[120px] ml-0 mt-0 rounded-[8px] row-1 w-[750px]" />
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal h-[12.809px] leading-[normal] ml-[26px] mt-[13.48px] not-italic relative row-1 text-[#707070] text-[16px] w-[170px]">Enter comment here</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-[30px] top-[226px] w-[754px]">
      <p className="font-['Inter:Regular',sans-serif] font-['Poppins:Regular',sans-serif] font-normal h-[21.039px] not-italic relative shrink-0 text-[#333] text-[0px] text-[16px] w-full">
        <span className="leading-[1.4]">Comment</span>
        <span className="leading-[1.4] text-[#dd170e]">*</span>
      </p>
      <Group22 />
    </div>
  );
}

export default function Group23() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[500px] items-start left-1/2 pb-[65px] pt-px px-px rounded-[8px] top-1/2 w-[820px]" data-name="Modal">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Header />
        <HeaderSpacer />
        <div className="absolute bottom-0 left-0 right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Actions">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-start relative w-full">
            <div className="absolute inset-0 rounded-bl-[8px] rounded-br-[8px] z-[7]" data-name="Border">
              <div aria-hidden="true" className="absolute border-[#c6c6c6] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
            </div>
            <Spacer />
            <div className="bg-[#ff4057] flex-[1_0_0] min-h-px min-w-px opacity-50 relative self-stretch z-[3]" data-name="2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <ButtonContent2 />
              </div>
            </div>
            <div className="bg-[#2a53a0] flex-[1_0_0] min-h-px min-w-px opacity-50 relative rounded-br-[8px] self-stretch z-[2]" data-name="1">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <ButtonContent3 />
              </div>
            </div>
            <div className="absolute bg-[#f4f4f4] inset-0 rounded-bl-[8px] rounded-br-[8px] z-[1]" data-name="Background" />
          </div>
        </div>
        <Content />
        <div className="relative shrink-0" data-name="Resizer">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[640px] items-start relative">
            <Start />
            <End />
          </div>
        </div>
      </div>
      <EpCheck />
      <IconamoonCloseLight />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[106px] not-italic text-[#2a53a0] text-[16px] top-[460px] tracking-[0.16px] whitespace-nowrap">Cancel</p>
      <Group21 />
      <Group19 />
      <Frame1 />
    </div>
  );
}