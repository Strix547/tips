import styled from 'styled-components'

import { Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

const media700 = media.createMedia(700)

export { Text }

export const IndividualTipsPayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  background: #fff;
  border: 2px solid var(--color-gray-200);
  border-radius: 10px;
  box-sizing: border-box;

  ${media700} {
    width: 100%;
    padding: 0 15px;
    border: none;
  }
`

export const Top = styled.div`
  padding-top: 40px;
  padding-bottom: 25px;
  border-bottom: 2px solid var(--color-gray-200);

  ${media700} {
    padding-top: 0;
  }
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

  ${media700} {
    padding-bottom: 0;
  }
`
