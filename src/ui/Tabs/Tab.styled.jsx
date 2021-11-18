import styled from 'styled-components'
import MuiTab from '@material-ui/core/Tab'

export const Tab = styled(({ active, ...props }) => (
  <MuiTab {...props} classes={{ selected: 'selected' }} />
))`
  && {
    max-width: 100%;
    min-width: auto;
    height: 100%;
    padding: 0;
    font-family: 'Formular';
    font-size: var(--font-size-reg);
    font-weight: 500;
    text-transform: initial;
    letter-spacing: 0;
    line-height: normal;
    opacity: 1;
    border-bottom: 3px solid #fff;
    transition: 0.3s;
  }

  &:not(:last-child) {
    margin-right: 25px;
  }

  &.selected {
    color: var(--color-primary-200);
    border-color: var(--color-primary-200);
  }
`
