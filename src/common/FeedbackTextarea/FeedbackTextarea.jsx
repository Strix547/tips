import { useState } from 'react'

import * as S from './FeedbackTextarea.styled'

export const FeedbackTextarea = () => {
  const [comment, setComment] = useState(null)
  const [commentLength, setCommentLength] = useState(null)

  const lengthAvailable = 1000

  const onCommentChange = ({ target }) => {
    const commentLength = parseInt(target.value.length, 10)

    if (commentLength > lengthAvailable) {
      return
    }

    setComment(target.value)
    setCommentLength(commentLength)
  }

  return (
    <S.FeedbackTextarea>
      <S.Top>
        <S.Text>Оставить отзыв</S.Text>
        <S.Text>
          {commentLength
            ? `Осталось ${lengthAvailable - commentLength} знаков`
            : `До ${lengthAvailable} знаков`}
        </S.Text>
      </S.Top>

      <S.Textarea
        name="comment"
        placeholder="Ваш комментарий"
        value={comment}
        onChange={onCommentChange}
      />
    </S.FeedbackTextarea>
  )
}
