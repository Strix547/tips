import styled, { css } from 'styled-components'

const getVariantStyles = (varaint, color = 'var(--color-primary-200)') => {
  switch (varaint) {
    case 'bordered':
      return css`
        padding: 0 42px;
        color: ${color};
        border: 2px solid ${color};
        background: #fff;

        &:hover {
          background: ${color};
          color: #fff;
        }
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
  background: ${({ color = 'var(--color-primary-200)' }) => color};
  border-radius: 40px;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  box-sizing: border-box;

  svg:first-child {
    margin-right: 15px;
  }

  svg:last-child {
    margin-left: 15px;
  }

  &:hover {
    background: ${({ color = 'var(--color-primary-600)' }) => color};
    transition: 0.3s;
  }

  ${({ variant, color }) => getVariantStyles(variant, color)}

  ${({ size }) => getSizeStyles(size)}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-gray-500);
      background: var(--color-gray-700);
      cursor: default;

      &:hover {
        color: var(--color-gray-500);
        background: var(--color-gray-700);
        cursor: default;
      }
    `}
`
