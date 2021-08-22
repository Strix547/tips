import styled from 'styled-components'

import { Wrapper, Heading } from 'styled'

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

  ${({ styles }) => styles}
`
