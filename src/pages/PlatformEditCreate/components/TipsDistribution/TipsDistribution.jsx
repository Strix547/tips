import { useState } from 'react'

import { Slider } from 'ui'

import * as S from './TipsDistribution.styled'

export const TipsDistribution = () => {
  const [sliderValue, setSliderValue] = useState(50)

  const marks = [
    { value: 0 },
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
    { value: 60 },
    { value: 70 },
    { value: 80 },
    { value: 90 },
    { value: 100 }
  ]

  return (
    <S.TipsDistribution>
      <S.Content>
        <S.Label>Выберите количество чаевых сотрудникам</S.Label>

        <Slider
          name="distribution"
          value={sliderValue}
          onChange={(_, value) => setSliderValue(value)}
          marks={marks}
          min={0}
          max={100}
          step={1}
        />

        <S.MarksRow>
          <S.MarksLeft>
            <S.Text>{sliderValue}%</S.Text>
            <S.Text>Себе</S.Text>
          </S.MarksLeft>

          <S.MarksRight>
            <S.Text>{100 - sliderValue}%</S.Text>
            <S.Text>Сотрудникам</S.Text>
          </S.MarksRight>
        </S.MarksRow>
      </S.Content>
    </S.TipsDistribution>
  )
}
