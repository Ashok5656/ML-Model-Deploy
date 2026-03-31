import * as React from "react";

const C = "#29ABE2";

function Arm() {
  return (
    <g fill={C}>
      {/* ── Shaft ── */}
      <rect x="45" y="24" width="10" height="26"/>
      <rect x="43" y="29" width="14" height="2"   fill="white"/>
      <rect x="43" y="36" width="14" height="2"   fill="white"/>
      <rect x="43" y="43" width="14" height="2"   fill="white"/>

      {/* ── Left main prong ── */}
      <rect x="-10" y="-17" width="10" height="17" transform="translate(45,24) rotate(-44)"/>
      <rect x="-11" y="-10" width="11" height="1.8" fill="white" transform="translate(45,24) rotate(-44)"/>
      {/* left prong outer sub-fork */}
      <rect x="-9" y="-12" width="9" height="12" transform="translate(45,24) rotate(-44) translate(-10,-17) rotate(-42)"/>
      <rect x="-9" y="-7"  width="9" height="1.5" fill="white" transform="translate(45,24) rotate(-44) translate(-10,-17) rotate(-42)"/>
      {/* left prong inner sub-fork */}
      <rect x="0"  y="-12" width="9" height="12" transform="translate(45,24) rotate(-44) translate(0,-17) rotate(38)"/>
      <rect x="0"  y="-7"  width="9" height="1.5" fill="white" transform="translate(45,24) rotate(-44) translate(0,-17) rotate(38)"/>

      {/* ── Right main prong ── */}
      <rect x="0"  y="-17" width="10" height="17" transform="translate(55,24) rotate(44)"/>
      <rect x="0"  y="-10" width="11" height="1.8" fill="white" transform="translate(55,24) rotate(44)"/>
      {/* right prong outer sub-fork */}
      <rect x="0"  y="-12" width="9" height="12" transform="translate(55,24) rotate(44) translate(10,-17) rotate(42)"/>
      <rect x="0"  y="-7"  width="9" height="1.5" fill="white" transform="translate(55,24) rotate(44) translate(10,-17) rotate(42)"/>
      {/* right prong inner sub-fork */}
      <rect x="-9" y="-12" width="9" height="12" transform="translate(55,24) rotate(44) translate(0,-17) rotate(-38)"/>
      <rect x="-9" y="-7"  width="9" height="1.5" fill="white" transform="translate(55,24) rotate(44) translate(0,-17) rotate(-38)"/>

      {/* ── Left mid-arm branch ── */}
      <rect x="-9" y="-15" width="9" height="15" transform="translate(45,33) rotate(-58)"/>
      <rect x="-10" y="-9" width="11" height="1.8" fill="white" transform="translate(45,33) rotate(-58)"/>
      <rect x="-10" y="-4" width="11" height="1.8" fill="white" transform="translate(45,33) rotate(-58)"/>
      {/* left branch outer sub-fork */}
      <rect x="-8" y="-11" width="8" height="11" transform="translate(45,33) rotate(-58) translate(-9,-15) rotate(-38)"/>
      <rect x="-8" y="-6"  width="9" height="1.5" fill="white" transform="translate(45,33) rotate(-58) translate(-9,-15) rotate(-38)"/>
      {/* left branch inner sub-fork */}
      <rect x="0"  y="-11" width="8" height="11" transform="translate(45,33) rotate(-58) translate(0,-15) rotate(32)"/>
      <rect x="0"  y="-6"  width="9" height="1.5" fill="white" transform="translate(45,33) rotate(-58) translate(0,-15) rotate(32)"/>

      {/* ── Right mid-arm branch ── */}
      <rect x="0"  y="-15" width="9" height="15" transform="translate(55,33) rotate(58)"/>
      <rect x="0"  y="-9"  width="11" height="1.8" fill="white" transform="translate(55,33) rotate(58)"/>
      <rect x="0"  y="-4"  width="11" height="1.8" fill="white" transform="translate(55,33) rotate(58)"/>
      {/* right branch outer sub-fork */}
      <rect x="0"  y="-11" width="8" height="11" transform="translate(55,33) rotate(58) translate(9,-15) rotate(38)"/>
      <rect x="0"  y="-6"  width="9" height="1.5" fill="white" transform="translate(55,33) rotate(58) translate(9,-15) rotate(38)"/>
      {/* right branch inner sub-fork */}
      <rect x="-8" y="-11" width="8" height="11" transform="translate(55,33) rotate(58) translate(0,-15) rotate(-32)"/>
      <rect x="-8" y="-6"  width="9" height="1.5" fill="white" transform="translate(55,33) rotate(58) translate(0,-15) rotate(-32)"/>
    </g>
  );
}

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
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle},50,50)`}>
          <Arm />
        </g>
      ))}
      <circle cx="50" cy="50" r="5.5" fill="white"/>
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
