import styled from 'styled-components'

import { Text, Label, RecipientCard, RecipientCardTop, RecipientCardMain } from 'styled'
import { AvatarBusiness } from 'components/Business/Avatar/Avatar.styled'
import { ImpressionRow } from 'common/ImpressionRow/ImpressionRow.styled'
import { Button as ButtonUI } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

export { Text, Label, RecipientCard, RecipientCardTop, RecipientCardMain }

export const RecipientCardPreview = styled.div`
  ${RecipientCardTop} {
    border-bottom: 2px solid var(--color-gray-200);
  }

  ${RecipientCardMain} {
    padding-bottom: 20px;

    ${ButtonUI} {
      margin-top: 0;
    }
  }

  ${AvatarBusiness} {
    align-items: flex-start;
  }

  ${ImpressionRow} {
    ${Text} {
      text-align: left;
    }
  }

  ${media.createMedia(380)} {
    ${RecipientCardMain} {
      width: 285px;
    }
  }
`

export const Top = styled.div`
  position: relative;
  padding: 20px 0;
  border-bottom: 2px solid var(--color-gray-200);
  text-align: center;

  ${Text} {
    position: relative;
    z-index: 10;
  }
`

export const TopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${({ color = '#fff' }) => color};
`

export const Button = styled(ButtonUI)`
  background: ${({ color = 'var(--color-primary-200)' }) => color};
`
