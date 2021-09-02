import Image from 'next/image'
import Link from 'next/link'

import { LinkButton } from 'ui'

import * as S from './RowSection.styled'

import ArrowIcon from '@public/icons/arrows/green-right.svg'

export const RowSection = ({ title, subtitle, pageLink, features, action, img, reversed }) => {
  const featureList = features.map((title) => <li key={title}>{title}</li>)

  return (
    <S.RowSection $reversed={reversed}>
      <S.Left>
        <S.LeftTop>
          <S.Heading level={3}>{title}</S.Heading>

          <Link href={pageLink}>
            <a>
              Подробнее
              <ArrowIcon />
            </a>
          </Link>
        </S.LeftTop>

        <S.Subtitle>{subtitle}</S.Subtitle>

        <S.FeatureList>{featureList}</S.FeatureList>

        <LinkButton href={pageLink}>{action.label}</LinkButton>
      </S.Left>

      <S.ImgContainer>
        <Image src={img} alt={`${title} dashboard`} unoptimized />
        <S.Circle />
      </S.ImgContainer>
    </S.RowSection>
  )
}
