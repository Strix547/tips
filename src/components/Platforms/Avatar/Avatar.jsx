import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import * as S from './Avatar.styled'

export const PlatformAvatar = ({ company, avatar, firstName, lastName }) => {
  const { t } = useTranslation('common')

  return (
    <S.PlatformAvatar>
      {company.logo && (
        <S.CompanyLogo>
          <Image src={company.logo} alt={company.name} width="100%" height="100%" layout="fill" />
        </S.CompanyLogo>
      )}

      <S.EmployeeRow>
        <S.Avatar>
          <Image src={avatar} width={90} height={90} alt={`photo ${firstName} ${lastName}`} />
        </S.Avatar>

        <S.Right>
          <S.Text>
            <span>{firstName}</span> <span>{lastName}</span>
          </S.Text>

          <S.Text>
            {t('employee-in')} {company.name}
          </S.Text>
        </S.Right>
      </S.EmployeeRow>
    </S.PlatformAvatar>
  )
}
