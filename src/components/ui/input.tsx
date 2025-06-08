import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Input = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, type, icon, iconPosition = "left", ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex items-center rounded-md border border-input shadow-sm bg-transparent",
          className
        )}
      >
        {icon && iconPosition === "left" && (
          <span className="absolute left-2 text-muted-foreground">{icon}</span>
        )}
        <input
          type={type}
          className={cn(
            "h-9 w-full rounded-md bg-transparent px-3 py-1 text-base focus-visible:outline-none focus-visible:ring-1  dark:focus-visible:ring-primary/30 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground md:text-sm",
            icon && iconPosition === "left" && "pl-9",
            icon && iconPosition === "right" && "pr-9"
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <span className="absolute right-2 text-muted-foreground">{icon}</span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
