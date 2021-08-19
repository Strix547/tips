import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const ServiceWorkSteps = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 226px);
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Text} {
      margin-top: -20px;
      font-weight: 700;
      line-height: 22px;
      text-align: center;
    }

    &:nth-child(1) ${Text}, &:nth-child(2) ${Text} {
      width: 190px;
    }

    &:nth-child(3) ${Text} {
      width: 170px;
    }
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-top: 20px;
  font-weight: 500;
  color: var(--color-primary-300);
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.2);
`
