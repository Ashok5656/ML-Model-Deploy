import * as React from "react";

/**
 * Clari5 snowflake logo — geometry:
 *   6 arms × (shaft + left/right fork prongs at ±32° + left/right mid-arm branches at ±45°)
 *   Each prong/branch built as a rotated <rect> to match the bold fork-tip style.
 *   White circuit dashes overlaid on shaft, prongs and branches.
 */
export function SnowflakeSVG({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const Arm = () => (
    <>
      {/* ── Shaft ── */}
      <rect x="46" y="21" width="8" height="29" />
      {/* White circuit dashes in shaft */}
      <rect x="44" y="28"   width="12" height="2.5" fill="white" />
      <rect x="44" y="37"   width="12" height="2.5" fill="white" />

      {/* ── Left fork prong (pivot = top-left edge of shaft, −32°) ── */}
      <rect x="-8" y="-21" width="8" height="21"
            transform="translate(46,21) rotate(-32)" />
      <rect x="-9" y="-14" width="9" height="2.2" fill="white"
            transform="translate(46,21) rotate(-32)" />

      {/* ── Right fork prong (pivot = top-right edge of shaft, +32°) ── */}
      <rect x="0" y="-21" width="8" height="21"
            transform="translate(54,21) rotate(32)" />
      <rect x="0" y="-14" width="9" height="2.2" fill="white"
            transform="translate(54,21) rotate(32)" />

      {/* ── Left mid-arm branch (pivot = left edge, −45°) ── */}
      <rect x="-7" y="-14" width="7" height="14"
            transform="translate(46,33) rotate(-45)" />
      <rect x="-8" y="-9"  width="8" height="2" fill="white"
            transform="translate(46,33) rotate(-45)" />

      {/* ── Right mid-arm branch (pivot = right edge, +45°) ── */}
      <rect x="0" y="-14" width="7" height="14"
            transform="translate(54,33) rotate(45)" />
      <rect x="0" y="-9"  width="8" height="2" fill="white"
            transform="translate(54,33) rotate(45)" />
    </>
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="#29ABE2">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <g key={angle} transform={`rotate(${angle},50,50)`}>
            <Arm />
          </g>
        ))}
        {/* Centre hole */}
        <circle cx="50" cy="50" r="5.5" fill="white" />
      </g>
    </svg>
  );
}

/**
 * Loader card — strictly 210 × 100 px.
 * Uses /favicon.svg (the Clari5 logo) as the spinning icon.
 */
export function SnowflakeLoader({ message = "Loading...." }: { message?: string }) {
  return (
    <div
      style={{
        width: 210, minWidth: 210, maxWidth: 210,
        height: 100, minHeight: 100, maxHeight: 100,
      }}
      className="flex items-center gap-3 px-5 bg-white border border-[#D1D5DB] rounded-[12px] shadow-sm overflow-hidden"
    >
      <img
        src="/favicon.svg"
        alt="Clari5"
        width={46}
        height={46}
        style={{ animation: "spin 1.4s linear infinite", flexShrink: 0 }}
      />
      <span className="text-[14px] text-[#525252] font-medium whitespace-nowrap">
        {message}
      </span>
    </div>
  );
}
