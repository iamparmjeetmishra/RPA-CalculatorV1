import { VariantProps, cva } from "class-variance-authority";
import { FC, cn } from "react";
import React from "react";
import 

const buttonVariants = cva(
  "rounded-full flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        submit:
          "rounded-full flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none",
      },
      size: {
        default: "h-20 w-20",
        sm: "h-16, w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// function Button (className, children) {
//     <button>{children}</button>
// }
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
// VariantProps<typeof buttonVariants>
// {};

const Button: FC<ButtonProps> = ({className, size, variant, ...props }) => {
  return <button className={cn(buttonVariants({variant,size, className}))} {...props}/>;
};

export { Button, buttonVariants };
