import { useTranslation } from 'next-i18next'

import { Rating } from 'ui'

import * as S from './RatingRow.styled'

export const RatingRow = () => {
  const { t } = useTranslation('common')

  return (
    <S.RatingRow>
      <S.Text>{t('rating')}</S.Text>

      <S.RatingContainer>
        <Rating name="rating" />
      </S.RatingContainer>
    </S.RatingRow>
  )
}
