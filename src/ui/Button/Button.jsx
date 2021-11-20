import { forwardRef } from 'react'

import * as S from './Button.styled'

export const Button = forwardRef(
  ({ type, color, iconStart, iconEnd, children, variant, size, disabled, onClick, as }, ref) => {
    return (
      <S.Button
        ref={ref}
        type={type}
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        as={as}
        onClick={onClick}
      >
        {iconStart}
        <span>{children}</span>
        {iconEnd}
      </S.Button>
    )
  }
)
