import { css } from 'styled-components'

export const variables = css`
  :root {
    --color-primary-100: #54a75c;
    --color-primary-200: #3bc76b;
    --color-primary-300: #479b4e;

    --color-black-100: #101011;
    --color-black-200: #313436;

    --color-gray-100: #f3f5f7;
    --color-gray-200: #e1e3e1;
    --color-gray-300: #777d82;
    --color-gray-400: #c8c9cf;
    --color-gray-500: #55595b;
    --color-gray-600: #f7f9fb;

    --color-blue-100: #156bed;
    --color-red-100: #f83939;

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
