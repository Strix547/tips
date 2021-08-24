import Image from 'next/image'

import * as S from './PageBanner.styled'

import CheckIcon from '@public/icons/checkmark.svg'

export const PageBanner = ({ title, subtitle, features = [], actions, img }) => {
  const featureList = features.map((text) => (
    <li key={text}>
      <CheckIcon />
      {text}
    </li>
  ))

  const bannerImgProps = {
    alt: 'dashboard',
    layout: 'fixed',
    priority: true,
    unoptimized: true
  }

  return (
    <S.PageBanner>
      <S.Wrapper>
        <S.Left>
          <S.Heading level={1}>{title}</S.Heading>

          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}

          {features.length ? <S.FeatureList>{featureList}</S.FeatureList> : null}

          <S.ActionRow>{actions}</S.ActionRow>
        </S.Left>

        <S.ImgContainer>
          <S.Img>
            <Image {...bannerImgProps} src={img.desktop} />
          </S.Img>

          <S.ImgMobile>
            <Image {...bannerImgProps} src={img.mobile} />
          </S.ImgMobile>
        </S.ImgContainer>
      </S.Wrapper>
    </S.PageBanner>
  )
}
