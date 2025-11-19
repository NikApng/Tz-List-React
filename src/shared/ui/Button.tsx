import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           className,
                                           variant = "primary",
                                           ...props
                                       }) => {
    const styles = clsx(
        "px-4 py-2 rounded-xl font-medium transition active:scale-95 hover:cursor-pointer",
        {
            primary: "bg-blue-600 text-white hover:bg-blue-500",
            secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
            ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
            nav: ' hover:bg-gray-200 hover:text-gray-900 hover:bg-gray-300 '
        }[variant],
        className
    );

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
};

export default Button;
