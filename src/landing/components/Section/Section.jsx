import * as S from './Section.styled'

export const Section = ({ title, children, fullWidth, gray, styles }) => {
  const titleWithRows = Array.isArray(title)
    ? title.map((row) => <span key={row}>{row} </span>)
    : title

  const heading = <S.Heading level={2}>{titleWithRows}</S.Heading>

  return (
    <S.Section gray={gray} styles={styles}>
      {!fullWidth ? (
        <S.Wrapper>
          {heading}
          {children}
        </S.Wrapper>
      ) : (
        <>
          {heading}
          {children}
        </>
      )}
    </S.Section>
  )
}
