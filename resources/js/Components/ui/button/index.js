import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      color: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:"bg-secondary text-muted-foreground dark:text-default-950 hover:bg-secondary/80",
        success: "bg-success text-success-foreground hover:bg-success/80",
        info: "bg-info text-info-foreground hover:bg-info/80",
        warning: "bg-warning text-warning-foreground hover:bg-warning/80",
        destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",  
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
);
