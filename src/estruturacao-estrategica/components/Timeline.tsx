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
}

export function Timeline({
    items,
    className,
}: TimelineProps) {
    return (
        <div className={cn("relative w-full max-w-2xl mx-auto py-10 select-none", className)}>
            {/* Static Background Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none z-0">
                <div className="h-full w-full bg-white/5" />
            </div>

            <div className="flex flex-col gap-12 lg:gap-20 relative z-10 w-full items-center">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center text-center gap-6 w-full max-w-xl group cursor-default transition-all duration-300 opacity-100"
                    >
                        {/* Bullet Above */}
                        <div className="relative shrink-0">
                            <div
                                className={cn(
                                    "w-14 h-14 lg:w-16 lg:h-16 border-2 rounded-full flex items-center justify-center z-20 transition-all duration-300",
                                    "bg-brand-primary text-white border-brand-primary shadow-[0_0_30px_rgba(139,92,246,0.6)]",
                                    "hover:scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.8)]"
                                )}
                            >
                                <span className="text-xl lg:text-2xl font-black">
                                    {item.icon}
                                </span>
                            </div>
                        </div>

                        {/* Content Below */}
                        <div className="flex flex-col gap-4">
                            <h3 className="type-h3 leading-tight text-text-primary tracking-tight">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="type-body text-text-secondary">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
