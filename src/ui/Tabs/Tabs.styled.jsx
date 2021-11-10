import styled from 'styled-components'
import MuiTabs from '@material-ui/core/Tabs'

export const Tabs = styled((props) => (
  <MuiTabs classes={{ scroller: 'scroller', flexContainer: 'container' }} {...props} />
))`
  height: 100%;

  .container {
    height: 100%;
  }

  .scroller {
    display: flex;
    align-items: center;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--color-gray-200);
    }

    & > span:last-child {
      display: none;
    }
  }
`
