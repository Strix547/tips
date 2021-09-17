import * as S from './Button.styled'

export const Button = ({
  color,
  iconStart,
  iconEnd,
  children,
  variant,
  size,
  disabled,
  onClick,
  as
}) => {
  return (
    <S.Button
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
