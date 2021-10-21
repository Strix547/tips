import styled from 'styled-components'

import { WhiteBox, Label, ErrorText } from 'styled'
import { media } from 'styles/media'

export { Label, ErrorText }

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 40px;

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

  ${media.createMedia(500)} {
    padding: 20px;
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
