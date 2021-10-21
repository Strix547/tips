import { Rating } from 'ui'

import * as S from './RatingRow.styled'

export const RatingRow = () => {
  return (
    <S.RatingRow>
      <S.Text>Рейтинг</S.Text>

      <S.RatingContainer>
        <Rating name="rating" />
      </S.RatingContainer>
    </S.RatingRow>
  )
}
