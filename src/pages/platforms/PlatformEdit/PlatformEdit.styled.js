import styled from 'styled-components'

import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

export const Form = styled.form``

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px 0;

  ${media.createMedia(650)} {
    flex-direction: column;

    ${Button}:last-child {
      margin-top: 15px;
    }
  }

  ${media.createMedia(570)} {
    margin: 20px 20px 0;
  }
`
