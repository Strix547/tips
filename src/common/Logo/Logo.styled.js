import styled from 'styled-components'

export const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'HKGrotesk-Bold';
  font-size: 24px;

  span:last-child {
    margin-left: 12px;
  }
`

export const Circle = styled.span`
  position: absolute;
  bottom: 8px;
  left: 45px;
  width: 6px;
  height: 6px;
  margin: 0 3px;
  background: var(--color-primary-200);
  border-radius: 50%;
`
