import styled from 'styled-components'

import { Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'

export { Text }

export const IndividualTipsPayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  background: #fff;
  border: 2px solid var(--color-gray-200);
  border-radius: 10px;
  box-sizing: border-box;
`

export const Top = styled.div`
  padding-top: 40px;
  padding-bottom: 25px;
  border-bottom: 2px solid var(--color-gray-200);
`

export const Main = styled.div`
  width: 290px;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 40px;

  ${Button} {
    width: 100%;
    margin-top: 30px;
  }

  & > ${Text} {
    margin-top: 20px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-gray-300);
    line-height: 20px;
    text-align: center;
  }
`
