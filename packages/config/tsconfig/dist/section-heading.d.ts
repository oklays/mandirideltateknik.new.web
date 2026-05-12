import type { PropsWithChildren } from "react";
type SectionHeadingProps = PropsWithChildren<{
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}>;
export declare function SectionHeading({ align, className, description, eyebrow, title, children }: SectionHeadingProps): import("react").JSX.Element;
export {};
