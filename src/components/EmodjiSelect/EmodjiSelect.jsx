import { useState } from 'react'
import { Radio } from '@material-ui/core'
import Image from 'next/image'

import { FormControlLabel } from 'ui'

import * as S from './EmodjiSelect.styled'

import slightlyFrowningImg from '@public/img/emodji/slightly-frowning.png'
import slightlySmilingImg from '@public/img/emodji/slightly-smiling.png'
import smilingSmilingEyesImg from '@public/img/emodji/smiling-smiling-eyes.png'
import smilingHeartEyesImg from '@public/img/emodji/smiling-heart-eyes.png'
import smilingSunglassesImg from '@public/img/emodji/smiling-sunglasses.png'

export const EmodjiSelect = ({ title, onChange }) => {
  const [emodji, setEmodji] = useState(null)

  const emodjies = [
    { value: 'slightly frowing', img: slightlyFrowningImg },
    { value: 'slightly smiling', img: slightlySmilingImg },
    { value: 'smiling with smiling eyes', img: smilingSmilingEyesImg },
    { value: 'smiling with heart eyes', img: smilingHeartEyesImg },
    { value: 'smiling with sunglasses', img: smilingSunglassesImg }
  ]

  const onEmodjiChange = (value) => {
    setEmodji(value)
    // onChange(value)
  }

  const emodjiRadios = emodjies.map(({ value, img }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.EmodjiRadio active={emodji === value}>
            <Image src={img} alt={value} />
          </S.EmodjiRadio>
        }
        control={<Radio />}
      />
    )
  })

  return (
    <S.EmodjiSelect>
      <S.Text>{title}</S.Text>

      <S.EmodjiRadioGroup
        name="emodji"
        value={emodji}
        onChange={(_, value) => onEmodjiChange(value)}
      >
        {emodjiRadios}
      </S.EmodjiRadioGroup>
    </S.EmodjiSelect>
  )
}
