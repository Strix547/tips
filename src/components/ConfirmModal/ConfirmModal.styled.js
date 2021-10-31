import styled from 'styled-components'

import { Heading, WhiteBox } from 'styled'
import { media } from 'styles/media'

import { Modal } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'

export { Heading }

export const ConfirmModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background: #fff;

  ${Heading} {
    text-align: center;
  }
`

export const Actions = styled.div`
  display: flex;
  margin-top: 50px;

  ${Button}:last-child {
    margin-left: 20px;
  }

  ${media.createMedia(620)} {
    flex-direction: column;

    ${Button}:last-child {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`
