import svgPaths from "./svg-6gpx7ss51c";
import imgImageClari5 from "figma:asset/6dfdb4c1a68d250267231b32de1f1a07e05b6acf.png";

function ImageClari() {
  return (
    <div className="h-[32px] relative shrink-0 w-[92.281px]" data-name="Image (Clari5)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageClari5} />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[8px] relative size-full">
          <ImageClari />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pb-px px-[16px] relative rounded-[inherit] size-full">
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[46px] left-0 rounded-[8px] top-0 w-[227px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[16px] tracking-[-0.14px] whitespace-nowrap">Search menus...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p89a0f80} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[71px] relative shrink-0 w-[259px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[12px] px-[16px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd979300} fill="var(--fill-0, #2A53A0)" id="Vector" />
          <path d={svgPaths.p3d96f6f0} fill="var(--fill-0, #2A53A0)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#2a53a0] text-[15px] top-[-2px] tracking-[-0.15px] whitespace-nowrap">CONFIG</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2fb7a700} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Icon1 />
          <Text />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Action Maintenance</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[45.625px] pt-[3px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon3 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14085880} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#4a5565] text-[15px] top-[-2px] tracking-[0.3px] whitespace-nowrap">Case Management Syste..</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pr-[-109.516px] pt-[2px] relative rounded-[inherit] size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon4 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b530bb0} fill="var(--fill-0, #2A53A0)" id="Vector" />
          <path d={svgPaths.pa3e3b00} fill="var(--fill-0, #2A53A0)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#2a53a0] text-[15px] tracking-[0.3px] whitespace-nowrap">Entity Tagging</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[86.422px] pt-[2px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#eaf2ff] h-[40.5px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2a53a0] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon5 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p7e4b80} fill="var(--fill-0, #4A5565)" id="Vector" />
          <path d={svgPaths.p2891c400} fill="var(--fill-0, #4A5565)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex h-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Jobs</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[156.141px] pt-[3px] relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon6 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3644b780} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex h-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Manual Alert Creation</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[31.906px] pt-[3px] relative size-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon7 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35784f80} fill="var(--fill-0, #4A5565)" id="Vector" />
          <path d={svgPaths.pcd401f0} fill="var(--fill-0, #4A5565)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex h-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Reference Codes</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[65.125px] pt-[3px] relative size-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon8 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2fb80b00} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#4a5565] text-[15px] top-[-2px] tracking-[0.3px] whitespace-nowrap">Remittance Watchlist Con.</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pr-[-67.344px] pt-[2px] relative rounded-[inherit] size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon9 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #4A5565)" id="Vector" />
          <path d={svgPaths.p3c97280} fill="var(--fill-0, #4A5565)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex h-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Risk Level Assessment</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[23.953px] pt-[3px] relative size-full">
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon10 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p4fa5e00} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Scenario Authoring Tool</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[14.406px] pt-[2px] relative size-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon11 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12767580} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex h-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4a5565] text-[15px] tracking-[0.3px] whitespace-nowrap">Strategy Builder</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[73.719px] pt-[2px] relative size-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[40.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[27px] pr-[16px] relative size-full">
          <Icon12 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[441px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[495px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container8 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p9ce6900} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p592c0c0} fill="var(--fill-0, #161616)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#161616] text-[15px] top-[-2px] tracking-[-0.15px] whitespace-nowrap">AUDIT</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Icon13 />
          <Text21 />
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2778e900} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p35e5e500} fill="var(--fill-0, #161616)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#161616] text-[15px] top-[-2px] tracking-[-0.15px] whitespace-nowrap">AML</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Icon15 />
          <Text22 />
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2bb9fc00} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p123bf200} fill="var(--fill-0, #161616)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#161616] text-[15px] top-[-2px] tracking-[-0.15px] whitespace-nowrap">REPORTS</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Icon17 />
          <Text23 />
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2d10b000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#161616] text-[15px] top-[-2px] tracking-[-0.15px] whitespace-nowrap">INVESTIGATION</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Icon19 />
          <Text24 />
          <Icon20 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[719px] items-start pt-[8px] relative shrink-0 w-full" data-name="Navigation">
      <Container7 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Navigation />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white h-[1038px] left-0 top-0" data-name="Container">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip pr-px relative rounded-[inherit]">
        <Container1 />
        <Container4 />
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[12.5px] w-[628.656px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Your license will expire on June 12, 2026</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_8002_5790)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p33e56000} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8002_5790">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[209.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Clari5 - A Perfios Software Company</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[16px] items-center justify-center left-[644.66px] pr-[0.016px] top-[12.5px] w-[628.672px]" data-name="Container">
      <Icon21 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Important Links</p>
      </div>
    </div>
  );
}

function Headset() {
  return (
    <div className="absolute contents inset-[6.37%_6.25%_6.23%_6.25%]" data-name="Headset">
      <div className="absolute inset-[6.37%_6.25%_6.23%_6.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.9846">
          <path d={svgPaths.p3939ba00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Headset />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[4px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#393939] left-0 rounded-[24px] size-[24px] top-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute contents inset-[0_9.37%_9.38%_9.35%]" data-name="Vector">
      <div className="absolute bottom-[59.38%] left-[59.38%] right-1/4 top-1/4" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.49999 2.5">
          <path d={svgPaths.p1948cf0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.5%_12.5%_59.38%_59.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.49999 4.5">
          <path d={svgPaths.p3f6f2f80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_9.37%_9.38%_9.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0044 14.5">
          <path d={svgPaths.p33219e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function PhoneVoice() {
  return (
    <div className="absolute contents inset-[0_9.37%_9.38%_9.35%]" data-name="Phone--voice">
      <Vector />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <PhoneVoice />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[4px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#393939] left-[32px] rounded-[24px] size-[24px] top-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[56px]" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center justify-end left-[1273.33px] top-[8.5px] w-[628.672px]" data-name="Container">
      <Text26 />
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] border-[#e5e7eb] border-solid border-t bottom-0 h-[42px] left-0 w-[1918px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ed28900} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] size-[36px] top-[9px]" data-name="Container">
      <Button15 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2d10b000} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Search Genie</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] h-[40px] items-center left-[655.8px] px-[17px] py-px rounded-[8px] top-[7px] w-[260px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon25 />
      <TextInput1 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3f2fdc00} fill="var(--fill-0, #6A7282)" id="Vector" />
          <path d={svgPaths.p3440e200} fill="var(--fill-0, #6A7282)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2a2ab800} fill="var(--fill-0, #6A7282)" id="Vector" />
          <path d={svgPaths.p2812ddc0} fill="var(--fill-0, #6A7282)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.38%_12.53%_9.38%_12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9941 16.25">
          <path d={svgPaths.p26fef00} fill="var(--fill-0, #6A7282)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[112px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#e5e7eb] h-[24px] left-[282px] top-[6px] w-px" data-name="Container" />;
}

function Text27() {
  return (
    <div className="h-[14px] relative shrink-0 w-[42.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] left-[21.5px] not-italic text-[#364153] text-[14px] text-center top-0 whitespace-nowrap">Ashok</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[95.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[48px] not-italic text-[#6a7282] text-[10px] text-center top-0 whitespace-nowrap">Compliance Analyst</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[31px] items-start left-[38px] top-[1.5px] w-[95.406px]" data-name="Container">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#2a53a0] items-center justify-center left-0 pr-[0.016px] rounded-[33554400px] shadow-[0px_0px_0px_0px_white,0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[28px] to-[#4a7bd0] top-0" data-name="Container">
      <Text29 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#00c950] border-2 border-solid border-white left-[18px] rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[12px] top-[18px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="absolute left-[4px] size-[28px] top-[3px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[36px] left-[305px] rounded-[8px] top-0 w-[157.406px]" data-name="Button">
      <Container25 />
      <div className="absolute flex items-center justify-center left-[139.41px] size-[16px] top-[9px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon29 />
        </div>
      </div>
      <Container26 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p269d7700} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text31() {
  return <div className="absolute bg-[#ff6467] left-[-4.24px] opacity-12 rounded-[33554400px] size-[18.47px] top-[-4.24px]" data-name="Text" />;
}

function Text32() {
  return <div className="absolute bg-[#fb2c36] border-2 border-solid border-white left-0 rounded-[33554400px] size-[10px] top-0" data-name="Text" />;
}

function Text30() {
  return (
    <div className="absolute left-[18px] size-[10px] top-[8px]" data-name="Text">
      <Text31 />
      <Text32 />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute left-[168px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon30 />
      <Text30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1b143f00} fill="var(--fill-0, #6A7282)" id="Vector" />
          <path d={svgPaths.p55cae00} fill="var(--fill-0, #6A7282)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[224px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon31 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[36px] left-[1179.59px] top-[9px] w-[462.406px]" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
      <Container24 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[55px] items-start left-[260px] pb-px top-0 w-[1658px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function MdiLightPlus() {
  return (
    <div className="relative size-[24px]" data-name="mdi-light:plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi-light:plus">
          <path d={svgPaths.p2ef52300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddBtn() {
  return (
    <div className="absolute bg-[#2a53a0] content-stretch flex gap-[10px] items-center justify-center left-[1760px] px-[16px] py-[11px] rounded-[8px] top-[174px]" data-name="Add Btn">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Add Now</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <MdiLightPlus />
        </div>
      </div>
    </div>
  );
}

function IconoirFilter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="iconoir:filter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="iconoir:filter">
          <path d={svgPaths.p21861b60} id="Vector" stroke="var(--stroke-0, #2A53A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[10px] items-center justify-center left-[1648px] px-[16px] py-[12px] rounded-[8px] top-[174px]">
      <div aria-hidden="true" className="absolute border border-[#2a53a0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#2a53a0] text-[16px] whitespace-nowrap">Filter</p>
      <IconoirFilter />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[278px] top-[174px]">
      <AddBtn />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[278px] not-italic text-[#161616] text-[18px] top-[186px] tracking-[0.16px] whitespace-nowrap">Entity Tagging List</p>
      <Frame2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 whitespace-nowrap">Entity Tagging</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[28px] relative shrink-0 w-[123.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[27px] not-italic text-[#2a53a0] text-[14px] text-center top-0 whitespace-nowrap">CONFIG</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button22 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[47.5px] not-italic text-[#161616] text-[14px] text-center top-0 whitespace-nowrap">Entity Tagging</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text33 />
        <Button23 />
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[170.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Navigation1 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[45px] items-center justify-between pb-px px-[16px] right-[2px] top-[55px] w-[1658px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.77%_0.01%]" data-name="Group">
      <div className="absolute inset-[-0.13%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1620.11 786">
          <g id="Group">
            <path d={svgPaths.p396db900} fill="var(--fill-0, white)" id="Rectangle 31" stroke="var(--stroke-0, #E0E0E0)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[93.11px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[388.11px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[737.11px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[1092.11px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[1411.11px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #8D8D8D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0_0.01%_93.74%_0]">
      <div className="absolute inset-[0_0.01%_93.74%_0]">
        <div className="absolute inset-[-2.05%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1620.11 50.683">
            <path d={svgPaths.p210af8c0} fill="var(--fill-0, #F0F0F0)" id="Rectangle 32" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[1.95%_76.51%_95.6%_18.73%] leading-[normal] not-italic text-[#2a53a0] text-[16px]">Entity Tag</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[1.95%_94.68%_95.6%_1.3%] leading-[normal] not-italic text-[#2a53a0] text-[16px]">Entity ID</p>
      <Icon32 />
      <Icon33 />
      <Icon34 />
      <Icon35 />
      <Icon36 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[1.95%_54.88%_95.6%_39.74%] leading-[normal] not-italic text-[#2a53a0] text-[16px]">Entity Type</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[1.95%_33.07%_95.6%_59.08%] leading-[normal] not-italic text-[#2a53a0] text-[16px]">Entity Start Date</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[1.95%_13.29%_95.6%_79.41%] leading-[normal] not-italic text-[#2a53a0] text-[16px]">Entity End Date</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_0_-0.77%_0]">
      <Group />
      <Group11 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[1.84%_1.79%_94.97%_93.9%]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[1.84%_1.79%_94.97%_93.9%] leading-[18px] not-italic text-[#2a53a0] text-[16px] tracking-[0.16px]">Action</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.84%_1.79%_94.97%_93.9%]">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_0_-0.77%_0]">
      <Group4 />
      <Group2 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[11.5px] w-[109.531px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.4] left-0 not-italic text-[#333] text-[14px] top-0 whitespace-nowrap">Items per page:</p>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option2() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option3() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-0 pb-px pl-[-410.531px] pr-[467.531px] pt-[-837.5px] top-[-0.5px] w-[57px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[33px] size-[16px] top-[15.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2fb7a700} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[47px] left-[133.53px] top-0 w-[57px]" data-name="Container">
      <Dropdown />
      <Icon37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text34 />
        <Container36 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[21px] left-0 top-[3px] w-[34px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#161616] text-[16px] top-[-3px] w-[42px]">1–15</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[66px] top-0 w-[15.328px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">15</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[-84px] top-0 w-[15.328px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">15</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[24px] left-[0.47px] top-0 w-[129.328px]">
      <Text36 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[43px] not-italic text-[#525252] text-[16px] top-0 whitespace-nowrap">of</p>
      <Text37 />
      <Text38 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[91.33px] not-italic text-[#525252] text-[16px] top-0 whitespace-nowrap">items</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[47px] relative shrink-0 w-[142.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[47px] relative shrink-0 w-[350.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container35 />
        <Container37 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute content-stretch flex h-[47px] items-center left-[64px] pr-[17px] top-0 w-[90.906px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#525252] text-[16px] whitespace-nowrap">of 1 pages</p>
    </div>
  );
}

function Option4() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-0 pb-px pl-[-1282.094px] pr-[1345.094px] pt-[-837.5px] top-[-0.5px] w-[63px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none" />
      <Option4 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-[35px] size-[16px] top-[15.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2fb7a700} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[47px] left-px top-0 w-[63px]" data-name="Container">
      <Dropdown1 />
      <Icon38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text39 />
        <Container40 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[16.91px] not-italic text-[#161616] text-[16px] top-[12.5px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L6.25 10L12.5 5V15Z" fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[47px] opacity-25 relative shrink-0 w-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 5L13.75 10L7.5 15V5Z" fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-h-px min-w-px opacity-25 relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-px relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[47px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button24 />
        <Button25 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[47px] relative shrink-0 w-[250.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container39 />
        <Container41 />
      </div>
    </div>
  );
}

function CarbonPaginationFooter() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[94.88%_0.01%_-0.77%_0.01%] items-center justify-between rounded-bl-[8px] rounded-br-[8px]" data-name="CarbonPaginationFooter">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-bl-[9px] rounded-br-[9px]" />
      <Container34 />
      <Container38 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_0_-0.77%_0]">
      <Group1 />
      <CarbonPaginationFooter />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[0_0_-0.77%_0]">
      <Group5 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[23px] not-italic text-[#161616] text-[16px] top-[10px] tracking-[0.16px] whitespace-nowrap">
      <p className="absolute left-[23px] top-[10px]">412587963514</p>
      <p className="absolute left-[23px] top-[279px]">987654321012</p>
      <p className="absolute left-[23px] top-[57px]">102938475615</p>
      <p className="absolute left-[23px] top-[324px]">293847561023</p>
      <p className="absolute left-[23px] top-[100px]">876543210987</p>
      <p className="absolute left-[23px] top-[370px]">345678901234</p>
      <p className="absolute left-[23px] top-[145px]">567890123456</p>
      <p className="absolute left-[23px] top-[415px]">789012345678</p>
      <p className="absolute left-[23px] top-[188px]">901234567890</p>
      <p className="absolute left-[23px] top-[462px]">012345678901</p>
      <p className="absolute left-[23px] top-[233px]">234567890123</p>
      <p className="absolute left-[23px] top-[504px]">456789012345</p>
      <p className="absolute left-[23px] top-[547px]">678901234567</p>
      <p className="absolute left-[23px] top-[594px]">890123456789</p>
      <p className="absolute left-[23px] top-[638px]">321654987000</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[23px] top-[10px]">
      <Group12 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[23px] top-[10px]">
      <Group9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[23px] not-italic text-[#161616] text-[16px] top-[711px] tracking-[0.16px] whitespace-nowrap">765908341200</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[957px] not-italic text-[#161616] text-[16px] top-[14px] tracking-[0.16px] whitespace-nowrap">
      <p className="absolute left-[957px] top-[14px]">27-05-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[279px]">27-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[56px]">20-05-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[323px]">20-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[101px]">15-05-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[370px]">15-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[549px]">15-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[145px]">14-05-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[417px]">14-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[591px]">14-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[189px]">09-05-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[459px]">09-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[636px]">09-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[680px]">09-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[235px]">28-04-2025 14:30:50</p>
      <p className="absolute left-[957px] top-[504px]">28-03-2025 14:30:50</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1282px] not-italic text-[#161616] text-[16px] top-[11px] tracking-[0.16px] whitespace-nowrap">
      <p className="absolute left-[1282px] top-[11px]">28-05-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[278px]">28-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[58px]">21-05-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[323px]">21-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[101px]">16-05-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[370px]">16-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[145px]">15-05-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[415px]">15-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[548px]">15-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[189px]">10-05-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[460px]">10-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[592px]">10-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[233px]">29-04-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[503px]">29-03-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[637px]">29-03-2025 14:30:50</p>
      <p className="absolute left-[1282px] top-[682px]">29-03-2025 14:30:50</p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[6px]" data-name="Button">
      <Icon41 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[51px]" data-name="Button">
      <Icon42 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[141px]" data-name="Button">
      <Icon43 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[6px]" data-name="Button">
      <Icon44 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[51px]" data-name="Button">
      <Icon45 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[96px]" data-name="Button">
      <Icon46 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[96px]" data-name="Button">
      <Icon47 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[1513px] top-[96px]">
      <Button31 />
      <Button32 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[141px]" data-name="Button">
      <Icon48 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[185px]" data-name="Button">
      <Icon49 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[185px]" data-name="Button">
      <Icon50 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[1513px] top-[185px]">
      <Button34 />
      <Button35 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[230px]" data-name="Button">
      <Icon51 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[230px]" data-name="Button">
      <Icon52 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[1513px] top-[230px]">
      <Button36 />
      <Button37 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[276px]" data-name="Button">
      <Icon53 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[276px]" data-name="Button">
      <Icon54 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[1513px] top-[276px]">
      <Button38 />
      <Button39 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[320px]" data-name="Button">
      <Icon55 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[320px]" data-name="Button">
      <Icon56 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[1513px] top-[320px]">
      <Button40 />
      <Button41 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[366px]" data-name="Button">
      <Icon57 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[366px]" data-name="Button">
      <Icon58 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[1513px] top-[366px]">
      <Button42 />
      <Button43 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button44() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[413px]" data-name="Button">
      <Icon59 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[413px]" data-name="Button">
      <Icon60 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[1513px] top-[413px]">
      <Button44 />
      <Button45 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[456px]" data-name="Button">
      <Icon61 />
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button47() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[456px]" data-name="Button">
      <Icon62 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[1513px] top-[456px]">
      <Button46 />
      <Button47 />
    </div>
  );
}

function Icon63() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button48() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[502px]" data-name="Button">
      <Icon63 />
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button49() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[502px]" data-name="Button">
      <Icon64 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[1513px] top-[502px]">
      <Button48 />
      <Button49 />
    </div>
  );
}

function Icon65() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button50() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[544px]" data-name="Button">
      <Icon65 />
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button51() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[544px]" data-name="Button">
      <Icon66 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[1513px] top-[544px]">
      <Button50 />
      <Button51 />
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button52() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[590px]" data-name="Button">
      <Icon67 />
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button53() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[590px]" data-name="Button">
      <Icon68 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[1513px] top-[590px]">
      <Button52 />
      <Button53 />
    </div>
  );
}

function Icon69() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19834d80} fill="var(--fill-0, #2A53A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button54() {
  return (
    <div className="absolute bg-[#e6f0ff] content-stretch flex items-center justify-center left-[1513px] rounded-[8px] size-[28px] top-[636px]" data-name="Button">
      <Icon69 />
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35914100} fill="var(--fill-0, #DA1E28)" id="Vector" />
          <path d={svgPaths.pb884f00} fill="var(--fill-0, #DA1E28)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button55() {
  return (
    <div className="absolute bg-[#fff1f1] content-stretch flex items-center justify-center left-[1553px] rounded-[8px] size-[28px] top-[636px]" data-name="Button">
      <Icon70 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[1513px] top-[636px]">
      <Button54 />
      <Button55 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[1513px] top-[6px]">
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Group28 />
      <Button33 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[6.28%_0_67.52%_0.05%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1615.11 178.414">
        <g id="Group 169601">
          <g id="Path 84378">
            <mask fill="white" id="path-1-inside-1_8002_5706">
              <path d="M0 0H1615.11V0.972471H0V0Z" />
            </mask>
            <path d="M0 0H1615.11V0.972471H0V0Z" fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p1491b780} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-1-inside-1_8002_5706)" />
          </g>
          <g id="Group 169600">
            <g id="Path 84380">
              <mask fill="white" id="path-3-inside-2_8002_5706">
                <path d={svgPaths.p26c6b700} />
              </mask>
              <path d={svgPaths.p26c6b700} fill="var(--fill-0, #E0E0E0)" />
              <path d={svgPaths.p3a7dd100} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-3-inside-2_8002_5706)" />
            </g>
            <g id="Path 84379">
              <mask fill="white" id="path-5-inside-3_8002_5706">
                <path d={svgPaths.p268b5100} />
              </mask>
              <path d={svgPaths.p268b5100} fill="var(--fill-0, #E0E0E0)" />
              <path d={svgPaths.p2cadb740} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-5-inside-3_8002_5706)" />
            </g>
            <g id="Rectangle 17516">
              <mask fill="white" id="path-7-inside-4_8002_5706">
                <path d={svgPaths.p21364a00} />
              </mask>
              <path d={svgPaths.p21364a00} fill="var(--fill-0, #E0E0E0)" />
              <path d={svgPaths.p908e780} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-7-inside-4_8002_5706)" />
            </g>
            <g id="Rectangle 17517">
              <mask fill="white" id="path-9-inside-5_8002_5706">
                <path d={svgPaths.p3ab6ae00} />
              </mask>
              <path d={svgPaths.p3ab6ae00} fill="var(--fill-0, #E0E0E0)" />
              <path d={svgPaths.p25732f80} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-9-inside-5_8002_5706)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[39.23%_0_47.6%_0.05%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1615.11 89.693">
        <g id="Group 169602">
          <g id="Path 84381">
            <mask fill="white" id="path-1-inside-1_8002_5760">
              <path d={svgPaths.p13b07a00} />
            </mask>
            <path d={svgPaths.p13b07a00} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p908e780} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-1-inside-1_8002_5760)" />
          </g>
          <g id="Rectangle 17518">
            <mask fill="white" id="path-3-inside-2_8002_5760">
              <path d={svgPaths.p1964ee80} />
            </mask>
            <path d={svgPaths.p1964ee80} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p1491b780} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-3-inside-2_8002_5760)" />
          </g>
          <g id="Rectangle 17519">
            <mask fill="white" id="path-5-inside-3_8002_5760">
              <path d={svgPaths.p10c7b000} />
            </mask>
            <path d={svgPaths.p10c7b000} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p3a7dd100} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-5-inside-3_8002_5760)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[59.16%_0_1.62%_0.05%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1615.11 267.134">
        <g id="Group 169603">
          <g id="Path 84382">
            <mask fill="white" id="path-1-inside-1_8002_5689">
              <path d="M0 0H1615.11V0.972471H0V0Z" />
            </mask>
            <path d="M0 0H1615.11V0.972471H0V0Z" fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p1491b780} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-1-inside-1_8002_5689)" />
          </g>
          <g id="Path 84383">
            <mask fill="white" id="path-3-inside-2_8002_5689">
              <path d={svgPaths.p262a4200} />
            </mask>
            <path d={svgPaths.p262a4200} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p102dd7f0} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-3-inside-2_8002_5689)" />
          </g>
          <g id="Rectangle 17520">
            <mask fill="white" id="path-5-inside-3_8002_5689">
              <path d={svgPaths.p10c7b000} />
            </mask>
            <path d={svgPaths.p10c7b000} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p3a7dd100} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-5-inside-3_8002_5689)" />
          </g>
          <g id="Rectangle 17521">
            <mask fill="white" id="path-7-inside-4_8002_5689">
              <path d={svgPaths.p9a77c00} />
            </mask>
            <path d={svgPaths.p9a77c00} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p12711000} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-7-inside-4_8002_5689)" />
          </g>
          <g id="Rectangle 17524">
            <mask fill="white" id="path-9-inside-5_8002_5689">
              <path d={svgPaths.p16fcaf00} />
            </mask>
            <path d={svgPaths.p16fcaf00} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p3bc24c00} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-9-inside-5_8002_5689)" />
          </g>
          <g id="Rectangle 17522">
            <mask fill="white" id="path-11-inside-6_8002_5689">
              <path d={svgPaths.p21364a00} />
            </mask>
            <path d={svgPaths.p21364a00} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p908e780} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-11-inside-6_8002_5689)" />
          </g>
          <g id="Rectangle 17523">
            <mask fill="white" id="path-13-inside-7_8002_5689">
              <path d={svgPaths.p1c9e8380} />
            </mask>
            <path d={svgPaths.p1c9e8380} fill="var(--fill-0, #E0E0E0)" />
            <path d={svgPaths.p1a22c200} fill="var(--stroke-0, #E0E0E0)" mask="url(#path-13-inside-7_8002_5689)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[6.28%_0_1.62%_0.05%]">
      <Group24 />
      <Group25 />
      <Group26 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[6.28%_0_1.62%_0.05%]">
      <Group14 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[6.28%_0_1.62%_0.05%]">
      <Group6 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[6.28%_0_1.62%_0.05%]">
      <Group13 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[0.89px] top-[6px]">
      <Group7 />
      <Group8 />
      <Group10 />
      <Group15 />
      <Group21 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#24a148] text-[12px] top-0 whitespace-nowrap">Whitelist</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(36,161,72,0.3)] content-stretch flex inset-[0.88%_76.79%_95.01%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#24a148] text-[12px] top-0 whitespace-nowrap">Whitelist</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(36,161,72,0.3)] content-stretch flex inset-[20.56%_76.79%_75.33%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#24a148] text-[12px] top-0 whitespace-nowrap">Whitelist</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(36,161,72,0.3)] content-stretch flex inset-[40.68%_76.79%_55.21%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text42 />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#24a148] text-[12px] top-0 whitespace-nowrap">Whitelist</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(36,161,72,0.3)] content-stretch flex inset-[60.79%_76.79%_35.1%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#24a148] text-[12px] top-0 whitespace-nowrap">Whitelist</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(36,161,72,0.3)] content-stretch flex inset-[80.18%_76.79%_15.71%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#24a148] text-[12px] top-0 whitespace-nowrap">Whitelist</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(36,161,72,0.3)] content-stretch flex inset-[99.56%_76.79%_-3.67%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#ff4057] text-[12px] top-0 whitespace-nowrap">Blacklist</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[rgba(255,64,87,0.3)] content-stretch flex inset-[7.49%_76.79%_88.4%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#ff4057] text-[12px] top-0 whitespace-nowrap">Blacklist</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,64,87,0.3)] content-stretch flex inset-[27.17%_76.79%_68.72%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#ff4057] text-[12px] top-0 whitespace-nowrap">Blacklist</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(255,64,87,0.3)] content-stretch flex inset-[46.84%_76.79%_49.05%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#ff4057] text-[12px] top-0 whitespace-nowrap">Blacklist</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(255,64,87,0.3)] content-stretch flex inset-[66.96%_76.79%_28.93%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#ff4057] text-[12px] top-0 whitespace-nowrap">Blacklist</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[rgba(255,64,87,0.3)] content-stretch flex inset-[86.49%_76.79%_9.4%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#f1c21b] text-[12px] top-[-1px] whitespace-nowrap">Close Monitering</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#fcf4d6] content-stretch flex inset-[14.1%_74.07%_81.79%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#f1c21b] text-[12px] top-[-1px] whitespace-nowrap">Close Monitering</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#fcf4d6] content-stretch flex inset-[33.63%_74.07%_62.26%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#f1c21b] text-[12px] top-[-1px] whitespace-nowrap">Close Monitering</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#fcf4d6] content-stretch flex inset-[53.74%_74.07%_42.14%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#f1c21b] text-[12px] top-[-1px] whitespace-nowrap">Close Monitering</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#fcf4d6] content-stretch flex inset-[73.42%_74.07%_22.47%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#f1c21b] text-[12px] top-[-1px] whitespace-nowrap">Close Monitering</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[#fcf4d6] content-stretch flex inset-[92.95%_74.07%_2.94%_18.69%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Text55 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[0.88%_74.07%_-3.67%_18.69%]">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[6.68%_0.19%_5.78%_-0.05%] overflow-x-clip overflow-y-auto">
      <Group23 />
      <Group37 />
    </div>
  );
}

function Icon71() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p167cb080} fill="var(--fill-0, #002D9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text56() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#002d9c] text-[12px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#d0e2ff] h-[28px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon71 />
        <Text56 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex inset-[13.24%_54.51%_83.16%_39.87%] items-center" data-name="Container">
      <Container59 />
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p167cb080} fill="var(--fill-0, #002D9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text57() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#002d9c] text-[12px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#d0e2ff] h-[28px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon72 />
        <Text57 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex inset-[30.46%_54.51%_65.94%_39.87%] items-center" data-name="Container">
      <Container61 />
    </div>
  );
}

function Icon73() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p167cb080} fill="var(--fill-0, #002D9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text58() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#002d9c] text-[12px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#d0e2ff] h-[28px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon73 />
        <Text58 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex inset-[47.94%_54.51%_48.46%_39.87%] items-center" data-name="Container">
      <Container63 />
    </div>
  );
}

function Icon74() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p167cb080} fill="var(--fill-0, #002D9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text59() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#002d9c] text-[12px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#d0e2ff] h-[28px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon74 />
        <Text59 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex inset-[65.3%_54.51%_31.11%_39.87%] items-center" data-name="Container">
      <Container65 />
    </div>
  );
}

function Icon75() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p167cb080} fill="var(--fill-0, #002D9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text60() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#002d9c] text-[12px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#d0e2ff] h-[28px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon75 />
        <Text60 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex inset-[82.26%_54.51%_14.14%_39.87%] items-center" data-name="Container">
      <Container67 />
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p167cb080} fill="var(--fill-0, #002D9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text61() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#002d9c] text-[12px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#d0e2ff] h-[28px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon76 />
        <Text61 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex inset-[88.05%_54.51%_8.35%_39.87%] items-center" data-name="Container">
      <Container69 />
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pe260480} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p34e02c80} fill="var(--fill-0, #161616)" id="Vector_2" />
          <path d="M2.25 5.25H3.75V6H2.25V5.25Z" fill="var(--fill-0, #161616)" id="Vector_3" />
          <path d={svgPaths.p6a8e300} fill="var(--fill-0, #161616)" id="Vector_4" />
          <path d={svgPaths.p10408700} fill="var(--fill-0, #161616)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Text62() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#161616] text-[12px] top-0 whitespace-nowrap">Non-Customer</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#e0e0e0] h-[28px] relative rounded-[8px] shrink-0 w-[127px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Icon77 />
        <Text62 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex inset-[19.02%_55.07%_77.38%_39.93%] items-center" data-name="Container">
      <Container71 />
    </div>
  );
}

function Icon78() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pe260480} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p34e02c80} fill="var(--fill-0, #161616)" id="Vector_2" />
          <path d="M2.25 5.25H3.75V6H2.25V5.25Z" fill="var(--fill-0, #161616)" id="Vector_3" />
          <path d={svgPaths.p6a8e300} fill="var(--fill-0, #161616)" id="Vector_4" />
          <path d={svgPaths.p10408700} fill="var(--fill-0, #161616)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Text63() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#161616] text-[12px] top-0 whitespace-nowrap">Non-Customer</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex gap-[8px] h-[28px] items-center left-[645.11px] px-[12px] rounded-[8px] top-[282px] w-[127px]" data-name="Container">
      <Icon78 />
      <Text63 />
    </div>
  );
}

function Icon79() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pe260480} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p34e02c80} fill="var(--fill-0, #161616)" id="Vector_2" />
          <path d="M2.25 5.25H3.75V6H2.25V5.25Z" fill="var(--fill-0, #161616)" id="Vector_3" />
          <path d={svgPaths.p6a8e300} fill="var(--fill-0, #161616)" id="Vector_4" />
          <path d={svgPaths.p10408700} fill="var(--fill-0, #161616)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Text64() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#161616] text-[12px] top-0 whitespace-nowrap">Non-Customer</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex gap-[8px] h-[28px] items-center left-[646.11px] px-[12px] rounded-[8px] top-[418px] w-[127px]" data-name="Container">
      <Icon79 />
      <Text64 />
    </div>
  );
}

function Icon80() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pe260480} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p34e02c80} fill="var(--fill-0, #161616)" id="Vector_2" />
          <path d="M2.25 5.25H3.75V6H2.25V5.25Z" fill="var(--fill-0, #161616)" id="Vector_3" />
          <path d={svgPaths.p6a8e300} fill="var(--fill-0, #161616)" id="Vector_4" />
          <path d={svgPaths.p10408700} fill="var(--fill-0, #161616)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Text65() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#161616] text-[12px] top-0 whitespace-nowrap">Non-Customer</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex gap-[8px] h-[28px] items-center left-[647.11px] px-[12px] rounded-[8px] top-[554px] w-[127px]" data-name="Container">
      <Icon80 />
      <Text65 />
    </div>
  );
}

function Icon81() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p320c5a80} fill="var(--fill-0, #491D8B)" id="Vector" />
          <path d={svgPaths.p3a68c080} fill="var(--fill-0, #491D8B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text66() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#491d8b] text-[12px] top-0 whitespace-nowrap">Customer</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute bg-[#e8daff] content-stretch flex gap-[5px] inset-[7.46%_54.27%_88.95%_39.83%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Icon81 />
      <Text66 />
    </div>
  );
}

function Icon82() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p320c5a80} fill="var(--fill-0, #491D8B)" id="Vector" />
          <path d={svgPaths.p3a68c080} fill="var(--fill-0, #491D8B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text67() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#491d8b] text-[12px] top-0 whitespace-nowrap">Customer</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#e8daff] content-stretch flex gap-[5px] inset-[76.74%_54.27%_19.67%_39.83%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Icon82 />
      <Text67 />
    </div>
  );
}

function Icon83() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p320c5a80} fill="var(--fill-0, #491D8B)" id="Vector" />
          <path d={svgPaths.p3a68c080} fill="var(--fill-0, #491D8B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text68() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#491d8b] text-[12px] top-0 whitespace-nowrap">Customer</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-[#e8daff] content-stretch flex gap-[5px] inset-[24.68%_54.27%_71.72%_39.83%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Icon83 />
      <Text68 />
    </div>
  );
}

function Icon84() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p320c5a80} fill="var(--fill-0, #491D8B)" id="Vector" />
          <path d={svgPaths.p3a68c080} fill="var(--fill-0, #491D8B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text69() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#491d8b] text-[12px] top-0 whitespace-nowrap">Customer</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-[#e8daff] content-stretch flex gap-[5px] inset-[42.16%_54.27%_54.24%_39.83%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Icon84 />
      <Text69 />
    </div>
  );
}

function Icon85() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p320c5a80} fill="var(--fill-0, #491D8B)" id="Vector" />
          <path d={svgPaths.p3a68c080} fill="var(--fill-0, #491D8B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text70() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#491d8b] text-[12px] top-0 whitespace-nowrap">Customer</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-[#e8daff] content-stretch flex gap-[5px] inset-[59.64%_54.27%_36.76%_39.83%] items-center px-[12px] rounded-[8px]" data-name="Container">
      <Icon85 />
      <Text70 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[644.6px] top-[58px]">
      <Container58 />
      <Container60 />
      <Container62 />
      <Container64 />
      <Container66 />
      <Container68 />
      <Container70 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[778px] left-[280.89px] top-[237px] w-[1618.225px]"} data-name="Component 1">
      <Group22 />
      <Frame1 />
      <Group35 />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute inset-[90.48%_88.72%_2.38%_1.03%]" data-name="<Tab>">
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 2">
            <line id="Line" stroke="var(--stroke-0, #2A53A0)" strokeWidth="2" x2="170" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group36({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[42px] left-[260px] top-[114px] w-[1658px]"}>
      <Tab />
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal inset-[0_75.09%_47.62%_15.14%] leading-[1.4] not-italic text-[#767676] text-[16px] whitespace-nowrap">Pending for approval</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium inset-[0_89.69%_47.62%_1.99%] leading-[1.4] not-italic text-[#2a53a0] text-[16px] whitespace-nowrap">Active Entity Tags</p>
      <div className="absolute bg-[#d9d9d9] inset-[97.62%_0_0_0]" />
    </div>
  );
}

export default function EntityTagging() {
  return (
    <div className="bg-white relative size-full" data-name="Entity Tagging">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1020px] left-1/2 top-[calc(50%-30px)] w-[1920px]" data-name="Login page BG 1" />
      <Container />
      <Container9 />
      <Header />
      <Group27 />
      <Container29 />
      <Component />
      <Group36 />
    </div>
  );
}