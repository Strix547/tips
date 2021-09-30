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

  const previewImages = preview.map(({ label, desktop, mobile }) => (
    <S.ImgContainer key={label}>
      <S.Img>
        <Image src={desktop} alt={label} quality={100} />
      </S.Img>

      {mobile !== null && (
        <S.ImgMobile>
          <Image src={mobile || desktop} alt={label} quality={100} />
        </S.ImgMobile>
      )}
    </S.ImgContainer>
  ))

  return (
    <S.Box>
      <S.Top>{previewImages}</S.Top>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        {points.length ? <S.PointList>{pointList}</S.PointList> : null}
      </S.Content>
    </S.Box>
  )
}
