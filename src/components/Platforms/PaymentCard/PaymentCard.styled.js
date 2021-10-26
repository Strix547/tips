import styled from 'styled-components'

import { Text, RecipientCard, RecipientCardTop, RecipientCardMain } from 'styled'
import { Button as ButtonUI } from 'ui/Button/Button.styled'

import { changeColorLuminosity } from 'utils'

export { Text, RecipientCard, RecipientCardTop, RecipientCardMain }

export const Button = styled(ButtonUI)`
  background: ${({ bgColor = 'var(--color-primary-200)' }) => bgColor};
  color: ${({ textColor }) => textColor};
  transition: 0.3s;

  &:hover {
    background: ${({ bgColor = 'var(--color-primary-200)' }) =>
      changeColorLuminosity(bgColor, 0.15)};
    transition: 0.3s;
  }
`
