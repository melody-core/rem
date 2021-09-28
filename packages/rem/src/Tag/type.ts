import { ReactChild, ReactChildren } from "react";

export type TagTypes = 'primary' | 'success' | 'warning' | 'danger'
export type SizeTypes = 'large' |'medium' | 'small';

export interface TagProps{
    size?: SizeTypes,
    color?: string,
    mark?: boolean,
    plain?: boolean,
    round?: boolean,
    textColor?: string,
    closeable?: boolean,
    type?: TagTypes,
}