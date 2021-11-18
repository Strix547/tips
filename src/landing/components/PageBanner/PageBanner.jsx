import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

import * as S from './PageBanner.styled'
import { MEDIA_TABLET } from 'styles/media'

import CheckIcon from '@public/icons/checkmark.svg'

export const PageBanner = ({ title, subtitle, features = [], actions, img }) => {
  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

  const featureList = features.map((text) => (
    <li key={text}>
      <CheckIcon />
      {text}
    </li>
  ))

  const bannerImgProps = {
    alt: 'dashboard',
    quality: 100
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
          {!isTablet ? (
            <S.Img>
              <Image {...bannerImgProps} priority src={img.desktop} layout="responsive" />
            </S.Img>
          ) : (
            <S.ImgMobile>
              <Image {...bannerImgProps} src={img.mobile} layout="intrinsic" />
            </S.ImgMobile>
          )}
        </S.ImgContainer>
      </S.Wrapper>
    </S.PageBanner>
  )
}
