import React from 'react'

import * as S from './Section.styled'

export const Section = ({ title, children, gray }) => {
  const titleWithRows = Array.isArray(title)
    ? title.map((row) => <span key={row}>{row}</span>)
    : title

  return (
    <S.Section gray={gray}>
      <S.Wrapper>
        <S.Heading level={1}>{titleWithRows}</S.Heading>

        {children}
      </S.Wrapper>
    </S.Section>
  )
}
