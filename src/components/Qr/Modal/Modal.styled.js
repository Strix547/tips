import styled from 'styled-components'

import { Text } from 'styled'
import { QrImage } from 'components/Qr/Image/Image.styled'
import { Modal } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

const media620 = media.createMedia(620)

export { Text }

export const QrModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media620} {
    align-items: flex-end;
  }
`

export const Wrapper = styled.div`
  width: 590px;
  background: #fff;
  border-radius: 10px;

  ${media620} {
    width: 100vw;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
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

  ${media620} {
    padding: 20px 30px;
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

    svg {
      transition: 0.3s;
    }

    &:hover {
      svg {
        fill: #fff;
        transition: 0.3s;
      }
    }
  }

  ${media620} {
    padding: 20px 30px 30px;

    ${QrImage} {
      width: 100%;
    }
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
  border: 1px solid var(--color-gray-400);
  border-radius: 46px;
  box-sizing: border-box;

  & > span {
    font-size: var(--font-size-md);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 5px;
  }

  ${Button} {
    min-width: auto;
    height: 46px;
    padding: 0 20px;
    color: var(--color-gray-500);
    background: var(--color-gray-700);
    border-radius: 46px;
  }

  ${media620} {
    & > span {
      font-size: var(--font-size-reg);
    }

    ${Button} {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      padding: 0;

      svg {
        margin-right: 0;
      }

      span {
        display: none;
      }
    }
  }
`

export const Label = styled.p`
  font-size: var(--font-size-600);
  font-weight: 700;
  line-height: 28px;

  ${media620} {
    font-size: var(--font-size-md);
  }
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
    height: 40px;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  ${media620} {
    margin-top: 20px;
  }
`
