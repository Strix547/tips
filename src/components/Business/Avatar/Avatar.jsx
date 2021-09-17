import Image from 'next/image'

import * as S from './Avatar.styled'

export const AvatarBusiness = ({ company, avatar, firstName, lastName }) => {
  return (
    <S.AvatarBusiness>
      {company.logo && (
        <S.CompanyLogo>
          <Image
            src={company.logo}
            alt={company.name}
            width="100%"
            height="100%"
            layout="fill"
            unoptimized
          />
        </S.CompanyLogo>
      )}

      <S.EmployeeRow>
        <S.Avatar>
          <Image src={avatar} alt={`фото ${firstName} ${lastName}`} />
        </S.Avatar>

        <S.Right>
          <S.Text>
            <span>{firstName}</span> <span>{lastName}</span>
          </S.Text>

          <S.Text>Сотрудник в {company.name}</S.Text>
        </S.Right>
      </S.EmployeeRow>
    </S.AvatarBusiness>
  )
}
