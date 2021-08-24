import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'ui'

import * as S from './RowSection.styled'

import ArrowIcon from '@public/icons/arrows/green-right.svg'

export const RowSection = ({ title, subtitle, detailsLink, features, action, img, reversed }) => {
  const featureList = features.map((title) => <li key={title}>{title}</li>)

  return (
    <S.RowSection $reversed={reversed}>
      <S.Left>
        <S.LeftTop>
          <S.Heading level={3}>{title}</S.Heading>

          <Link href={detailsLink}>
            <a>
              Подробнее
              <ArrowIcon />
            </a>
          </Link>
        </S.LeftTop>
        <S.Subtitle>{subtitle}</S.Subtitle>

        <S.FeatureList>{featureList}</S.FeatureList>

        <Button>{action.label}</Button>
      </S.Left>

      <S.ImgContainer>
        <Image src={img} alt={`${title} dashboard`} />
        <S.Circle />
      </S.ImgContainer>
    </S.RowSection>
  )
}
