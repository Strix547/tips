import styled from 'styled-components'

import { Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'

export { Text }

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 570px;
  padding: 50px;
  background: #fff;
  box-shadow: 0px 10px 40px rgba(20, 32, 60, 0.05);
  border-radius: 20px;
  box-sizing: border-box;
`

export const CardLeft = styled.div`
  ${Text} {
    &:nth-child(1) {
      font-size: var(--font-size-500);
      font-weight: 500;
      line-height: 32px;
    }

    &:nth-child(2) {
      margin-top: 20px;
      font-size: var(--font-size-md);
      line-height: 28px;
    }
  }

  ${Button} {
    margin-top: 36px;
  }
`

export const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  margin-left: 30px;
  font-size: 50px;
  font-weight: 700;
  color: var(--color-blue-100);
  border: 1px dashed var(--color-blue-100);
  border-radius: 50%;
  box-sizing: border-box;
`

export const Img = styled.div``
