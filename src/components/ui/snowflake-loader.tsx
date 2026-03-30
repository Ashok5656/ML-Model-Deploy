import * as React from "react";

export function SnowflakeSVG({
  size = 48,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <g id="clari5-arm" fill="#29ABE2">
          {/* Shaft */}
          <rect x="45" y="17" width="10" height="26"/>
          <rect x="43" y="22" width="14" height="2.5" fill="white"/>
          <rect x="43" y="31" width="14" height="2.5" fill="white"/>

          {/* Left main prong */}
          <rect x="-10" y="-18" width="10" height="18" transform="translate(45,17) rotate(-43)"/>
          <rect x="-11" y="-11" width="11" height="2" fill="white" transform="translate(45,17) rotate(-43)"/>
          {/* Left prong outer sub-fork */}
          <rect x="-8" y="-11" width="8" height="11" transform="translate(45,17) rotate(-43) translate(-10,-18) rotate(-38)"/>
          {/* Left prong inner sub-fork */}
          <rect x="0" y="-11" width="8" height="11" transform="translate(45,17) rotate(-43) translate(0,-18) rotate(32)"/>

          {/* Right main prong */}
          <rect x="0" y="-18" width="10" height="18" transform="translate(55,17) rotate(43)"/>
          <rect x="0" y="-11" width="11" height="2" fill="white" transform="translate(55,17) rotate(43)"/>
          {/* Right prong outer sub-fork */}
          <rect x="0" y="-11" width="8" height="11" transform="translate(55,17) rotate(43) translate(10,-18) rotate(38)"/>
          {/* Right prong inner sub-fork */}
          <rect x="-8" y="-11" width="8" height="11" transform="translate(55,17) rotate(43) translate(0,-18) rotate(-32)"/>

          {/* Left mid-arm branch */}
          <rect x="-8" y="-14" width="8" height="14" transform="translate(45,29) rotate(-55)"/>
          <rect x="-9" y="-8" width="10" height="2" fill="white" transform="translate(45,29) rotate(-55)"/>
          {/* Left branch outer sub-fork */}
          <rect x="-7" y="-10" width="7" height="10" transform="translate(45,29) rotate(-55) translate(-8,-14) rotate(-35)"/>
          {/* Left branch inner sub-fork */}
          <rect x="0" y="-10" width="7" height="10" transform="translate(45,29) rotate(-55) translate(0,-14) rotate(30)"/>

          {/* Right mid-arm branch */}
          <rect x="0" y="-14" width="8" height="14" transform="translate(55,29) rotate(55)"/>
          <rect x="0" y="-8" width="10" height="2" fill="white" transform="translate(55,29) rotate(55)"/>
          {/* Right branch outer sub-fork */}
          <rect x="0" y="-10" width="7" height="10" transform="translate(55,29) rotate(55) translate(8,-14) rotate(35)"/>
          {/* Right branch inner sub-fork */}
          <rect x="-7" y="-10" width="7" height="10" transform="translate(55,29) rotate(55) translate(0,-14) rotate(-30)"/>
        </g>
      </defs>

      <use href="#clari5-arm" transform="rotate(0,50,50)"/>
      <use href="#clari5-arm" transform="rotate(60,50,50)"/>
      <use href="#clari5-arm" transform="rotate(120,50,50)"/>
      <use href="#clari5-arm" transform="rotate(180,50,50)"/>
      <use href="#clari5-arm" transform="rotate(240,50,50)"/>
      <use href="#clari5-arm" transform="rotate(300,50,50)"/>
      <circle cx="50" cy="50" r="6" fill="white"/>
    </svg>
  );
}

export function SnowflakeLoader({ message = "Loading...." }: { message?: string }) {
  return (
    <div
      style={{
        width: 210, minWidth: 210, maxWidth: 210,
        height: 100, minHeight: 100, maxHeight: 100,
      }}
      className="flex items-center gap-3 px-5 bg-white border border-[#D1D5DB] rounded-[12px] shadow-sm overflow-hidden"
    >
      <SnowflakeSVG
        size={46}
        style={{ animation: "spin 1.4s linear infinite", flexShrink: 0 }}
      />
      <span className="text-[14px] text-[#525252] font-medium whitespace-nowrap">
        {message}
      </span>
    </div>
  );
}
