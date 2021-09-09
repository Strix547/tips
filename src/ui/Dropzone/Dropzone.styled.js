import styled, { css } from 'styled-components'

import { Text } from 'styled'

export const Dropzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  border: 1px dashed var(--color-gray-400);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;

  ${({ borderGreen }) =>
    borderGreen &&
    css`
      border-color: var(--color-primary-200);
    `}

  ${Text} {
    margin-left: 15px;
    font-weight: 500;
    color: var(--color-black-200);
  }
`
