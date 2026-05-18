import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold uppercase tracking-wide transition-[transform,box-shadow] duration-100 ease-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--duo-macaw)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 -webkit-tap-highlight-color-transparent select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--duo-feather)] text-white shadow-[0_5px_0_var(--duo-feather-shadow)] hover:brightness-105 active:translate-y-[5px] active:shadow-none",
        destructive:
          "bg-[var(--duo-cardinal)] text-white shadow-[0_5px_0_var(--duo-cardinal-shadow)] hover:brightness-105 active:translate-y-[5px] active:shadow-none",
        outline:
          "border-2 border-[var(--duo-swan)] bg-[var(--duo-snow)] text-[var(--duo-eel)] shadow-[0_5px_0_var(--duo-swan)] hover:bg-[var(--duo-polar)] active:translate-y-[5px] active:shadow-none",
        secondary:
          "bg-[var(--duo-polar)] text-[var(--duo-eel)] shadow-[0_5px_0_var(--duo-swan)] hover:brightness-[0.97] active:translate-y-[5px] active:shadow-none",
        ghost: "hover:bg-[var(--duo-polar)] hover:text-[var(--duo-eel)]",
        link: "text-[var(--duo-macaw)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 text-[15px] rounded-xl",
        sm: "h-9 px-4 py-2 text-xs rounded-lg",
        lg: "h-12 px-8 py-3 text-base rounded-xl",
        icon: "h-10 w-10 rounded-full",
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
