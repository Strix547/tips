import styled from 'styled-components'

export const Content = styled.div``

export const Line = styled.div`
  .swiper-slide {
    width: 200px;
  }

  .swiper-wrapper {
    transition-timing-function: linear;
  }

  &:nth-child(2) {
    margin-top: 30px;
  }
`

export const LogoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background: transparent;
  border: 1px solid var(--color-gray-200);
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background: #fff;
    border-color: var(--color-gray-600);
    box-shadow: 0px 0px 30px rgba(15, 25, 60, 0.08);
    transition: 0.3s;
  }
`
