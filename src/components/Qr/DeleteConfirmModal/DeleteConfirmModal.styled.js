import styled from 'styled-components'

import { Modal } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import { media } from 'styles/media'

export const DeleteConfirmModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;

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
