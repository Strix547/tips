import styled, { css } from 'styled-components'

import { media } from 'styles/media'

export const sectionStyles = css`
  margin: 120px 0;
  padding: 0;

  ${media.tablet} {
    margin: 80px 0;
    padding: 0;
  }

  ${media.createMedia(560)} {
    margin: 60px 0;
    padding: 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  ${media.createMedia(980)} {
    grid-template-columns: 370px;
    justify-content: center;
  }

  ${media.createMedia(400)} {
    grid-template-columns: 1fr;
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #f4f5f7;
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.2);
  border-radius: 30px;
`

export const Label = styled.p`
  margin-top: 30px;
  font-size: var(--font-size-600);
  font-weight: 500;
  line-height: 28px;

  ${({ small }) =>
    small &&
    css`
      font-size: var(--font-size-md);
    `}
`

export const Desc = styled.p`
  margin-top: 15px;
  line-height: 22px;
`
