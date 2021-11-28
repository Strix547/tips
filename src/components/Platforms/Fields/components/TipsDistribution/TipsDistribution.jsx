import { useTranslation } from 'next-i18next'

import { Slider } from 'ui'

import * as S from './TipsDistribution.styled'

export const TipsDistribution = ({ incomePercentage, onIncomePercentageChange }) => {
  const { t } = useTranslation('common')

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
        <S.Label>{t('select-number-tips-for-employees')}</S.Label>

        <Slider
          name="incomePercentage"
          value={incomePercentage}
          marks={marks}
          min={0}
          max={100}
          step={1}
          onChange={(_, value) => onIncomePercentageChange(value)}
        />

        <S.MarksRow>
          <S.MarksLeft>
            <S.Text>{incomePercentage}%</S.Text>
            <S.Text>{t('myself')}</S.Text>
          </S.MarksLeft>

          <S.MarksRight>
            <S.Text>{100 - incomePercentage}%</S.Text>
            <S.Text>{t('for-employees')}</S.Text>
          </S.MarksRight>
        </S.MarksRow>
      </S.Content>
    </S.TipsDistribution>
  )
}
