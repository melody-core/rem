import { ForwardedRef } from "react";

export enum TagTypes {
    default = 'default',
    primary = 'primary',
    success = 'success',
    warning = 'warning',
    danger = 'danger'
}

export enum SizeTypes {
    large = 'large',
    medium = 'medium',
    small = 'small'
}

export interface TagProps{
    size?: SizeTypes,
    color?: string,
    mark?: boolean,
    plain?: boolean,
    round?: boolean,
    textColor?: string,
    closeable?: boolean,
    type?: TagTypes,
    className?: string,
}