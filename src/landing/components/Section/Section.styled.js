import styled from 'styled-components'

import { Wrapper, Heading } from 'styled'
import { media } from 'styles/media'

export { Wrapper, Heading }

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  background: ${({ gray }) => (gray ? '#F8F9FB' : '#fff')};

  ${Wrapper} > ${Heading}, & > ${Heading}:first-of-type {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 60px;
  }

  ${media.tablet} {
    padding: 80px 0;

    ${Wrapper} > ${Heading}, & > ${Heading}:first-of-type {
      display: block;
      margin-bottom: 40px;
    }
  }

  ${media.createMedia(560)} {
    padding: 60px 0;

    ${Wrapper} > ${Heading}, & > ${Heading}:first-of-type {
      font-size: var(--font-size-400);
      line-height: 42px;
    }
  }

  ${({ styles }) => styles}
`
