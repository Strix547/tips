import styled, { css } from 'styled-components'

const getVariantStyles = (varaint) => {
  switch (varaint) {
    case 'bordered':
      return css`
        padding: 0 42px;
        color: var(--color-primary-200);
        border: 2px solid var(--color-primary-200);
        background: #fff;
      `
  }
}

const getSizeStyles = (size) => {
  switch (size) {
    case 'inline':
      return css`
        min-width: auto;
      `
  }
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  height: 56px;
  padding: 0 44px;
  font-family: 'Formular';
  font-weight: 500;
  font-size: var(--font-size-reg);
  color: #fff;
  background: var(--gradient-green);
  border-radius: 40px;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  svg:first-child {
    margin-right: 15px;
  }

  svg:last-child {
    margin-left: 15px;
  }

  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}
  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-gray-500);
      background: var(--color-gray-700);
      cursor: default;
    `}
`
