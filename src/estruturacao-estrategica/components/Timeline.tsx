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
        <div className={cn("relative w-full max-w-2xl mx-auto select-none", className)}>
            {/* Static Background Line */}
            <div className="absolute left-1/2 top-28 bottom-28 w-0.5 -translate-x-1/2 pointer-events-none z-0">
                <div 
                    className="h-full w-full bg-brand-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.3)] opacity-50" 
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 30px, black calc(100% - 30px), transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30px, black calc(100% - 30px), transparent)'
                    }}
                />
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
                                    "bg-gradient-to-br from-brand-primary to-brand-glow text-white border-brand-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.4)]",
                                    "hover:scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:border-brand-glow/70"
                                )}
                            >
                                <span className="text-xl lg:text-2xl font-black">
                                    {item.icon}
                                </span>
                            </div>
                        </div>

                        {/* Content Below */}
                        <div className="flex flex-col gap-4">
                            <h3 className="type-h3 leading-tight text-text-primary tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="type-body text-text-secondary drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
