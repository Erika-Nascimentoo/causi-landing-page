import * as React from "react";
import { cn } from "../../lib/utils";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "vertical" | "horizontal";
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({ className, orientation = "vertical", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-auto",
                    orientation === "horizontal" ? "w-full overflow-x-auto" : "h-full overflow-y-auto",
                    className
                )}
                {...props}
            >
                <div className="min-w-full inline-block align-middle">
                    {children}
                </div>
            </div>
        );
    }
);

ScrollArea.displayName = "ScrollArea";
