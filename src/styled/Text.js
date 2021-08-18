import styled from 'styled-components'

export const Text = styled.p.attrs(({ tag = 'p' }) => ({
  as: tag
}))`
  font-family: 'Formular';
  font-weight: ${({ weight = 400 }) => weight};
`
