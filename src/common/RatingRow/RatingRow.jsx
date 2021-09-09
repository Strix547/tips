import { Rating } from 'ui'

import * as S from './RatingRow.styled'

export const RatingRow = () => {
  return (
    <S.RatingRow>
      <S.Text>Рейтинг</S.Text>

      <S.RatingContainer>
        <Rating />
      </S.RatingContainer>
    </S.RatingRow>
  )
}
