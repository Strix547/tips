import styled from 'styled-components'

import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

export const Form = styled.form`
  ${Button} {
    margin-top: 30px;
    margin-left: 40px;
  }

  ${media.createMedia(570)} {
    ${Button} {
      margin-top: 20px;
      margin-left: 20px;
    }
  }
`
