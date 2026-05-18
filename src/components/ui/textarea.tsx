import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-xl border-2 border-[var(--duo-swan)] bg-[var(--duo-snow)] px-4 py-3 text-base font-body text-[var(--duo-eel)] shadow-sm placeholder:text-[var(--duo-hare)] focus-visible:outline-none focus-visible:border-[var(--duo-macaw)] focus-visible:ring-2 focus-visible:ring-[var(--duo-macaw)]/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
