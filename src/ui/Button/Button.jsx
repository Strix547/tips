import * as S from './Button.styled'

export const Button = ({
  type,
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
