import styled from 'styled-components'

import { WhiteBox, Label } from 'styled'
import { Button } from 'ui/Button/Button.styled'

export { Label }

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: calc(40px - 10px);

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  /* skeleton */
  & > span {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export const AvatarField = styled.div``

export const AvatarRow = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 10px;
    overflow: hidden;
  }
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: var(--color-gray-600);
  border: 1px solid var(--color-gray-200);
  border-radius: 50%;
  box-sizing: border-box;
`

export const AvatarUploadLabel = styled.label`
  margin-left: 10px;
  cursor: pointer;

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`
