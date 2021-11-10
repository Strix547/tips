import * as S from './RatingCell.styled'

import StarIcon from '@public/icons/star.svg'

export const RatingCell = ({ rating }) => {
  return (
    <S.RatingCell>
      <StarIcon /> <S.Text>{rating}/5</S.Text>
    </S.RatingCell>
  )
}
