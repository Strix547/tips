import styled, { css } from 'styled-components'

import { WhiteBox, Heading, Label, gapPolyfill } from 'styled'
import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'

import { media } from 'styles/media'

export { Heading, Label }

export const MainInfo = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  ${gapPolyfill(20)}
  padding: calc(30px - 10px) calc(40px - 10px);

  ${media.createMedia(570)} {
    padding: calc(20px - 10px);
  }
`

export const PlatformTypeRow = styled.div``

export const PlatformTypeRadioGroup = styled(RadioGroup)`
  ${gapPolyfill(10)}
`

export const PlatformTypeRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  padding: 0 38px;
  background: #ffffff;
  border: 1px solid var(--color-gray-400);
  border-radius: 50px;
  font-family: 'Formular';
  font-size: var(--font-size-reg);
  font-weight: 500;
  color: var(--color-black-200);
  transition: 0.1s;

  ${media.createMedia(570)} {
    height: 44px;
    padding: 0 20px;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: var(--color-primary-200);
      background: var(--color-primary-200);
      color: #fff;
    `}
`
