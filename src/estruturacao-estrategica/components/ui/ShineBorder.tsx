"use client";

import { cn } from "../../lib/utils";
import * as React from "react";

type TColorProp = string | string[];

interface ShineBorderProps {
    borderRadius?: number;
    borderWidth?: number;
    duration?: number;
    color?: TColorProp;
    className?: string;
    children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 */
export function ShineBorder({
    borderRadius = 24,
    borderWidth = 1,
    duration = 8,
    color = ["#8B5CF6", "#D946EF", "#8B5CF6"],
    className,
    children,
}: ShineBorderProps) {
    const colorStr = Array.isArray(color) ? color.join(",") : color;

    return (
        <div
            style={
                {
                    "--border-radius": `${borderRadius}px`,
                } as React.CSSProperties
            }
            className={cn(
                "relative grid min-h-[60px] w-full place-items-center rounded-[--border-radius] bg-brand-card/50 text-text-primary backdrop-blur-sm",
                className,
            )}
        >
            <div
                style={
                    {
                        "--border-width": `${borderWidth}px`,
                        "--border-radius": `${borderRadius}px`,
                        "--shine-pulse-duration": `${duration}s`,
                        "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                        "--background-radial-gradient": `radial-gradient(transparent,transparent,${colorStr},transparent,transparent)`,
                    } as React.CSSProperties
                }
                className="shine-layer absolute inset-0 pointer-events-none"
            ></div>
            <div className="relative z-10 w-full rounded-[--border-radius] overflow-hidden">
                {children}
            </div>
        </div>
    );
}
