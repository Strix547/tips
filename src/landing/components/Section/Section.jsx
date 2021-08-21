import React from 'react'

import * as S from './Section.styled'

export const Section = ({ id, title, children, gray }) => {
  const titleWithRows = Array.isArray(title)
    ? title.map((row) => <span key={row}>{row}</span>)
    : title

  return (
    <S.Section id={id} gray={gray}>
      <S.Wrapper>
        <S.Heading level={1}>{titleWithRows}</S.Heading>

        {children}
      </S.Wrapper>
    </S.Section>
  )
}
