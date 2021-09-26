
import { CSSProperties } from 'react'

export interface NativeProps <S extends string = never> {
    className?: string
    style?: CSSProperties & Partial<Record<S, string>>
}