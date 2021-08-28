import * as S from './Button.styled'

export const Button = ({ iconStart, iconEnd, children, variant, size, disabled, onClick, as }) => {
  return (
    <S.Button variant={variant} size={size} disabled={disabled} as={as} onClick={onClick}>
      {iconStart}
      <span>{children}</span>
      {iconEnd}
    </S.Button>
  )
}
