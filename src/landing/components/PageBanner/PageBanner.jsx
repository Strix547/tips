import { useMediaQuery } from 'react-responsive'
import Img from 'next/image'

import * as S from './PageBanner.styled'

export const PageBanner = ({ title, subtitle, features, actions, img }) => {
  const widthMore630 = useMediaQuery({ minWidth: 630 })

  const featureList = features

  return (
    <S.PageBanner>
      <S.Wrapper>
        <S.Left>
          <S.Heading level={1}>{title}</S.Heading>

          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}

          {features && <S.FeautureList>{featureList}</S.FeautureList>}

          <S.ActionRow>{actions}</S.ActionRow>
        </S.Left>

        <S.ImgContainer>
          <S.Img>
            {widthMore630 ? (
              <Img src={img.desktop} alt="dashboard" layout="fixed" />
            ) : (
              <Img src={img.mobile} alt="dashboard" layout="fixed" />
            )}
          </S.Img>
        </S.ImgContainer>
      </S.Wrapper>
    </S.PageBanner>
  )
}
