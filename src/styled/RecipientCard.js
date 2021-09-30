import styled from 'styled-components'

import { Text } from './Text'
import { gapPolyfill } from './gapPolyfill'
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
`

export const RecipientCardMain = styled.div`
  display: flex;
  flex-direction: column;
  ${gapPolyfill(20)}
  width: 290px;
  margin: 0 auto;
  padding: calc(30px - 10px);

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
`
