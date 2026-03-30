import svgPaths from "./svg-1osittko3m";

function Group() {
  return (
    <div className="absolute contents inset-[0_0_0.6%_0]">
      <div className="absolute inset-[0_0_0.6%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 260.434">
          <path d={svgPaths.p5ee4b00} fill="var(--fill-0, white)" id="Rectangle 3647" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium inset-[32.82%_37.22%_58.78%_35.83%] leading-[1.4] not-italic text-[#ff4057] text-[16px] whitespace-nowrap">Are you sure</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[45.42%_26.94%_32.44%_26.39%] leading-[1.8] not-italic text-[#767676] text-[16px] text-center whitespace-nowrap">
        <p className="mb-0">Do you want to Delete</p>
        <p>Entity Tag</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_0_0.6%_0]">
      <Group />
    </div>
  );
}

function SiInfoLine() {
  return (
    <div className="absolute left-[159px] size-[36px] top-[36px]" data-name="si:info-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="si:info-line">
          <path d={svgPaths.p11cfadc0} id="Vector" stroke="var(--stroke-0, #FF4057)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.6" />
        </g>
      </svg>
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
      <div className="absolute content-stretch flex h-[55px] items-start left-[180px] rounded-bl-[8px] rounded-br-[8px] top-[207px] w-[180px]" data-name="Button Primary">
        <div className="bg-[#ff4057] flex-[1_0_0] min-h-px min-w-px relative rounded-br-[8px]" data-name="Button Primary">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Yes, Delete</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[55px] items-start left-0 rounded-bl-[8px] top-[207px] w-[180px]" data-name="Button Primary">
        <div className="bg-[#f1f1f1] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-bl-[8px]" data-name="Button Primary">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#ff4057] text-[16px] tracking-[0.16px] whitespace-nowrap">No, Cancel</p>
            </div>
          </div>
        </div>
      </div>
      <SiInfoLine />
    </div>
  );
}