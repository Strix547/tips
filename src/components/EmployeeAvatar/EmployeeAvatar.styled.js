import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const EmployeeAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmployeeRow = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Avatar = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

export const Right = styled.div`
  width: 150px;
  margin-left: 20px;

  ${Text} {
    /* fullName */
    &:first-child {
      font-weight: bold;
      line-height: 22px;
    }

    /* company */
    &:last-child {
      margin-top: 5px;
      font-size: var(--font-size-sm);
      font-weight: 500;
      line-height: 20px;
      color: var(--color-gray-300);
    }
  }
`
