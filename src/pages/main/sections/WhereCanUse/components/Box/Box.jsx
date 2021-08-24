import Image from 'next/image'

import * as S from './Box.styled'

import CheckIcon from '@public/icons/checkmark.svg'

export const Box = ({ title, subtitle, points = [], preview }) => {
  const pointList = points.map((point) => (
    <li key={point}>
      <CheckIcon />
      {point}
    </li>
  ))

  return (
    <S.Box>
      <S.Top>
        {Array.isArray(preview) ? (
          preview.map(({ label, img }) => (
            <S.ImgContainer key={label}>
              <Image src={img} alt={label} />
            </S.ImgContainer>
          ))
        ) : (
          <S.TopBox>
            <Image src={preview} alt={title} />
          </S.TopBox>
        )}
      </S.Top>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        {points.length ? <S.PointList>{pointList}</S.PointList> : null}
      </S.Content>
    </S.Box>
  )
}
