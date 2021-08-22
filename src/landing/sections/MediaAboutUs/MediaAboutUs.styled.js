import styled, { css } from 'styled-components'

import { Heading, Text } from 'styled'

export { Text }

export const sectionStyles = css`
  padding-bottom: 60px;

  & > ${Heading}:first-of-type {
    margin-bottom: 0;
  }
`

export const Content = styled.div`
  .swiper-container {
    padding: 60px 0;
  }

  .swiper-slide {
    width: 371px;
  }

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`

export const QuoteCard = styled.div`
  position: relative;
  padding: 40px 30px;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);
  border-radius: 15px;
  box-sizing: border-box;

  ${Text} {
    margin-top: 15px;
    font-size: var(--font-size-md);
    color: var(--color-black-200);
    line-height: 28px;
  }

  & > svg {
    position: absolute;
    top: 56px;
    right: 34px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 50px;
`
