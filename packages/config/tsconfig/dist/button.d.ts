import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
}>;
export declare function Button({ children, className, size, type, variant, ...props }: ButtonProps): import("react").JSX.Element;
export {};
