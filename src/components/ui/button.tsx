import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold tracking-tight transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--duo-macaw)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--duo-feather)] text-white border border-transparent shadow-sm hover:opacity-95 hover:shadow-md active:scale-[0.98]",
        destructive:
          "bg-[var(--duo-cardinal)] text-white border border-transparent shadow-sm hover:opacity-95 hover:shadow-md active:scale-[0.98]",
        outline:
          "border border-[var(--duo-swan)] bg-background text-[var(--duo-eel)] dark:text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        secondary:
          "bg-[var(--duo-polar)] text-[var(--duo-eel)] dark:bg-[var(--duo-swan)]/20 dark:text-foreground shadow-sm hover:brightness-[0.97] active:scale-[0.98]",
        ghost: "hover:bg-[var(--duo-polar)] dark:hover:bg-[var(--duo-swan)]/20 hover:text-[var(--duo-eel)] dark:text-foreground",
        link: "text-[var(--duo-macaw)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 text-sm rounded-lg",
        sm: "h-8.5 px-3.5 text-xs rounded-md",
        lg: "h-11 px-7 text-base rounded-lg",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
