import { useMediaQuery } from 'react-responsive'
import Img from 'next/image'

import * as S from './PageBanner.styled'

import CheckIcon from '@public/icons/checkmark.svg'

export const PageBanner = ({ title, subtitle, features = [], actions, img }) => {
  const screenMore630 = useMediaQuery({ minWidth: 631 })

  const featureList = features.map((text) => (
    <li key={text}>
      <CheckIcon />
      {text}
    </li>
  ))

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
            <Img
              src={screenMore630 ? img.desktop : img.mobile}
              alt="dashboard"
              layout="fixed"
              unoptimized
            />
          </S.Img>
        </S.ImgContainer>
      </S.Wrapper>
    </S.PageBanner>
  )
}
