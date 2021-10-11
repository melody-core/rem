import { ReactChild, ReactNode } from "react";

export interface BadgeProps{
    content?: string | number | ReactNode;
    color?: string;
    dot?: boolean;
    max?: number | string;
}