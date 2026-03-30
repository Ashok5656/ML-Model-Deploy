import svgPaths from "./svg-89klh9sx9w";

function LabelTitle() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Label  + Title">
      <div className="content-stretch flex flex-col gap-[4px] items-start pr-[76px] relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[21px] text-white w-full">Add Entity Tag</p>
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
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#161616] text-[20px] w-full">Add Entity Tag</p>
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
    <div className="h-[64px] relative rounded-br-[8px] shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap z-[2]">Create</p>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2a53a0] flex-[1_0_0] min-h-px min-w-px opacity-50 relative rounded-br-[8px] self-stretch z-[2]" data-name="1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ButtonContent2 />
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

function UitCalender() {
  return (
    <div className="absolute aspect-[24/24] left-[43.02%] overflow-clip right-[54.16%] top-[443.45px]" data-name="uit:calender">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-1.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.645 19.645">
            <path d={svgPaths.p2a269480} fill="var(--fill-0, #767676)" id="Vector" stroke="var(--stroke-0, #767676)" strokeWidth="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[72%_51.83%_20.33%_4.27%]">
      <div className="absolute bg-white border border-[#bdbdbd] border-solid inset-[72%_51.83%_20.33%_4.27%] rounded-[8px]" />
      <UitCalender />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[74.04%_73.68%_22.3%_6.95%] leading-[1.4] not-italic text-[#767676] text-[16px]">DD-MM-YYYY</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[4.27%] right-[51.83%] top-[397px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[66.17%_83.09%_29.61%_4.27%] leading-[1.4] not-italic text-[#333] text-[16px]">From Date</p>
      <Group1 />
    </div>
  );
}

function UitCalender1() {
  return (
    <div className="absolute aspect-[24/24] left-[88.35%] overflow-clip right-[8.62%] top-[442.33px]" data-name="uit:calender">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-0.96%_-0.97%_-0.97%_-0.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1254 21.1254">
            <path d={svgPaths.p1bd21600} fill="var(--fill-0, #767676)" id="Vector" stroke="var(--stroke-0, #767676)" strokeWidth="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[72%_5.49%_20.33%_50.61%]">
      <div className="absolute bg-white border border-[#bdbdbd] border-solid inset-[72%_5.49%_20.33%_50.61%] rounded-[8px]" />
      <UitCalender1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[74%_27.4%_22.33%_53.69%] leading-[1.4] not-italic text-[#767676] text-[16px]">DD-MM-YYYY</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[50.61%] right-[5.49%] top-[397px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[66.17%_36.75%_29.61%_50.61%] leading-[1.4] not-italic text-[#333] text-[16px]">To Date</p>
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[66.17%_5.49%_20.33%_4.27%]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function FromDateTo() {
  return (
    <div className="absolute contents inset-[66.17%_5.49%_20.33%_4.27%]" data-name="From Date & To">
      <Group2 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] relative shrink-0 w-full z-[3]" data-name="Label margin">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525252] text-[16px] text-left tracking-[0.16px] whitespace-nowrap">Entity Tag</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[16px] text-ellipsis text-left tracking-[0.16px] whitespace-nowrap">Select Entity Tag</p>
    </div>
  );
}

function AiIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownInputTrigger() {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[15px] relative size-full">
          <TextOverflow />
          <AiIcons />
        </div>
      </div>
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <DropdownInputTrigger />
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] relative shrink-0 w-full z-[3]" data-name="Label margin">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525252] text-[16px] text-left tracking-[0.16px] whitespace-nowrap">Entity Type</p>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[16px] text-ellipsis text-left tracking-[0.16px] whitespace-nowrap">Select Entity Type</p>
    </div>
  );
}

function AiIcons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownInputTrigger1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[15px] relative size-full">
          <TextOverflow1 />
          <AiIcons1 />
        </div>
      </div>
    </div>
  );
}

function DropdownInput1() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <DropdownInputTrigger1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[4.15%] right-[5.49%] top-[88px]">
      <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[4.27%] px-[16px] py-[12px] right-[5.49%] rounded-[8px] top-[calc(50%-154px)]" data-name="Input Field">
        <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px not-italic relative text-[#767676] text-[16px]">Enter Entity ID</p>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[14.67%_83.21%_81.11%_4.15%] leading-[1.4] not-italic text-[#333] text-[16px]">Entity ID</p>
    </div>
  );
}

function EntityId() {
  return (
    <div className="absolute contents inset-[14.67%_5.49%_71.83%_4.15%]" data-name="Entity ID">
      <Group3 />
    </div>
  );
}

export default function Group6() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[600px] items-start left-1/2 pb-[65px] pt-px px-px rounded-[8px] top-1/2 w-[820px]" data-name="Modal">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Header />
        <HeaderSpacer />
        <div className="absolute bottom-0 left-0 right-0 rounded-bl-[8px]" data-name="Actions">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-px isolate items-start relative w-full">
            <div className="absolute inset-0 rounded-bl-[8px] rounded-br-[8px] z-[7]" data-name="Border">
              <div aria-hidden="true" className="absolute border-[#c6c6c6] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
            </div>
            <Spacer />
            <Component />
            <div className="-translate-y-1/2 absolute bg-[#f4f4f4] h-[64px] left-0 right-0 rounded-bl-[8px] rounded-br-[8px] top-1/2 z-[1]" data-name="Background" />
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
      <FromDateTo />
      <button className="absolute content-stretch cursor-pointer flex flex-col items-start left-[24px] p-[10px] top-[282px] w-[760px]" data-name="Entity Tag">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown - Default">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <LabelMargin />
          <DropdownInput />
        </div>
      </button>
      <button className="absolute content-stretch cursor-pointer flex flex-col items-start left-[24px] p-[10px] top-[184px] w-[761px]" data-name="Entity Type">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown - Default">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <LabelMargin1 />
          <DropdownInput1 />
        </div>
      </button>
      <EntityId />
    </div>
  );
}