import * as S from './Button.styled'

export const Button = ({ iconStart, iconEnd, children, variant, size, disabled }) => {
  return (
    <S.Button variant={variant} size={size} disabled={disabled}>
      {iconStart}
      <span>{children}</span>
      {iconEnd}
    </S.Button>
  )
}
