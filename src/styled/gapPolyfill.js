import { css } from 'styled-components'

export const gapPolyfill = (gapCol, gapRow) => {
  return css`
    --column-gap: ${gapCol}px;
    --row-gap: ${gapRow || gapCol}px;
    margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);

    & > * {
      margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2) !important;
    }
  `
}
