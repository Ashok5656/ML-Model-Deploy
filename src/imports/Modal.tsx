import svgPaths from "./svg-moa8euft8w";

function IconFeatherTrash() {
  return (
    <div className="absolute inset-[15.97%_45.31%_69.7%_45.28%]" data-name="Icon feather-trash-2">
      <div className="absolute inset-[-3.99%_-4.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.872 40.634">
          <g id="Icon feather-trash-2">
            <path d="M1.5 9.02802H35.372" id="Path 84048" stroke="var(--stroke-0, #FF4057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p37487180} id="Path 84049" stroke="var(--stroke-0, #FF4057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M14.672 18.437V29.727" id="Path 84050" stroke="var(--stroke-0, #FF4057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M22.1992 18.437V29.727" id="Path 84051" stroke="var(--stroke-0, #FF4057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="relative size-full" data-name="Modal">
      <div className="absolute inset-[0_0_0.79%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 260.434">
          <path d={svgPaths.p11f5ce40} fill="var(--fill-0, white)" id="Rectangle 3647" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[37.2%_41.11%_54.42%_42.22%] leading-[1.4] not-italic text-[#dd170e] text-[16px] whitespace-nowrap">Deleted</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48%_29.72%_29.9%_31.67%] leading-[1.8] not-italic text-[#767676] text-[16px] text-center whitespace-nowrap">
        <p className="mb-0">Entity Tag Deleted</p>
        <p>Successfully</p>
      </div>
      <IconFeatherTrash />
      <div className="absolute content-stretch flex h-[55px] items-start left-0 rounded-bl-[8px] rounded-br-[8px] top-[207.5px] w-[360px]" data-name="Continue Button">
        <div className="bg-[#ff4057] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[5px] rounded-br-[5px]" data-name="Button Primary">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Continue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}