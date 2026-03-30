import * as React from "react";

function Arm() {
  return (
    <g fill="#29ABE2">
      {/* ── Shaft ── */}
      <rect x="44" y="16" width="12" height="27"/>
      <rect x="42" y="21" width="16" height="2.5" fill="white"/>
      <rect x="42" y="30" width="16" height="2.5" fill="white"/>

      {/* ── Left main prong ── */}
      <rect x="-12" y="-20" width="12" height="20" transform="translate(44,16) rotate(-44)"/>
      <rect x="-13" y="-13" width="13" height="2" fill="white" transform="translate(44,16) rotate(-44)"/>
      {/* left prong outer sub-fork */}
      <rect x="-9" y="-12" width="9" height="12" transform="translate(44,16) rotate(-44) translate(-12,-20) rotate(-40)"/>
      {/* left prong inner sub-fork */}
      <rect x="0"  y="-12" width="9" height="12" transform="translate(44,16) rotate(-44) translate(0,-20) rotate(34)"/>

      {/* ── Right main prong ── */}
      <rect x="0"  y="-20" width="12" height="20" transform="translate(56,16) rotate(44)"/>
      <rect x="0"  y="-13" width="13" height="2"  fill="white" transform="translate(56,16) rotate(44)"/>
      {/* right prong outer sub-fork */}
      <rect x="0"  y="-12" width="9" height="12" transform="translate(56,16) rotate(44) translate(12,-20) rotate(40)"/>
      {/* right prong inner sub-fork */}
      <rect x="-9" y="-12" width="9" height="12" transform="translate(56,16) rotate(44) translate(0,-20) rotate(-34)"/>

      {/* ── Left mid-arm branch ── */}
      <rect x="-9" y="-15" width="9" height="15" transform="translate(44,29) rotate(-56)"/>
      <rect x="-10" y="-9" width="11" height="2" fill="white" transform="translate(44,29) rotate(-56)"/>
      {/* left branch outer sub-fork */}
      <rect x="-8" y="-11" width="8" height="11" transform="translate(44,29) rotate(-56) translate(-9,-15) rotate(-36)"/>
      {/* left branch inner sub-fork */}
      <rect x="0"  y="-11" width="8" height="11" transform="translate(44,29) rotate(-56) translate(0,-15) rotate(30)"/>

      {/* ── Right mid-arm branch ── */}
      <rect x="0"  y="-15" width="9" height="15" transform="translate(56,29) rotate(56)"/>
      <rect x="0"  y="-9"  width="11" height="2" fill="white" transform="translate(56,29) rotate(56)"/>
      {/* right branch outer sub-fork */}
      <rect x="0"  y="-11" width="8" height="11" transform="translate(56,29) rotate(56) translate(9,-15) rotate(36)"/>
      {/* right branch inner sub-fork */}
      <rect x="-8" y="-11" width="8" height="11" transform="translate(56,29) rotate(56) translate(0,-15) rotate(-30)"/>
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
