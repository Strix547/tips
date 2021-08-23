import React from 'react'
import styled from 'styled-components'
import { RadioGroup as MuiRadioGroup } from '@material-ui/core'

export const RadioGroup = styled(({ ...props }) => (
  <MuiRadioGroup {...props} classes={{ root: 'radio-group-root' }} />
))``
