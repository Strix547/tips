import styled, { css } from 'styled-components'

import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

export const HowServiceWork = styled.div``

export const sectionStyles = css`
  margin: 120px 0;
  padding: 0;

  ${Button} {
    width: 260px;
    margin: 40px auto 0;
  }

  a {
    min-width: 280px;
  }

  ${media.tablet} {
    margin: 80px 0;
    padding: 0;
  }

  ${media.createMedia(560)} {
    margin: 60px 0;
    padding: 0;
  }
`
