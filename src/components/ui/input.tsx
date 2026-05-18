import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border-2 border-[var(--duo-swan)] bg-[var(--duo-snow)] px-4 py-3 text-base font-body text-[var(--duo-eel)] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[var(--duo-hare)] focus-visible:outline-none focus-visible:border-[var(--duo-macaw)] focus-visible:ring-2 focus-visible:ring-[var(--duo-macaw)]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
