import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const ServiceWorkSteps = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 226px);
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Text} {
      margin-top: -20px;
      font-weight: 700;
      line-height: 22px;
      text-align: center;
    }

    &:nth-child(1) ${Text}, &:nth-child(2) ${Text} {
      width: 190px;
    }

    &:nth-child(3) ${Text} {
      width: 170px;
    }
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-top: 20px;
  font-weight: 500;
  color: var(--color-primary-300);
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.2);
`

export const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 0;
  transform: translateY(calc(-50% - 22px)) scale(2);
  border: none;
  box-shadow: none;
  background: transparent;
  cursor: pointer;
  z-index: 50;
`

export const Slider = styled.div`
  position: relative;
  width: 100%;

  .swiper-container {
    padding-bottom: 22px;

    ${NavArrow} {
      &:first-of-type {
        left: 12px;
        transform: translateY(calc(-50% - 22px)) rotateY(180deg) scale(2);
      }

      &:last-of-type {
        right: 12px;
      }
    }
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
