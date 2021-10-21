import styled from 'styled-components'
import MuiSelect from '@material-ui/core/Select'

import ArrowGrayIcon from '@public/icons/arrows/gray-solid-down.svg'

export const Select = styled((props) => (
  <MuiSelect
    {...props}
    classes={{ root: 'select-root', icon: 'icon', iconOpen: 'is-open' }}
    IconComponent={ArrowGrayIcon}
    MenuProps={{
      classes: { paper: 'menu-paper', list: 'menu-list' },
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      getContentAnchorEl: null,
      disablePortal: true,
      disableRipple: true
    }}
  />
))`
  & {
    width: 100%;

    &::before,
    &::after {
      display: none;
    }

    .icon {
      right: 15px;
      transition: 0.3s;

      &.is-open {
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }

  .select-root {
    display: flex;
    align-items: center;
    height: 56px;
    padding-left: 20px;
    font-family: Formular;
    font-size: var(--font-size-reg);
    color: var(--color-black-100);
    border: 1px solid var(--color-gray-400);
    border-radius: 8px;
    box-sizing: border-box;
    transition: 0.3s;

    &:focus {
      border-radius: 8px;
      background: #fff;
    }

    &[aria-expanded='true'] {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      transition: 0.3s;
    }
  }

  .menu-paper {
    padding: 0;
    border: 1px solid var(--color-gray-400);
    border-top: none;
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);

    .menu-list {
      padding: 0;

      li {
        display: flex;
        align-items: center;
        padding: 8px 20px;
        min-height: 22px;
        font-family: Formular;
        font-size: var(--font-size-reg);
        color: var(--color-black-100);
        background: #fff;
        box-sizing: border-box;

        /* couldn't find object for change classname */
        &.Mui-selected {
          font-weight: var(--font-weight-md);

          &::before {
            content: '';
            position: absolute;
            right: 0;
            width: 12px;
            height: 10px;
          }
        }

        &:hover {
          background: #fff;
        }
      }
    }
  }
`
