import { useFormContext } from 'react-hook-form'
import { Radio } from '@material-ui/core'
import Image from 'next/image'

import { FormControlLabel, RadioGroup } from 'ui'

import * as S from './ImpressionRow.styled'

import slightlyFrowningImg from '@public/img/emodji/slightly-frowning.png'
import slightlySmilingImg from '@public/img/emodji/slightly-smiling.png'
import smilingSmilingEyesImg from '@public/img/emodji/smiling-smiling-eyes.png'
import smilingHeartEyesImg from '@public/img/emodji/smiling-heart-eyes.png'
import smilingSunglassesImg from '@public/img/emodji/smiling-sunglasses.png'

export const ImpressionRow = () => {
  const useFormProps = useFormContext()
  const { watch } = useFormProps

  const emodjies = [
    { value: '🙁', img: slightlyFrowningImg },
    { value: '🙂', img: slightlySmilingImg },
    { value: '😊', img: smilingSmilingEyesImg },
    { value: '😍', img: smilingHeartEyesImg },
    { value: '😎', img: smilingSunglassesImg }
  ]

  const emodjiRadios = emodjies.map(({ value, img }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.EmodjiRadio active={watch('impression') === value}>
            <Image src={img} alt={value} />
          </S.EmodjiRadio>
        }
        control={<Radio />}
      />
    )
  })

  return (
    <S.ImpressionRow>
      <S.Text>Ваши впечатления</S.Text>

      <RadioGroup name="impression">{emodjiRadios}</RadioGroup>
    </S.ImpressionRow>
  )
}
