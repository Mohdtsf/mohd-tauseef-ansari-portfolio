import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const variantClasses = {
            default: "bg-neon-blue text-background hover:bg-neon-blue/80 shadow-[0_0_10px_rgba(0,245,255,0.2)] hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]",
            outline: "border border-neon-blue text-neon-blue hover:bg-neon-blue/10 shadow-[0_0_10px_rgba(0,245,255,0.2)] hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]",
            ghost: "hover:bg-accent hover:text-accent-foreground",
        }
        const sizeClasses = {
            default: "h-10 px-4 py-2 text-sm",
            sm: "h-9 rounded-md px-3 text-sm",
            lg: "h-11 rounded-md px-8 text-base",
        }

        const classes = cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variantClasses[variant],
            sizeClasses[size],
            className
        )

        if (asChild && React.isValidElement(props.children)) {
            const child = props.children as React.ReactElement<any>
            const childProps = {
                ...props,
                ...child.props,
                className: cn(classes, child.props.className),
                ref: ref as React.Ref<any>
            }
            return React.cloneElement(child, childProps)
        }

        return (
            <button className={classes} ref={ref} {...props} />
        )
    }
)
Button.displayName = "Button"

export { Button }
