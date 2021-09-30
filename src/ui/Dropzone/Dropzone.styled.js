import styled, { css } from 'styled-components'

import { Text } from 'styled'

export const Dropzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  padding: 10px 0;
  border: 1px dashed var(--color-gray-400);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;

  ${({ isDragAccept }) =>
    isDragAccept &&
    css`
      border-color: var(--color-primary-200);
    `}

  ${({ isDragReject }) =>
    isDragReject &&
    css`
      border-color: var(--color-red-100);
    `}

  ${Text} {
    margin-left: 15px;
    font-weight: 500;
    color: var(--color-black-200);
  }

  ${Text} {
    display: flex;
    flex-direction: column;

    span:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`
