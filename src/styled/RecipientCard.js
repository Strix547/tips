import styled from 'styled-components'

import { media } from 'styles/media'

import { Text } from './Text'
import { Button } from 'ui/Button/Button.styled'

export const RecipientCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 2px solid var(--color-gray-200);
  border-radius: 10px;
  box-sizing: border-box;
`

export const RecipientCardTop = styled.div`
  padding: 30px;
  border-bottom: 1px solid var(--color-gray-200);

  ${media.createMedia(350)} {
    padding: 15px 0;
  }
`

export const RecipientCardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin: 0 auto;
  padding: 30px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  ${Button} {
    margin-top: 10px;
    width: 100%;
  }

  & > ${Text}:last-child {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-gray-300);
    line-height: 20px;
    text-align: center;
  }

  ${media.createMedia(350)} {
    width: auto;
    padding: 15px;
    box-sizing: border-box;
  }
`
