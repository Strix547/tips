import { css } from 'styled-components'

export const variables = css`
  :root {
    --color-primary-100: #54a75c;
    --color-primary-200: #3bc76b;

    --gradient-green: linear-gradient(0deg, var(--color-primary-200), var(--color-primary-200)),
      linear-gradient(0deg, #479b4e, #479b4e), linear-gradient(0deg, #3fa949, #3fa949),
      var(--color-primary-100);

    --font-size-100: 48px;
    --font-size-200: 42px;
    --font-size-300: 36px;
    --font-size-400: 32px;
    --font-size-500: 24px;
    --font-size-600: 20px;
    --font-size-md: 18px;
    --font-size-reg: 16px;
    --font-size-sm: 14px;
    --font-size-xs: 12px;
  }
`
