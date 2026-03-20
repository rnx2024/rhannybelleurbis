import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#87CEFA] text-[#0B3B5E] shadow-sm hover:bg-[#74C6F5]",
        secondary:
          "bg-[#BFE7FF] text-[#0B3B5E] shadow-sm hover:bg-[#A7DDFF]",
        outline:
          "border border-[#87CEFA] bg-white text-[#0B3B5E] hover:bg-[#E7F6FF]",
        ghost: "hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-6",
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
  href?: string;
}

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {props.children}
      </Link>
    );
  }

  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
