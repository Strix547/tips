import styled from 'styled-components'

import { Text } from 'styled'

import { Wrapper } from 'landing/new/styled'
import { Accordion, AccordionSummary, AccordionDetails } from 'ui/Accordion'

export { Text, Wrapper }

export const QaBlock = styled.div`
  margin-top: 120px;

  h5 {
    font-size: var(--font-size-500);
    font-weight: 500;
    color: #000d26;
    line-height: 32px;
    margin-bottom: 24px;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`

export const QA = styled.div``

export const QaList = styled.div`
  ${Accordion} {
    padding: 20px;
    border: 1px solid rgba(0, 13, 38, 0.15);
    border-radius: 12px;
    box-sizing: border-box;

    &:first-child,
    &:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${AccordionSummary} {
    min-height: 22px;
    height: 22px;

    &.Mui-expanded {
      min-height: 22px;
    }

    .accordion-summary-icon {
      &.Mui-expanded {
        transform: rotate(45deg);
      }
    }
  }

  ${AccordionDetails} {
    margin-top: 24px;
    color: #000d26;
    opacity: 0.6;
    line-height: 20px;
  }
`

export const CashlessPayments = styled.div`
  p {
    line-height: 24px;
    color: #000d26;
    opacity: 0.75px;

    &:not(:last-of-type) {
      margin-bottom: 32px;
    }
  }
`

export const Technologies = styled.ul`
  display: flex;
  margin-top: 24px;
`

export const Technology = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`

export const AccordionQuestion = styled.div``

export const AccordionAnswer = styled.div``
