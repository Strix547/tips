import styled, { css } from 'styled-components'

const getColorStyles = (color) => {
  switch (color) {
    case 'white':
      return css`
        background: #fff;
        color: #000d26;
      `

    default:
      return null
  }
}

export const Button = styled.button`
  display: inline-block;
  padding: 17px 24px;
  border-radius: 100px;
  border: none;
  font-family: 'Formular';
  font-size: var(--font-size-sm);
  font-weight: 700;
  line-height: 14px;
  background: #000d26;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;

  ${({ color }) => color && getColorStyles(color)}
`
