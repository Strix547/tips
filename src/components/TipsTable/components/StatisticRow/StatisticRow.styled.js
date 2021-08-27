import styled from 'styled-components'

export const StatisticRow = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;

  li:not(:last-child) {
    margin-right: 30px;
  }
`

export const Label = styled.span`
  font-weight: 700;
`

export const Value = styled.span`
  margin-left: 10px;
  font-weight: 700;
  color: var(--color-primary-400);
`
