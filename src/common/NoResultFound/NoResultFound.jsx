import React from 'react'

import * as S from './NoResultFound.styled'

export const NoResultFound = ({ children }) => {
  return (
    <S.NoResultFound>
      <S.Text>{children}</S.Text>
    </S.NoResultFound>
  )
}
