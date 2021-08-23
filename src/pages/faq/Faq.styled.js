import styled, { css } from 'styled-components'

import { Accordion } from 'ui'
import { Wrapper, Heading, Text } from 'styled'

import { media } from 'styles/media'

export { Wrapper, Heading, Text }

export const Main = styled.main`
  padding: 80px 0;

  ${Heading} {
    text-align: center;
    margin-bottom: 40px;
  }

  ${media.tablet} {
    ${Heading} {
      font-size: var(--font-size-200);
      line-height: 52px;
    }
  }

  ${media.mobile} {
    padding: 40px 0;

    ${Heading} {
      font-size: var(--font-size-500);
      line-height: 32px;
      margin-bottom: 30px;
    }
  }
`

export const QaList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`

export const QaAccordion = styled(Accordion)`
  padding: 25px;
  background: #fff;
  border: 1px solid #e1e3e1;

  && {
    border-radius: 10px;

    &:first-child,
    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  .accordion-summary-root {
    min-height: auto;

    .accordion-summary-icon {
      margin-right: -2px;
      padding: 0;
      transform: rotate(45deg);
    }

    &.accordion-summary-expanded {
      min-height: auto;

      .accordion-summary-icon {
        transform: rotate(0deg);
      }
    }
  }

  ${media.mobile} {
    padding: 20px;
  }
`

export const AccordionQuestion = styled.div`
  margin-right: 20px;
  font-size: var(--font-size-md);
  font-weight: 700;
  line-height: 28px;
  color: #041c3f;
  transition: 0.3s;
  box-sizing: border-box;

  ${media.mobile} {
    font-size: var(--font-size-reg);
    line-height: 22px;
  }

  ${({ expanded }) =>
    expanded &&
    css`
      color: var(--color-primary-100);
    `}
`

export const AccordionAnswer = styled.div`
  margin-top: 15px;

  p {
    color: var(--color-black-200);
    line-height: 22px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${media.mobile} {
    margin-top: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export const DidNotFindAnswer = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  margin-top: 20px;
  padding: 25px;
  background: rgba(59, 199, 107, 0.1);
  border-radius: 15px;
  box-sizing: border-box;

  ${Text} {
    font-weight: 500;
    color: var(--color-black-200);
    line-height: 28px;
  }

  a {
    font-weight: 500;
    color: var(--color-primary-200);
    border-bottom: 1px dashed var(--color-primary-200);
  }
`
