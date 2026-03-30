import * as React from "react";
import { Button, type ButtonProps } from "./button";
import { cn } from "./utils";

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden group transition-all duration-300 bg-[#2A53A0] hover:bg-[#1e3d7a] text-white border-0",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-white/5" />
        </div>
      </Button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
