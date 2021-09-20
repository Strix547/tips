import styled from 'styled-components'

export const QrGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px 25px;

  /* skeleton */
  & > span {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 20px 25px;
  }
`
