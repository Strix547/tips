import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const FeedbackTextarea = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Text} {
    &:first-child {
      font-weight: 500;
      color: var(--color-black-200);
    }

    &:last-child {
      font-size: var(--font-size-sm);
      color: var(--color-gray-500);
    }
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-top: 10px;
  padding: 15px 20px;
  font-family: 'Formular';
  font-size: var(--font-size-reg);
  color: var(--color-black-100);
  background: #fff;
  border: 1px solid var(--color-gray-400);
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.05);
  border-radius: 6px;
  resize: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 1;
    color: var(--color-gray-300);
  }
`
