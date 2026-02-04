"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export interface TimelineItem {
    id: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

export interface TimelineProps {
    items: TimelineItem[];
    className?: string;
    showConnectors?: boolean;
}

export function Timeline({
    items,
    className,
    showConnectors = true,
    ...props
}: TimelineProps) {
    return (
        <div className={cn("relative flex flex-col items-center gap-0 w-full select-none cursor-default", className)} {...props}>
            {items.map((item, index) => (
                <div key={item.id} className="relative flex flex-col items-center w-full group">
                    {/* Content Block Above Sphere */}
                    <div className="flex flex-col gap-4 max-w-2xl text-center pt-8 pb-10 transform transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="type-h3 leading-tight text-text-primary group-hover:text-brand-glow transition-colors duration-300">
                            {item.title}
                        </h3>
                        {item.description && (
                            <p className="type-body text-text-secondary leading-relaxed opacity-70 group-hover:opacity-100">
                                {item.description}
                            </p>
                        )}
                    </div>

                    {/* Point (Numeric Sphere) */}
                    <div className="relative z-10">
                        <div
                            className={cn(
                                "w-14 h-14 border-2 rounded-full flex items-center justify-center bg-bg-page transition-all duration-500",
                                "border-white/10 text-text-secondary shadow-lg",
                                "group-hover:border-brand-primary group-hover:scale-110 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-glow group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                            )}
                        >
                            <span className="text-2xl font-black">
                                {item.icon}
                            </span>
                        </div>
                    </div>

                    {/* Connector Line (Vertical) */}
                    {showConnectors && index < items.length - 1 && (
                        <div className="w-px h-20 md:h-28 bg-gradient-to-b from-brand-primary/40 to-white/5 my-2" />
                    )}
                </div>
            ))}
        </div>
    );
}
