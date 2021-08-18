import styled, { css } from 'styled-components'

const getLevelStyles = (level) => {
  switch (level) {
    case 1:
    case 2:
      return css`
        font-size: var(--font-size-100);
        line-height: 56px;
      `
    case 3:
      return css`
        font-size: var(--font-size-300);
        line-height: 42px;
      `
    case 4:
      return css`
        font-size: var(--font-size-400);
        line-height: 42px;
      `
    case 5:
      return css`
        font-size: var(--font-size-500);
      `
    case 6:
      return css`
        font-size: var(--font-size-600);
      `
  }
}

export const Heading = styled.h1.attrs(({ level }) => ({
  as: `h${level}`
}))`
  font-family: 'Formular';
  font-weight: 700;
  color: #101112;

  ${({ level }) => getLevelStyles(level)}
`
