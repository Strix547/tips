import React from 'react'
import styled from 'styled-components'
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails
} from '@material-ui/core'

export const Accordion = styled((props) => (
  <MuiAccordion {...props} square={false} classes={{ root: 'accordion-root' }} />
))`
  && {
    box-shadow: none;

    &::before {
      display: none;
    }

    &:first-child,
    &:last-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    classes={{
      root: 'accordion-summary-root',
      content: 'accordion-summary-content',
      focused: 'accordion-summary-focused',
      expanded: 'accordion-summary-expanded',
      expandIcon: 'accordion-summary-icon'
    }}
  />
))`
  && {
    padding: 0;
    user-select: auto;

    &.accordion-summary-focused {
      background: #fff;
    }

    .accordion-summary-content {
      display: block;
      margin: 0;
    }
  }
`

export const AccordionDetails = styled((props) => (
  <MuiAccordionDetails {...props} classes={{ root: 'accordion-details-root' }} />
))`
  && {
    display: block;
    padding: 0;
  }
`
