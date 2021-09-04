import styled from 'styled-components'
import { ChromePicker } from 'react-color'

import { Label, Text } from 'styled'

export { Label, Text }

export const ColorPickerField = styled.div`
  position: relative;
  width: 100%;
`

export const ColorPicker = styled(ChromePicker)`
  position: absolute;
  top: 108px;
  z-index: 50;
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  border: 1px solid var(--color-gray-400);
  background: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
`

export const Color = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 6px;
`
