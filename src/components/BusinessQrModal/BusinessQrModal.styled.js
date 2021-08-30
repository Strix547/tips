import styled from 'styled-components'

import { Text } from 'styled'
import { QrImage } from 'components/QrImage/QrImage.styled'
import { Modal } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'

export { Text }

export const BusinessQrModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 590px;
  background: #fff;
  border-radius: 10px;
`

export const Top = styled.div`
  position: relative;
  padding: 20px 40px;
  border-bottom: 1px solid var(--color-gray-700);

  & > svg {
    position: absolute;
    top: 12px;
    right: 5px;
    padding: 10px;
    cursor: pointer;
  }
`

export const Main = styled.div`
  padding: 20px 40px 30px;

  ${QrImage} {
    width: 290px;
    margin: 30px auto 0;
  }

  & > ${Button} {
    width: 100%;
    margin-top: 30px;
  }
`

export const LinkRow = styled.div`
  & > ${Text} {
    font-weight: 500;
    line-height: 22px;
  }
`

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 5px 5px 5px 20px;
  font-size: var(--font-size-md);
  border: 1px solid var(--color-gray-400);
  border-radius: 46px;
  box-sizing: border-box;

  ${Button} {
    min-width: auto;
    height: 46px;
    padding: 0 20px;
    color: var(--color-gray-500);
    background: var(--color-gray-700);
    border-radius: 46px;
  }
`

export const Label = styled.p`
  font-size: var(--font-size-600);
  font-weight: 700;
  line-height: 28px;
`

export const Share = styled.div`
  margin-top: 30px;
  text-align: center;

  & > ${Text} {
    font-weight: 500;
  }
`

export const Networks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  button {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 10px;
    font-family: 'Formular';
    font-size: var(--font-size-reg);
    font-weight: 500;
    background: var(--color-gray-100);
    border-radius: 30px;
    border: none;
    cursor: pointer;

    svg {
      margin-right: 15px;
    }
  }
`
