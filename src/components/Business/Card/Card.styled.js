import styled, { css } from 'styled-components'

import { WhiteBox, Text } from 'styled'

export { Text }

export const CardBusiness = styled(WhiteBox)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 5px;
`

export const TypeBadge = styled.div`
  align-self: flex-start;
  height: 26px;
  padding: 0 10px;
  border-radius: 40px;
  background: #e7e9f0;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-300);
  line-height: 26px;
  text-align: center;

  ${({ green }) =>
    green &&
    css`
      color: var(--color-primary-200);
      background: var(--color-primary-500);
    `}
`

export const Name = styled(Text)`
  margin-top: 5px;
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 28px;
`

export const Address = styled(Text).attrs({ as: 'address' })`
  margin-top: 5px;
  font-size: var(--font-size-sm);
`

export const EmployeeNumberRow = styled.div`
  display: flex;

  ${Text} {
    color: var(--color-black-200);

    &:last-child {
      margin-left: 60px;
      font-weight: 500;
    }
  }
`

export const TipsAmount = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 10px;
  justify-items: space-between;
  margin-top: 20px;
  padding: 20px;
  background: var(--color-gray-100);
  border-radius: 10px;

  ${Text} {
    font-size: var(--font-size-sm);
    line-height: 20px;

    &:nth-child(odd) {
      color: var(--color-gray-500);
    }

    &:nth-child(even) {
      font-weight: 500;
      color: var(--color-blue-100);
    }
  }
`

export const Border = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background: #e7e9f0;

  &:nth-last-child(2) {
    position: absolute;
    left: 0;
    bottom: 58px;
    margin: 0;
  }
`

export const ActionList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
`
