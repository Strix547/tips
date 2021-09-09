import styled from 'styled-components'

import { Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'

const RecipientCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 2px solid var(--color-gray-200);
  border-radius: 10px;
  box-sizing: border-box;
`

const RecipientCardTop = styled.div`
  padding: 30px;
  border-bottom: 1px solid var(--color-gray-200);
`

const RecipientCardMain = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 290px;
  margin: 0 auto;
  padding: 30px;

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

export { RecipientCard, RecipientCardTop, RecipientCardMain }
