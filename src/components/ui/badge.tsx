import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--duo-macaw)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--duo-feather)] text-white shadow hover:brightness-105",
        secondary:
          "border-transparent bg-[var(--duo-bee)] text-[var(--duo-eel)] hover:brightness-95",
        destructive:
          "border-transparent bg-[var(--duo-cardinal)] text-white shadow hover:brightness-105",
        macaw:
          "border-transparent bg-[var(--duo-macaw)] text-white shadow hover:brightness-105",
        outline: "text-[var(--duo-eel)] border-[var(--duo-swan)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
